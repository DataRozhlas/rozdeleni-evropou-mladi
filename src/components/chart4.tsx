import Highcharts from 'highcharts';

import {
    HighchartsProvider,
    HighchartsChart,
    Chart,
    XAxis,
    YAxis,
    BarSeries,
    Legend,
    Tooltip
} from "react-jsx-highcharts";

type Item = {
    q: string;
    a: any[][];
};

const isMobile = window.innerWidth < 640;


const item: Item = {
    q: "Jsou lidé ve věku 18-29 celkově spokojeni s členství Česka v EU?",
    a: [
        ["Určitě ano", 17.3313965467036,
            71.8069886769121,
            52.0683815873929,
            5.70575112757364,
            0,
            0,
            0],
        ["Spíše ano", 48.8765580911043,
            27.1758259480526,
            47.3171740096262,
            86.9995334442153,
            51.0060397001043,
            4.34860525915893,
            0],
        ["Spíše ne", 23.8739382069679,
            1.01718537503526,
            0.614444402980826,
            6.91641937893873,
            45.6891270408563,
            60.9724688985805,
            29.9819571192512],
        ["Určitě ne", 9.91810715522424,
            0,
            0,
            0.378296049272327,
            3.30483325903948,
            34.6789258422606,
            70.0180428807488]
    ]
}

const roundToOneDecimal = (num: number) => { const result = parseFloat(num.toFixed(1)); return result.toLocaleString("cs-Cz") + " %" };


const Chart4 = () => {


    const thisChartColors: string[] = [
        "#db3d78",
        "#e293b3",
        "#85a1e0",
        "#5651ce"
    ]

    return (
        <div>
            <HighchartsProvider Highcharts={Highcharts}>

                <h1 className="text-xl font-bold">{`${item.q}`}</h1>
                <HighchartsChart plotOptions={{
                    bar: {
                        pointWidth: 60,
                        pointPadding: 0,
                        groupPadding: 0.125,
                        events: {
                            legendItemClick: function () {
                                return false;
                            }
                        }
                    },
                    series: {
                        animation: false,
                        states: { hover: { enabled: false } }, // disable hover
                    }
                }}>
                    <Chart type="bar" height={isMobile ? 115 : 176 * 0.7} marginLeft={115} marginBottom={0} marginRight={20} />
                    <XAxis type="category" categories={["Celá populace"]} />
                    <YAxis max={100} labels={{ enabled: false }}>
                        {item.a.reverse().map((answer, index) => {
                            const name = answer[0].toString()
                            const data = answer.slice(1, 2)
                            return <BarSeries key={index} name={name} data={data} stacking='normal' color={thisChartColors[index]} dataLabels={{ enabled: true, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFF", style: { textOutline: "none" } }} />
                        })}
                    </YAxis>
                    <Legend reversed={true} verticalAlign='top' floating={false} />
                    <Tooltip valueDecimals={1} valueSuffix=" %" />
                </HighchartsChart>
                <HighchartsChart plotOptions={{
                    bar: {
                        pointPadding: 0,
                        groupPadding: 0.125,
                    },
                    series: {
                        animation: false,
                        states: { hover: { enabled: false } }, // disable hover
                    }
                }}>
                    <Chart type="bar" height={isMobile ? 240 : 320} margin={[0, 20, 50, 115]} />
                    <XAxis type="category" categories={["Euronadšenci", "Příznivci", "Vlažní příznivci", "Nejistí", "Odpůrci", "Skalní odpůrci"]} />
                    <YAxis max={100} labels={{ formatter: function () { return this.isLast ? `${this.value} %` : this.value.toString() } }}>
                        {item.a.map((answer, index) => {
                            const name = answer[0].toString()
                            const data = answer.slice(2, 8)
                            return <BarSeries key={index} name={name} data={data} stacking='normal' color={thisChartColors[index]} />
                        })}
                    </YAxis>
                    <Tooltip valueDecimals={1} valueSuffix=" %" />
                </HighchartsChart>
            </HighchartsProvider>            <div>
                <p className={"text-right text-xs"}>Zdroj: <a className={"text-blue-800 underline"} href="https://www.irozhlas.cz/rozdeleni-evropou" target="_blank">STEM pro ČRo</a></p>
            </div>
        </div>
    )
}

export default Chart4;
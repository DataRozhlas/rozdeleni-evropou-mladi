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
    q: "Jak by lidé ve věku 18-29 hlasovali v referendu o vystoupení Česka z EU?",
    a: [
        ["Určitě zůstat", 40.7909257472747,
            95.1065812032733,
            87.9401858946668,
            45.199189738162,
            13.7158203997323,
            2.13522852598718,
            0
        ],
        ["Spíše zůstat", 34.8389794081248,
            3.01389185469851,
            11.0924251366715,
            50.7693353458048,
            64.3387878059315,
            13.7856768791111,
            9.52003070898011],
        ["Spíše odejít", 15.4309611182734,
            1.87952694202823,
            0.967388968661717,
            3.46585181202339,
            21.18915482815,
            51.4181802270991,
            22.9103296377389
        ],
        ["Určitě odejít", 8.93913372632714,
            0,
            0,
            0.565623104009668,
            0.756236966186225,
            32.6609143678025,
            67.569639653281
        ]
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
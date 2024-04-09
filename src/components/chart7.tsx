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
    q: "Podporují lidé ve věku 18-29 let zavedení eura?",
    a: [
        ["Určitě ano", 6.96492399078097,
            38.7210800276675,
            15.3349036425201,
            1.11057661937081,
            0.756236966186225,
            0,
            2.43656305087435
        ],
        ["Spíše ano", 18.5620300000751,
            37.2922929373188,
            47.9771214226307,
            18.7040268590634,
            5.58809200228927,
            0.839809546209261,
            0
        ],
        ["Spíše ne", 25.3819984779739,
            13.7950518188341,
            27.1248611420836,
            42.4504489721506,
            21.945283983257,
            11.8964262931028,
            0
        ],
        ["Určitě ne", 49.0910475311701,
            10.1915752161795,
            9.56311379276547,
            37.7349475494151,
            71.7103870482675,
            87.2637641606879,
            97.5634369491256
        ]
    ]
}

const roundToOneDecimal = (num: number) => { const result = parseFloat(num.toFixed(1)); return result.toLocaleString("cs-Cz") + " %" };


const Chart7 = () => {


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
                    <XAxis type="category" categories={["Mladí 18-29"]} />
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

export default Chart7;
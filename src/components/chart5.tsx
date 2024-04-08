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
    q: "Evropané, nebo Češi?",
    a: [
        ["výhradně Čechem/Češkou, vůbec ne Evropanem/Evropankou", 11.2126000282537,
            6.75667524220059,
            3.04911237378714,
            6.34922682803169,
            12.0514301331974,
            24.9436622350289,
            28.6448637103631
        ],
        ["více Čechem/Češkou než Evropanem/Evropankou", 34.258792576456,
            33.8373435851133,
            27.5924526707323,
            38.9623317809447,
            38.456379493088,
            31.4260181419867,
            19.155396035729
        ],
        ["stejně Čechem/Češkou jako Evropanem/Evropankou", 36.9934738811416,
            42.6524733862247,
            56.2686543605526,
            41.574498351521,
            31.346095878507,
            19.8049308779367,
            15.5160021045269],
        ["více Evropanem/Evropankou než Čechem/Češkou", 8.60719838903932,
            15.3501588303981,
            8.60233107613304,
            8.56921069144782,
            10.6609948765696,
            4.22442762673348,
            0
        ], [
            "výhradně Evropanem/Evropankou, vůbec ne Čechem/Češkou", 1.39053136140032,
            0,
            1.81654034276368,
            1.09018311945938,
            2.37433314454479,
            0,
            4.02036950351492
        ],
        ["necítím se být ani jedním", 7.537403763709,
            1.40334895606334,
            2.67090917603119,
            3.45454922859526,
            5.11076647409328,
            19.6009611183142,
            32.663368645866
        ]
    ]
}

const roundToOneDecimal = (num: number) => { const result = parseFloat(num.toFixed(1)); return result.toLocaleString("cs-Cz") + " %" };


const Chart4 = () => {


    const thisChartColors: string[] = [
        "#ccc6c8",
        "#5651ce",
        "#85a1e0",
        "#f2d0a2",
        "#e293b3",
        "#db3d78"
    ]

    return (
        <div>
            <HighchartsProvider Highcharts={Highcharts}>

                <h1 className="text-xl font-bold">{`${item.q}`}</h1>
                <h2 className="text-lg">Odpovědi mladých 18-29 let, zda se víc cítí Evropany, nebo Čechy</h2>
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
                    <Chart type="bar" height={isMobile ? 190 : 176 * 0.7} marginLeft={115} marginBottom={0} marginRight={20} />
                    <XAxis type="category" categories={["Celá populace"]} />
                    <YAxis max={100} labels={{ enabled: false }}>
                        {item.a.reverse().map((answer, index) => {
                            const name = answer[0].toString()
                            const data = answer.slice(1, 2)
                            return <BarSeries key={index} name={name} data={data} stacking='normal' color={thisChartColors[index]} dataLabels={{ enabled: true, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFF", style: { textOutline: "none" } }} />
                        })}
                    </YAxis>
                    <Legend reversed={true} verticalAlign='top' floating={false} navigation={{ enabled: false }} />
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
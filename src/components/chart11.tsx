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
    q: "Důvěra v EU, NATO a české instituce",
    a: [
        ["Určitě ano", 32.2963888543181, 24.0775016546794, 17.9530228596982, 26.0200080786765, 34.1911750657477, 33.2906313112715, 43.2904830214543],
        ["Spíše ne", 27.774207797033, 21.2031717498974, 22.9822559155573, 21.7381748328503, 33.5691924958113, 37.9894078895916, 35.5033818755825],
        ["Spíše ano", 31.1247049122571, 36.4882705362652, 41.029027494416, 31.2624825608368, 23.9507635621809, 24.4199201797671, 16.4622345730705],
        ["Určitě ano", 8.80469843639178, 18.2310560591579, 18.0356937303284, 20.9793345276364, 8.8886887626004, 4.30004061936967, 4.74390052989264],
    ]
}

const roundToOneDecimal = (num: number) => { const result = parseFloat(num.toFixed(1)); return result.toLocaleString("cs-Cz") + " %" };


const Chart10 = () => {


    const thisChartColors: string[] = [
        "#db3d78",
        "#e293b3",
        "#85a1e0",
        "#5651ce"
    ]  // 0, 1, 2] ]

    return (
        <div>
            <HighchartsProvider Highcharts={Highcharts}>

                <h1 className="text-xl font-bold">{`${item.q}`}</h1>
                <h2 className="text-lg">„Důvěřujete následujícím institucím?“</h2>
                <HighchartsChart plotOptions={{
                    bar: {
                        pointWidth: 60,
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
                    <Chart type="bar" height={isMobile ? 110 : 176 * 0.7} marginLeft={115} marginBottom={0} marginRight={20} />
                    <XAxis type="category" categories={["EU"]} />
                    <YAxis max={100} labels={{ enabled: false }}>
                        {item.a.map((answer, index) => {
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
                        pointWidth: 60,
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
                    <Chart type="bar" height={isMobile ? 80 : 176 * 0.7} marginLeft={115} marginBottom={0} marginTop={0} marginRight={20} />
                    <XAxis type="category" categories={["NATO"]} />
                    <YAxis max={100} labels={{ enabled: false }}>
                        {item.a.map((answer, index) => {
                            const name = answer[0].toString()
                            const data = answer.slice(2, 3)
                            return <BarSeries key={index} name={name} data={data} stacking='normal' color={thisChartColors[index]} dataLabels={{ enabled: true, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFF", style: { textOutline: "none" } }} />
                        })}
                    </YAxis>
                    <Tooltip valueDecimals={1} valueSuffix=" %" />
                </HighchartsChart>
                <HighchartsChart plotOptions={{
                    bar: {
                        groupPadding: 0.125,
                    },
                    series: {
                        animation: false,
                        states: { hover: { enabled: false } }, // disable hover
                    }
                }}>
                    <Chart type="bar" height={isMobile ? 240 : 320} margin={[0, 20, 50, 115]} />
                    <XAxis type="category" categories={["Ústavní soud", "Prezident republiky", "Senát", "Poslanecká sněmovna Parlamentu", "Členové vlády ČR"]} />
                    <YAxis max={100} labels={{ formatter: function () { return this.isLast ? `${this.value} %` : this.value.toString() } }}>
                        {item.a.map((answer, index) => {
                            const name = answer[0].toString()
                            const data = answer.slice(3, 8)
                            return <BarSeries key={index} name={name} data={data} stacking='normal' color={thisChartColors[index]} dataLabels={{ enabled: true, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFF", style: { textOutline: "none" } }} />
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

export default Chart10;
import { useState, useEffect } from 'preact/hooks'
import Highcharts from 'highcharts';
import addHighchartsMore from 'highcharts/highcharts-more';

import {
    HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, BarSeries, Tooltip
} from 'react-jsx-highcharts';

addHighchartsMore(Highcharts);

const plotOptions = {

};

const roundToOneDecimal = (num: number) => { const result = parseFloat(num.toFixed(1)); return result.toLocaleString("cs-Cz") + " %" };


export default function Chart2() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <h1 className="text-xl font-bold">Co oceňují mladí lidé ve věku 18-29 let na členství v EU</h1>
            <HighchartsProvider Highcharts={Highcharts}>
                <HighchartsChart plotOptions={plotOptions}>
                    <Chart marginRight={25} height={windowWidth > 600 ? "105%" : "250%"} />


                    <Tooltip valueSuffix=' %' valueDecimals={2} />

                    <XAxis categories={[
                        "Možnost volně cestovat",
                        "Možnost pracovat, studovat v zahraničí bez zbytečných omezení",
                        "Záruka mírového soužití členských států",
                        "Jednotný trh pro obchod a zboží",
                        "Peníze, které plynou z EU do ČR",
                        "Záruka mezinárodní bezpečnosti",
                        "Telefonování bez roamingových poplatků",
                        "Ochrana práv a svobod jednotlivce",
                        "Záruka demokracie",
                        "Díky členství v EU jsme součástí světové velmoci",
                        "Sdílené kulturní bohatství a rozmanitost",
                        "Společná měna euro",
                        "Něco jiného",
                        "Žádné výhody nepřináší"
                    ]} >

                    </XAxis>

                    <YAxis labels={{ formatter: function () { return this.isLast ? `${this.value} %` : this.value.toString() } }}>
                        <BarSeries pointPadding={0.1} groupPadding={0} color={"#5651ce"} dataLabels={{ inside: false, enabled: true, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#000", style: { textOutline: "none" } }} name="Souhlasí" data={[
                            55.4081250948619,
                            36.1640808373567,
                            23.7230552660554,
                            22.3787134003981,
                            21.8022354132313,
                            21.6932804763961,
                            18.3793202682771,
                            16.0671521111538,
                            15.6456710116807,
                            10.7351121496473,
                            7.46866195500233,
                            6.13268206679089,
                            { y: 0.423663757172068, color: "#f2d0a2" },
                            { y: 6.50998814171044, color: "#db3d78" }
                        ]} />
                    </YAxis>
                </HighchartsChart>
            </HighchartsProvider>
            <div>
                <p className={"text-right text-xs"}>Zdroj: <a className={"text-blue-800 underline"} href="https://www.irozhlas.cz/rozdeleni-evropou" target="_blank">STEM pro ČRo</a></p>
            </div>
        </div>
    )
}
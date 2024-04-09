import { useState, useEffect } from 'react'
import Highcharts from 'highcharts';
import addHighchartsMore from 'highcharts/highcharts-more';

import {
    HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, BarSeries, Tooltip
} from 'react-jsx-highcharts';

addHighchartsMore(Highcharts);

const plotOptions = {

};

const roundToOneDecimal = (num: number) => { const result = parseFloat(num.toFixed(1)); return result.toLocaleString("cs-Cz") + " %" };


export default function Chart3() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <h1 className="text-xl font-bold">Co nejvíc vadí mladým lidem ve věku 18-29 let na členství v EU</h1>
            <HighchartsProvider Highcharts={Highcharts}>
                <HighchartsChart plotOptions={plotOptions}>
                    <Chart marginRight={25} height={windowWidth > 600 ? "105%" : "250%"} />


                    <Tooltip valueSuffix=' %' valueDecimals={2} />

                    <XAxis categories={[
                        "Tlak na zavedení eura v ČR",
                        "Nedostatečná ochrana před migrací",
                        "Přílišný tlak na „zelená“ opatření",
                        "Příliš velká tolerance a podpora menšin",
                        "Komplikované a nesrozumitelné rozhodování evropských instituc",
                        "Členské státy se obtížně dohodnou na společných postupech",
                        "Za peníze, které EU odvedeme, dostáváme příliš málo nazpátek",
                        "Zásahy do naší národní suverenity",
                        "Příliš mnoho dotací, které křiví trh",
                        "Odtrženost evropských institucí od lidí a běžného života",
                        "Závazek pomáhat ostatním členům EU",
                        "Něco jiného",
                        "Žádné nevýhody nepřináší"
                    ]} >

                    </XAxis>

                    <YAxis labels={{ formatter: function () { return this.isLast ? `${this.value} %` : this.value.toString() } }}>
                        <BarSeries pointPadding={0.1} groupPadding={0} color={"#db3d78"} dataLabels={{ inside: false, enabled: true, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#000", style: { textOutline: "none" } }} name="Souhlasí" data={[
                            45.7036962326566,
                            40.7987239963191,
                            29.9099881103923,
                            21.2597434376572,
                            20.8391111924765,
                            20.251057851249,
                            17.3795013376951,
                            15.2296439220304,
                            13.3955069246924,
                            10.9888537780194,
                            8.55835037418808,
                            { y: 1.00514087594415, color: "#f2d0a2" },
                            { y: 4.06543043299367, color: "#5651ce" }
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
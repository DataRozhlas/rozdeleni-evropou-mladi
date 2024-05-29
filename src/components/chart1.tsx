import { useState, useEffect } from 'react'
import Highcharts from 'highcharts';
import addHighchartsMore from 'highcharts/highcharts-more';

import {
    HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, BarSeries, Tooltip, Legend
} from 'react-jsx-highcharts';

addHighchartsMore(Highcharts);

const plotOptions = {

};

const roundToOneDecimal = (num: number) => { const result = parseFloat(num.toFixed(1)); return result.toLocaleString("cs-Cz") + " %" };

export default function Chart1() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <h1 className="text-xl font-bold">Více příznivců, méně odpůrců</h1>
            <HighchartsProvider Highcharts={Highcharts}>
                <HighchartsChart plotOptions={plotOptions}>
                    <Chart marginRight={windowWidth < 600 ? 0 : 25} marginLeft={windowWidth < 600 ? 18 : undefined} />


                    <Tooltip valueSuffix=' %' valueDecimals={1} />

                    <XAxis categories={[
                        "Celá populace", "Mladí 18-29 let"
                    ]} labels={{
                        rotation: windowWidth < 600 ? -90 : 0, x: windowWidth < 600 ? -4 : -15
                    }}>

                    </XAxis>

                    <YAxis labels={{ formatter: function () { return this.isLast ? `${this.value} %` : this.value.toString() } }} max={100}>
                        <BarSeries stacking={"normal"} pointPadding={0.1} groupPadding={0} color={"#9E2822"} dataLabels={{ enabled: true, allowOverlap: true, padding: 0, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFFFFF", style: { textOutline: "none" }, rotation: windowWidth < 600 ? -90 : 0 }} name="Skalní odpůrci" data={[
                            13.6277629505782,
                            5.29458424878455
                        ]} />
                        <BarSeries stacking={"normal"} pointPadding={0.1} groupPadding={0} color={"#E55951"} dataLabels={{ enabled: true, allowOverlap: true, padding: 0, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFFFFF", style: { textOutline: "none" }, rotation: windowWidth < 600 ? -90 : 0 }} name="Odpůrci" data={[
                            24.1944307765011,
                            15.361326158485]} />
                        <BarSeries stacking={"normal"} pointPadding={0.1} groupPadding={0} color={"#969694"} dataLabels={{ enabled: true, allowOverlap: true, padding: 0, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFFFFF", style: { textOutline: "none" }, rotation: windowWidth < 600 ? -90 : 0 }} name="Nejistí" data={[
                            20.989693153824,
                            23.3445305046642
                        ]} />
                        <BarSeries stacking={"normal"} pointPadding={0.1} groupPadding={0} color={"#4C9DDA"} dataLabels={{ enabled: true, allowOverlap: true, padding: 0, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFFFFF", style: { textOutline: "none" }, rotation: windowWidth < 600 ? -90 : 0 }} name="Vlažní příznivci" data={[
                            20.9687170029353,
                            29.6863185844427
                        ]} />
                        <BarSeries stacking={"normal"} pointPadding={0.1} groupPadding={0} color={"#206096"} dataLabels={{ enabled: true, allowOverlap: true, padding: 0, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFFFFF", style: { textOutline: "none" }, rotation: windowWidth < 600 ? -90 : 0 }} name="Příznivci" data={[
                            10.796974783129,
                            16.5015521351476
                        ]} />
                        <BarSeries stacking={"normal"} pointPadding={0.1} groupPadding={0} color={"#163E5F"} dataLabels={{ enabled: true, allowOverlap: true, padding: 0, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFFFFF", style: { textOutline: "none" }, rotation: windowWidth < 600 ? -90 : 0 }} name="Euronadšenci" data={[
                            9.42242133303236,
                            9.81168836847593
                        ]} />

                    </YAxis>
                    <Legend reversed={true} verticalAlign='top' floating={false} navigation={{ enabled: false }} />
                </HighchartsChart>
            </HighchartsProvider>
            <div>
                <p className={"text-right text-xs"}>Zdroj: <a className={"text-blue-800 underline"} href="https://www.irozhlas.cz/rozdeleni-evropou" target="_blank">STEM pro ČRo</a></p>
            </div>
        </div>
    )
}
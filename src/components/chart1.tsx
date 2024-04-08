import Highcharts from 'highcharts';
import addHighchartsMore from 'highcharts/highcharts-more';

import {
    HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, BarSeries, Tooltip
} from 'react-jsx-highcharts';

addHighchartsMore(Highcharts);

const plotOptions = {

};

const roundToOneDecimal = (num: number) => { const result = parseFloat(num.toFixed(1)); return result.toLocaleString("cs-Cz") + " %" };

export default function Chart1() {
    return (
        <div>
            <h1 className="text-xl font-bold">Více příznivců, méně odpůrců</h1>
            <HighchartsProvider Highcharts={Highcharts}>
                <HighchartsChart plotOptions={plotOptions}>
                    <Chart marginRight={25} />


                    <Tooltip valueSuffix=' %' valueDecimals={1} />

                    <XAxis categories={[
                        "Celá populace", "Mladí 18-29 let"
                    ]}>

                    </XAxis>

                    <YAxis labels={{ formatter: function () { return this.isLast ? `${this.value} %` : this.value.toString() } }} max={100}>
                        <BarSeries stacking={"normal"} pointPadding={0.1} groupPadding={0} color={"#9E2822"} dataLabels={{ enabled: true, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFFFFF", style: { textOutline: "none" } }} name="Skalní odpůrci" data={[
                            13.6277629505782,
                            5.29458424878455
                        ]} />
                        <BarSeries stacking={"normal"} pointPadding={0.1} groupPadding={0} color={"#E55951"} dataLabels={{ enabled: true, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFFFFF", style: { textOutline: "none" } }} name="Odpůrci" data={[
                            24.1944307765011,
                            15.361326158485]} />
                        <BarSeries stacking={"normal"} pointPadding={0.1} groupPadding={0} color={"#969694"} dataLabels={{ enabled: true, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFFFFF", style: { textOutline: "none" } }} name="Nejistí" data={[
                            20.989693153824,
                            23.3445305046642
                        ]} />
                        <BarSeries stacking={"normal"} pointPadding={0.1} groupPadding={0} color={"#4C9DDA"} dataLabels={{ enabled: true, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFFFFF", style: { textOutline: "none" } }} name="Vlažní příznivci" data={[
                            20.9687170029353,
                            29.6863185844427
                        ]} />
                        <BarSeries stacking={"normal"} pointPadding={0.1} groupPadding={0} color={"#206096"} dataLabels={{ enabled: true, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFFFFF", style: { textOutline: "none" } }} name="Příznivci" data={[
                            10.796974783129,
                            16.5015521351476
                        ]} />
                        <BarSeries stacking={"normal"} pointPadding={0.1} groupPadding={0} color={"#163E5F"} dataLabels={{ enabled: true, formatter: function () { return roundToOneDecimal(this.y || 0) }, color: "#FFFFFF", style: { textOutline: "none" } }} name="Euronadšenci" data={[
                            9.42242133303236,
                            9.81168836847593
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
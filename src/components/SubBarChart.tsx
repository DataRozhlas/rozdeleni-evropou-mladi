import Highcharts from 'highcharts';
import {
    HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, BarSeries, Tooltip
} from 'react-jsx-highcharts';

const plotOptions = {

};


export default function SubBarChart({ categories, data, color, windowWidth }: { categories: string[], data: number[], color: string, windowWidth: number }) {
    return (
        <HighchartsProvider Highcharts={Highcharts}>
            <HighchartsChart plotOptions={plotOptions}>
                <Chart marginRight={25} height={windowWidth > 600 ? "105%" : "250%"} />


                <Tooltip valueSuffix=' %' valueDecimals={2} />

                <XAxis categories={categories} >

                </XAxis>

                <YAxis labels={{ formatter: function () { return this.isLast ? `${this.value} %` : this.value.toString() } }}>
                    <BarSeries dataSorting={{ enabled: true }} pointPadding={0.1} groupPadding={0} color={color} dataLabels={{ inside: false, enabled: true, formatter: function () { return this.y + " %" || 0 + " %" }, color: "#000", style: { textOutline: "none" } }} name="rozhodně ano" data={data} />
                </YAxis>
            </HighchartsChart>
        </HighchartsProvider>)
}
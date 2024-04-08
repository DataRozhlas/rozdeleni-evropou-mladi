import Highcharts from 'highcharts';
import addHighchartsMore from 'highcharts/highcharts-more';

import {
    HighchartsProvider, HighchartsChart, Chart, XAxis, YAxis, ColumnSeries, ErrorBarSeries, Tooltip
} from 'react-jsx-highcharts';

addHighchartsMore(Highcharts);

const plotOptions = {

};


export default function Chart2() {
    return (
        <div>
            <h1 className="text-xl font-bold">S každou další nákazou narůstá pravděpodobnost dlouhodobých následků</h1>
            <HighchartsProvider Highcharts={Highcharts}>
                <HighchartsChart plotOptions={plotOptions}>
                    <Chart marginRight={25} />


                    <Tooltip valueSuffix=' %' />

                    <XAxis categories={[
                        "celkově",
                        "1 nákaza",
                        "2 nákazy",
                        "3 a více nákaz",
                    ]}>

                    </XAxis>

                    <YAxis labels={{ formatter: function () { return this.isLast ? `${this.value} %` : this.value.toString() } }}>
                        <YAxis.Title align='low'>Pravděpodobnost</YAxis.Title>
                        <ColumnSeries color={"#85a1e0"} name="pravděpodobnost" data={[
                            { y: 19, color: "#5651ce" }, 14.6, 25.4, 37.9]} />
                        <ErrorBarSeries name="95% interval spolehlivosti" data={[
                            [
                                17.3,
                                20.9
                            ],
                            [
                                12.8,
                                16.7
                            ],
                            [
                                21.5,
                                29.7
                            ],
                            [
                                29.5,
                                47
                            ],

                        ]} />
                    </YAxis>
                </HighchartsChart>
            </HighchartsProvider>
            <div>
                <p className={"text-right text-xs"}>Zdroj: <a className={"text-blue-800 underline"} href="https://www150.statcan.gc.ca/n1/pub/75-006-x/2023001/article/00015-eng.htm" target="_blank">Statistics Canada</a></p>
            </div>
        </div>
    )
}
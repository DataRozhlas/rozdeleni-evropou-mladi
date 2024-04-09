import { useEffect } from 'react'
import Chart1 from './components/chart1'
import Chart2 from './components/chart2'
import Chart3 from './components/chart3'
import Chart4 from './components/chart4'
import Chart5 from './components/chart5'
import Chart6 from './components/chart6'
import Chart7 from './components/chart7'
import Chart8 from './components/chart8'

import { usePostMessageWithHeight } from './hooks/usePostHeightMessage'


function App({ chart }: { chart: string | null }) {
  const { containerRef, postHeightMessage } = usePostMessageWithHeight(`chart-${chart}`)

  useEffect(() => {
    postHeightMessage()
  }, [])

  return (
    <div ref={containerRef}>
      {chart === null && <Chart1 />}
      {chart === "1" && <Chart1 />}
      {chart === "2" && <Chart2 />}
      {chart === "3" && <Chart3 />}
      {chart === "4" && <Chart4 />}
      {chart === "5" && <Chart5 />}
      {chart === "6" && <Chart6 />}
      {chart === "7" && <Chart7 />}
      {chart === "8" && <Chart8 />}

    </div>)
}

export default App

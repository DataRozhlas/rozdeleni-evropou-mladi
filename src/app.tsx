import { useEffect } from 'preact/hooks'
import Chart1 from './components/chart1'
import Chart2 from './components/chart2'
import { usePostMessageWithHeight } from './hooks/usePostHeightMessage'

export function App({ chart }: { chart: string | null }) {
  //const [count, setCount] = useState(0)
  const { containerRef, postHeightMessage } = usePostMessageWithHeight(`chart-${chart}`)

  useEffect(() => {
    postHeightMessage()
  }, [])

  return (
    <div ref={containerRef}>
      {chart === "1" && <Chart1 />}
      {chart === "2" && <Chart2 />}
    </div>
  )
}

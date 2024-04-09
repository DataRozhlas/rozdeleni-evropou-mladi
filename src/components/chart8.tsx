import { useState, useEffect } from "preact/hooks"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import SubBarChart from "./SubBarChart"

const data = [
    {
        q: "Řešení problémů spojených s přistěhovalectvím",
        a: [43, 42, 35, 44, 44, 46, 54]

    },
    {
        q: "Zajištění bezpečnosti uvnitř EU",
        a: [41, 44, 48, 40, 35, 38, 42]
    },
    {
        q: "Udržení stability hospodářství EU",
        a: [37, 56, 44, 36, 28, 30, 41]
    },
    {
        q: "Zajištění obranyschopnosti EU",
        a: [34, 32, 43, 36, 30, 30, 24]
    },
    {
        q: "Podpora inovací, vývoje a vědy",
        a: [33, 48, 38, 36, 26, 22, 29]
    },
    {
        q: "Zlepšení přístupu občanů ke vzdělání a odborné přípravě",
        a: [28, 31, 35, 28, 26, 24, 19]
    },
    {
        q: "Omezení projevů extremismu",
        a: [25, 49, 27, 21, 19, 23, 32]
    },
    {
        q: "Ochrana životního prostředí",
        a: [35, 51, 45, 32, 29, 31, 24]
    },
    {
        q: "Boj proti dezinformacím",
        a: [36, 59, 45, 36, 27, 32, 28]
    },
    {
        q: "Boj proti změně klimatu",
        a: [28, 43, 41, 27, 23, 18, 17]
    }
]

const groups = [
    ["Všichni mladí 18-29", "#4CAF50"],
    ["Mladí euronadšenci", "#163E5F"],
    ["Mladí příznivci", "#206096"],
    ["Mladí vlažní příznivci", "#4C9DDA"],
    ["Mladí nejistí", "#969694"],
    ["Mladí odpůrci", "#E55951"],
    ["Mladí skalní odpůrci", "#9E2822"]
]


export default function Chart8() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [selected, setSelected] = useState(0);
    const [color, setColor] = useState("#4CAF50");
    const [selectedData, setSelectedData] = useState(data.map(item => { return item.a[selected] }) as number[])

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <h1 className="text-xl font-bold">Na co se má EU v dohledné budoucnosti určitě zaměřit?</h1>
            <div className="my-2">
                <Select onValueChange={(e) => {
                    const index = Number(e)
                    setSelected(index)
                    setSelectedData(data.map(item => { return item.a[index] }))
                    setColor(groups[index][1])
                }}>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder={groups[selected][0]} />
                    </SelectTrigger>
                    <SelectContent>
                        {groups.map((group, index) => (
                            <SelectItem key={index} value={index}>{group[0]}</SelectItem>
                        ))}
                    </SelectContent>
                </Select>
            </div>

            <SubBarChart categories={data.map(item => { return item.q })} data={selectedData} color={color} windowWidth={windowWidth} />

            <div>
                <p className={"text-right text-xs"}>Zdroj: <a className={"text-blue-800 underline"} href="https://www.irozhlas.cz/rozdeleni-evropou" target="_blank">STEM pro ČRo</a></p>
            </div>
        </div>
    )
}
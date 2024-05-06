import { useState, useEffect } from "react"
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
        a: [62, 60, 53, 58, 69, 64, 65]

    },
    {
        q: "Zajištění bezpečnosti uvnitř EU",
        a: [54, 71, 59, 57, 57, 44, 49]
    },
    {
        q: "Udržení stability hospodářství EU",
        a: [45, 69, 56, 43, 47, 34, 38]
    },
    {
        q: "Zajištění obranyschopnosti EU",
        a: [46, 68, 58, 49, 49, 34, 37]
    },
    {
        q: "Podpora inovací, vývoje a vědy",
        a: [41, 68, 45, 39, 38, 32, 39]
    },
    {
        q: "Zlepšení přístupu občanů ke vzdělání a odborné přípravě",
        a: [35, 52, 35, 29, 35, 31, 37]
    },
    {
        q: "Omezení projevů extremismu",
        a: [41, 67, 44, 41, 38, 33, 37]
    },
    {
        q: "Ochrana životního prostředí",
        a: [36, 50, 42, 35, 36, 32, 30]
    },
    {
        q: "Boj proti dezinformacím",
        a: [37, 76, 46, 35, 35, 25, 31]
    },
    {
        q: "Boj proti změně klimatu",
        a: [26, 39, 32, 26, 24, 21, 24]
    }
]

const groups = [
    ["Celá populace", "#4CAF50"],
    ["Euronadšenci", "#163E5F"],
    ["Příznivci", "#206096"],
    ["Vlažní příznivci", "#4C9DDA"],
    ["Nejistí", "#969694"],
    ["Odpůrci", "#E55951"],
    ["Skalní odpůrci", "#9E2822"]
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
        <div className="max-w-[620px] mx-auto">
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
                            <SelectItem key={index} value={index.toString()}>{group[0]}</SelectItem>
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
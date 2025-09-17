"use client"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";



const HotGames = () => {

    // const [datas, setData] = useState([]);

    // useEffect(() => {
    //     fetch("/tab1.json")
    //         .then(res => res.json())
    //         .then(data => setData(data))
    // }, []);


    return (
        <div className="pt-6 min-h-screen">
            <p className='px-2 text-[#1FFC00] text-center font-semibold text-md'>Poker Win</p>

            <div className="bg-black p-2 text-left">
                {/* {datas.map(data => <div key={data.id} className="">
                    <Link href={data.link} > <Image src={data.img} width={200} height={300} alt="Game" className="rounded-lg" /></Link>
                </div>)} */}
                <Link href="/" > <Image src="/poker.jpg" width={300} height={300} alt="Game" className="rounded-lg mx-auto" /></Link>
                <Link href="https://game.pokerwin.cc/0301/web-mobile/?afcbfeed625147f39bae60c8d2eb1aa2b3490e1f3250ae3e3519aea72939a9a5&eyJTTiI6IjQ2NDk0N0M3ODc1NjQ4NDlCQzg0NDZEMzlEQjA3NDk2IiwiSUQiOiI4ZTU0MWNlYzRlZTI0Y2YwYTNhOGJkMzAzOTNkMjlkYSIsIk1ldGhvZCI6IkdldExvZ2luSDUiLCJMb2dpbklkIjoiSkJQTTAwMDAwMDAwMDAyNTY1MTYiLCJMYW5ndWFnZSI6IkVuX3VzIiwiU2lnbmF0dXJlIjoiZWFjMGQ2OGJhOTk5YzUwYmRiM2ExZDk1N2ZhNTU5ZmIifQ==" className="w-[300px] mx-auto flex items-center justify-center text-center px-6 py-2 bg-amber-400 text-black">Play Now</Link>
            </div>
        </div>

    )
}

export default HotGames 






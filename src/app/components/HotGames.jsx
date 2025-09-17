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
                <Link href="https://game.pokerwin.cc/0301/web-mobile/?305c7b12b5d565f7b2b957a190a59c8291cc91b311b7f2b071c3f809e2686b20&eyJTTiI6IjQ2NDk0N0M3ODc1NjQ4NDlCQzg0NDZEMzlEQjA3NDk2IiwiSUQiOiI5YmQzYWY2M2MyNzk0YTQ4YmMwYjA1ZmRiZTQ3NWY0ZCIsIk1ldGhvZCI6IkdldExvZ2luSDUiLCJMb2dpbklkIjoiSkJQTTAwMDAwMDAwMDAyNTY1MTYiLCJMYW5ndWFnZSI6IkVuX3VzIiwiU2lnbmF0dXJlIjoiZDkyMmMyNWY4ODI5MWM1NTBiNGFlYzgxYTQ4NjAzMmIifQ==" className="w-[300px] mx-auto flex items-center justify-center text-center px-6 py-2 bg-amber-400 text-black">Play Now</Link>
            </div>
        </div>

    )
}

export default HotGames 










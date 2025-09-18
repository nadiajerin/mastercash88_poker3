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
                <Link href="https://game.pokerwin.cc/0301/web-mobile/?2fa19d23d7b8d8e478e86a7b84bd492b41cf0ccaff6da41b796db1cb20b50086&eyJTTiI6IjQ2NDk0N0M3ODc1NjQ4NDlCQzg0NDZEMzlEQjA3NDk2IiwiSUQiOiI2MzM5NmJiNWU0YTE0YmY4YTFlZDhkYjRjMTFlNjIwZCIsIk1ldGhvZCI6IkdldExvZ2luSDUiLCJMb2dpbklkIjoiSkJQTTAwMDAwMDAwMDAyNTY1MTYiLCJMYW5ndWFnZSI6IkVuX3VzIiwiU2lnbmF0dXJlIjoiOWQwYzhkZTNjMzM0MDJhZWEwODdkNTBkZDgwNTkyOWIifQ==" className="w-[300px] mx-auto flex items-center justify-center text-center px-6 py-2 bg-amber-400 text-black">Play Now</Link>
            </div>
        </div>

    )
}

export default HotGames 













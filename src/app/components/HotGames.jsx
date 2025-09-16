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
                <Link href="https://game.pokerwin.cc/0301/web-mobile/?b3fe6248e6d11e29f87c96de1add3d3442529505aa6df22760092e8f8bc63139&eyJTTiI6IjQ2NDk0N0M3ODc1NjQ4NDlCQzg0NDZEMzlEQjA3NDk2IiwiSUQiOiI0ZWU2NWRkYzM1NmI0YjUwOTMzN2NkZjRmZGQzOWVmZSIsIk1ldGhvZCI6IkdldExvZ2luSDUiLCJMb2dpbklkIjoiSkJQTTAwMDAwMDAwMDAyNTY1MTYiLCJMYW5ndWFnZSI6IkVuX3VzIiwiU2lnbmF0dXJlIjoiNTNiYTE2Y2ZmZTU0ZGEyYzQyYWU0ZGE5NzIxMjBmYzEifQ==" className="w-[300px] mx-auto flex items-center justify-center text-center px-6 py-2 bg-amber-400 text-black">Play Now</Link>
            </div>
        </div>

    )
}

export default HotGames 



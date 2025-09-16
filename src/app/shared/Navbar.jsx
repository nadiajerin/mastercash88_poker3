'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useContext, useState } from 'react';
import { IoIosAddCircle } from "react-icons/io";

import { authContext } from '../lib/AuthProvider';


export default function Navbar() {

    const value = useContext(authContext)
    const { user } = value;
    const router = useRouter();

    if (!user) {
        return router.push('/login')
    }

    const [isOpen, setIsOpen] = useState(false);
    const pathName = usePathname();

    return (
        <nav className="max-w-[400px] mx-auto p-4 z-50 text-white max-sm:py-4 py-3 ">
            <div className=" ">
                {/* Logo */}
                <div className="text-2xl font-bold flex items-center justify-between">
                    <Link href="/" className='text-yellow-300 text-[20px] '>
                        {/* <Image className="" src="/logo2.png" width={100} height={50} alt="logo" /> */}
                        <p>MasterCash88</p>
                    </Link>

                    {/* Balance  */}
                    <div className='flex items-center gap-2 justify-center'>
                        <IoIosAddCircle className='text-[22px]' />
                        <p className="text-[11px]">0.00</p>
                    </div>
                </div>


            </div>

            {/* Mobile Menu (Slide In from Left) */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-black text-white z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex justify-between items-center px-4 py-4 border-b border-gray-700">
                    <span className="text-xl font-bold">Menu</span>
                    <button onClick={() => setIsOpen(false)} className="text-2xl">&times;</button>
                </div>

                <ul className="flex flex-col gap-4 p-6 text-lg">
                    <li className="cursor-pointer hover:text-red-600">
                        <Link href="/">হোম</Link>
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                        <Link href="/packages">প্যাকেজ</Link>
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                        <Link href="/demos">ডেমো</Link>
                    </li>
                    <li className="cursor-pointer hover:text-red-600">
                        <Link href="/contact">যোগাযোগ</Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}


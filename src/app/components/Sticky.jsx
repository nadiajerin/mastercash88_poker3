"use client"
import Link from "next/link"
import { useContext } from "react";
import { authContext } from "../lib/AuthProvider";

// React Icon
import { IoHome } from "react-icons/io5";
import { FaGift } from "react-icons/fa6";
import { HiUserAdd } from "react-icons/hi";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { PiHandWithdrawFill } from "react-icons/pi";


const Sticky = () => {

  const value = useContext(authContext)
  const { user } = value;

  return (
    <div className=" fixed bottom-0 left-0 right-0 bg-gray-800 z-30 max-w-[400px] mx-auto">
      <div className=" text-white ">


        {user ?
          <div className="grid grid-cols-5 gap-2 items-center justify-between">
            <Link href="/" className=" p-2 text-center">
              <IoHome className="text-center mx-auto" />
              <p className="text-sm">Home</p>
            </Link>

            <Link href="/promotion" className=" p-2 text-center">
              < FaGift className="text-center mx-auto" />
              <p className="text-sm">Promotion</p>
            </Link>

            <Link href="/" className="bg-[#1FFC00] rounded-full -mt-4 p-2 text-center text-black">
              <  HiUserAdd className="text-center mx-auto" />
              <p className="text-sm">Invite</p>
            </Link>

            <Link href="/deposit" className=" p-2 text-center">
              <RiMoneyDollarCircleFill className="text-center mx-auto" />
              <p className="text-sm">Deposit</p>
            </Link>

            <Link href="/withdraw" className=" p-2 text-center">
              < PiHandWithdrawFill className="text-center mx-auto" />
              <p className="text-sm">Withdraw</p>
            </Link>

          </div>

          :

          <div className="grid grid-cols-2 items-center justify-between">
            <Link href="/login" className="bg-black p-3 font-bold text-center">SignIn</Link>
            <Link href="/register" className="bg-gray-700 p-3 font-bold text-center">Register</Link>
          </div>
        }
      </div>
    </div>
  )
}

export default Sticky

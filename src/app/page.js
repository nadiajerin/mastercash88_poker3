
import Bslider from "./components/Bslider"
import Category from "./components/Category"
import HotGames from "./components/HotGames"
import Sticky from "./components/Sticky"
// import Tabs from "./components/Tabs"
import Navbar from "./shared/Navbar"
import { IoHome } from "react-icons/io5"


// React Icon
import { IoChatbubbleEllipsesOutline } from "react-icons/io5";
import { FaWhatsapp } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";

const page = () => {


  return (
    <div className="max-w-[400px] mx-auto relative bg-black text-white">

      <Navbar />
      <Sticky />
      <Bslider />
      <Category />
      {/* <Tabs /> */}
      <HotGames />
      

      {/* <div className="fixed bottom-10 right-2 z-50 max-w-[400px] mx-auto">
        <div className=" text-black p-1 mb-2 rounded-full flex items-center justify-center bg-[#1FFC00]">
            <Link href="/" className=" text-center">
              <IoChatbubbleEllipsesOutline className="text-center text-2xl mx-auto" />
            </Link>
        </div>
        <div className=" text-black p-1 mb-2 rounded-full flex items-center justify-center bg-[#1FFC00]">
            <Link href="/" className=" text-center">
              <FaWhatsapp className="text-center text-2xl mx-auto" />
            </Link>
        </div>
        <div className=" text-black p-1 mb-2 rounded-full flex items-center justify-center bg-[#1FFC00]">
            <Link href="/" className=" text-center">
              <CiFacebook className="text-center text-2xl mx-auto" />
            </Link>
        </div>
      </div> */}


    </div>
  )
}

export default page

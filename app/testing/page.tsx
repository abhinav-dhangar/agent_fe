"use client"
import "./style.css"
import Navbar from "@/widgets/Navbar"
import BlackButton from "@/widgets/PremiumBlackButton"
import {DemoOne} from "@/widgets/whatsapp/Input"
export default function Page() {
    return (
        <div>
            <Navbar />
            <BlackButton />
            <DemoOne />
            {/* <h1 className="myron    ">Testing Page</h1> */}
        </div>
    )
}
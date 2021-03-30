import React from 'react'
import Header from "./Header"
import PhoneList from "./Phonelist"
import Laptoplist from "./Laptoplist"
import Footer from "./Footer"
import Slider from "./Slider"

export default function BaiTap1() {
    return (
        <>
            <Header></Header>
            <Slider></Slider>
            <PhoneList></PhoneList>
            <Laptoplist></Laptoplist>
            <Footer></Footer>
        </>
    )
}

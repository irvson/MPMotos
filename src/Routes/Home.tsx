import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import InitialCover from '../components/InitialHome/InitialCover'
import Footer from '../components/Footer/Footer'
import Cards from '../components/ProductsCards/Cards'
import Helmet from '../components/ProductsHelmet/Helmet'
import AboutContent from '../components/About/AboutContent'

export default () => {
return (
<div>
    <Navbar/>
    <InitialCover/>
    <Helmet/>
    <Cards/>   
    <AboutContent/>
    <Footer/>
</div>
)

}
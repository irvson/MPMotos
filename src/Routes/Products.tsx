import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import InitialCover from '../components/InitialHome/InitialCover'
import Footer from '../components/Footer/Footer'
import Cards from '../components/ProductsCards/Cards'
import Helmet from '../components/ProductsHelmet/Helmet'


export default () => {
return (
<div>
    <Navbar/>         
    <Cards/>
    <Helmet/>
    <Footer/>
</div>
)

}
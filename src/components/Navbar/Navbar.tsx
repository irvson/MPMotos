import './NavbarStyles.css'

import  { useState } from 'react'
import { Link } from 'react-router-dom'



export default () => {
    const [click,setClick] = useState(false)
    const [color,setColor] = useState(false)

    const changeColor = () =>{
        if(window.scrollY >=100){
            setColor(true)
        }else{
            setColor(false)
        }
    }

    window.addEventListener('scroll',changeColor)
    
    return (  

        <div className={color ? 'header header-bg' : 'header'}>
         
            <Link to='/'>
            <h2>
                 <img src="src/assets/wheel.png" alt="logoInitial" /> MP Motos
                 </h2>          
            </Link>

            <ul className={"nav-menu active" }>
            <li> <Link to='/'>Home</Link></li>
            <li> <Link to='/products'>Produto</Link></li>
            <li> <Link to='/about'>Sobre</Link></li>
            <li> <Link to='/contact'>Contato</Link></li>
            </ul>
        </div>



    )
}
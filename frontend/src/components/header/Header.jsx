import React,{useState}    from 'react'
import './header.css' 
import  Logo    from "../../svg/Logo";
import { Link as Link1} from 'react-router-dom';
import {motion}  from 'framer-motion'


const Header = () => {

    const [showMenu,setShowMenu] = useState(false)
    const [close,setClose] = useState(true)

    
    const buttonVariants ={
        hover: {
            scale:1.1,
            transition:{
                yoyo:10 
            }
        }
    }
    
    const topHandaller = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });
    }

    const ShowMenuHandeler =() =>{
        setShowMenu(true)
        setClose(false)
    }
    const closeHandeler = ()=> {
        setClose(true)
        setShowMenu(false)
    }

    const closeHandelerTwo = ()=> {
        setTimeout(() => {
            setClose(true)
            setShowMenu(false)
        }, 200);
       
    }
    return (
        <>
        {showMenu && <div onClick={() => closeHandeler()} className="overlay1" ></div>}
            <div className={ showMenu ? "menu_side menu_side_show" : "menu_side menu_side_hide" } >
               <span> <i className={ close ? "fas fa-times close_menu close_menu_hide" : "fas fa-times close_menu close_menu_show "} onClick={()=> closeHandeler()}  ></i> </span> 
            <ul>
            <motion.li className="btn" variants={buttonVariants} whilehover="hover" ><Link1 to="/getademo" onClick={() => closeHandelerTwo()}  >Get a Demo </Link1></motion.li>
                    <li className="btn_resources">  <Link1 to="/resources" onClick={() => closeHandelerTwo()}  >Resources</Link1></li>
                    <li>Login</li>
                </ul>
            </div>

        <header id="header_section">
            <div className="logo">
             <Link1 to="/"  onClick={() => topHandaller()}> <Logo/> </Link1>
            </div>   
             <i className="fas fa-bars open_menu fa-2x" onClick={()=> ShowMenuHandeler()}  ></i>

           
            <div className="nav_content">
                <ul>
                    <li className="btn_resources">  <Link1 to="/resources" >Resources</Link1></li>
                    <li>Login</li>
                    <motion.li className="btn" variants={buttonVariants} whilehover="hover" ><Link1  to="/getademo"  >Get a Demo </Link1></motion.li>
                </ul>
            </div>       
        </header>
        </>
    )
}

export default Header

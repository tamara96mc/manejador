import React, { useState, useEffect } from 'react';
import Button from '../Button/Button';
import Logo from '../../images/icon_logo.jpg';
import DropdownJ from '../DropdownJ/DropdownJ';
import DropdownM from '../DropdownM/DropdownM';
import Hamburger from '../Hamburger/Hamburger';

const Header = (props) => {

    const [hamburgerOpen, setHamburgerOpen] = useState(false);

    const toggleHamburger = () => {
        setHamburgerOpen(!hamburgerOpen)
    }

    return (
        <div className='header'>
        <img src={Logo} className="img-logo" />
            <div className="navigation">
            <div className="hamburger1" onClick={toggleHamburger}>
                <Hamburger isOpen={hamburgerOpen} />
            </div >   
                <ul>
                    <li>
                        <DropdownM />
                    </li>
                    <li>
                        <Button destino="Jiras" url="/" />
                    </li>
                    <li>
                        <DropdownJ />
                    </li>
                    <li>
                        <Button destino="LogIn" url="/" />
                    </li>
                    <li>
                        <Button destino="SingUp" url="/" />
                    </li>
                    <li>
                        <Button destino="User" url="/" />
                    </li>
                </ul>
            
            
            </div>
            <style jsx>{`

        .header{

              display: flex;
        justify-content: space-around;
        align-items: center;

        }

        .navigation{
         background-color:#008080;
        width: 100%;
        height: 4em;
        }


        .navigation ul{
        margin:0;
        padding:0;
        display: flex;
        justify-content: space-around;
        align-items: center;
        overflow: hidden;
        }
        .navigation ul li{
        list-style-type: none;
       
        }
        
        .hamburger1{
        display: none;
        z-index: 6;
        } 
    @media (max-width: 767px){

        .hamburger1{
        display:flex;
        padding-top: 20px;
        margin-left: 10px;
        z-index: 6;
        }


        .navigation ul{
        display: ${hamburgerOpen ? 'flex' : 'none'};
        flex-direction: column;
        background-color: #008080;
        height: 100vh;
        width: 40vw;
        position: fixed;

        }
    }
`}</style>
        </div>
    )
};
export default Header;
import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { useState, useEffect, useContext} from 'react'
import { AppContext } from './App'

const Navv = (props) => {
    const [isOpen, setIsOpen] = useState(false); 
    const { state, data } = useContext(AppContext);
    // const { hima } = useContext(AppContext);
    
    console.log(data);
    console.log(state);
    // console.log(isLogin);
    // console.log(hima);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };
    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth > 768) {
            setIsOpen(false)
          }
        };
        window.addEventListener('resize', handleResize);
        return () => {
          window.removeEventListener('resize', handleResize);
        };
      }, [isOpen]);

    //   console.log(props.state);
  return (
    <>
        <header>
            <Link to='/'><h1>PSULMS</h1></Link>
            <nav className='mynav'>
                <div className='navlinks'>
                    {!props.state && <span className='nav-link'>
                        {!props.state && <Link to='/login'>Enter</Link>}
                    </span>}
                    {!props.state && <span className='nav-link'>
                        {!props.state && <Link to='/register'>Register</Link>}
                    </span>}
                    {props.state && <span className='nav-link'>
                        {props.state && <Link to='/'>dash</Link>}
                    </span>}
                    {props.state && <span className='nav-link'>
                        {props.state && <Link to='/'>home1</Link>}
                    </span>}
                    {props.state && <span className='nav-link'>
                        {props.state && <Link to='/'>Logout</Link>}
                    </span>}
                </div>
            </nav>
            <div className={isOpen? 'navmenu active':'navmenu'}>
                    {!props.state && <span className='nav-link'>
                        {!props.state && <Link to='/login'>Enter</Link>}
                    </span>}
                    {!props.state && <span className='nav-link'>
                        {!props.state && <Link to='/register'>Register</Link>}
                    </span>}
                    {props.state && <span className='nav-link'>
                        {props.state && <Link to='/'>dash</Link>}
                    </span>}
                    {props.state && <span className='nav-link'>
                        {props.state && <Link to='/'>home1</Link>}
                    </span>}
                    {props.state && <span className='nav-link'>
                        {props.state && <Link to='/'>Logout</Link>}
                    </span>}
            </div>
            <div className='navbutton' onClick={toggleNavbar}>☰</div>
        </header>
    </>
  )
}

export default Navv

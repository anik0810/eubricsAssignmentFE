import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faUser, faCircleRight } from '@fortawesome/free-regular-svg-icons'
import './Navbar.css'

export default function Navbar(props) {
    let user = {};
    
    const [name, setName] = useState('');
    const [heading,setHeading]=useState(`Hello, ${name}`)

    useEffect(() => {
        /* user = JSON.parse(localStorage.getItem('user'));
        setName(user.displayName); */
        setName('Anik Dutta')
        console.log(user.displayName);
    }, [])

    function getHeading(){
        if(props.state==='home'){
            return `Hello, ${name}`;
        }
        else if(props.state==='projects'){
            return 'Projects';
        }
        else if(props.state==='assets'){
            return 'Brand Assets';
        }
        else if(props.state==='team'){
            return 'Team';
        }
        else{
            return `Hello, ${name}`;
        }
    }
    return (
        <>
            <div className='nav p-4'>
                <div className='nav-left'>

                    <h2>
                        {getHeading()}
                    </h2>
                </div>
                <div className='nav-right'>
                    <p><span><FontAwesomeIcon icon={faBell} /></span></p>
                    <button className='invite'>
                        <span>
                            <FontAwesomeIcon icon={faUser} className='me-2' />
                            Invite Team Members
                        </span>
                    </button>
                    <button className='subscribe'>
                        <span>
                            <FontAwesomeIcon icon={faCircleRight} className='me-2' />
                            Subscribe Now
                        </span>
                    </button>
                </div>
            </div>
        </>
    )
}

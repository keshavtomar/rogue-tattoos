import React from 'react'
import '../styles/brand.css'

export default function Brand() {
    return (
        <a href='/'>
            <div className='brand'>
                <img className='bblur' id='blogo' src="../../images/blogo.jpeg" alt="logo" />
                <img className='bblur' id='bname' src="../../images/bname.jpeg" alt="logo" />
            </div>
        </a>
    )
}

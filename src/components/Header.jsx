import React from 'react'
import '../styles/header.css'
import '../scripts/header'
import MenuIcon from '@mui/icons-material/Menu';

export default function Header() {
    return (
        <div className="wrapper">
            <header>
                <tav id="#nav">
                    <div className="menu-icon">
                        <MenuIcon />
                    </div>
                    <div className="logo">
                        LOGO
                    </div>
                    <div className="menu">
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/">About</a></li>
                            <li><a href="/">Blog</a></li>
                            <li><a href="/">Gallery</a></li>
                            <li><a href="/">Contact</a></li>
                        </ul>
                    </div>
                </tav>
            </header>
            <div className="content">
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
            </div>
        </div>
    )
}

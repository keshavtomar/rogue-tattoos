import React from 'react'
import '../styles/footer.css'

export default function Footer() {
    return (
        <div className='footer-component'>
            <footer class="footer">
                <div class="waves">
                    <div class="wave" id="wave1"></div>
                    {/* <div class="wave" id="wave2"></div> */}
                    {/* <div class="wave" id="wave3"></div> */}
                </div>

                <p>&copy;2015 The Rogue Tattoos | All Rights Reserved <a href="www.footer.com">Terms and Conditions</a></p>
            </footer>
        </div>
    )
}

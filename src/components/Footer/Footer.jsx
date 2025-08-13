import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='Footer'>
      <div className="background-footert">
        <div className="max-width">
    <br /><br /><br />
            <h1 className='h1-footer'>Contact Me</h1>
            <br />
            <p className='p-footer'>Feel free to get in touch with me 👇</p>
          <footer>
            <div className="footer-1">
              <ul>
                <li><i class="bx bx-pin"></i>Samarkand, Uzbekistan</li>
                <li><i class="bx bx-mail-send"></i>muxammadaliyevibrohim@gmail.com</li>
                <li><i class="bx bx-phone"></i><a href="tel:+998947238850">+998-(94)-723-88-50</a></li>
                <li><i class="bx bx-paper-plane"></i><a href="https://t.me/Mukhamadaliyev20">Ibrohimdev</a></li>
              </ul>
            </div>
            <div className="footer-2">
              <input type="text" placeholder='Your full name' required />
              <input type="email" placeholder='Your email' required />
              <input type="number" placeholder='Number' required />
              <textarea name="" id="" placeholder='Your Message' required ></textarea>
              <button><a href="Footer.jsx">Send Message</a></button>
            </div>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Footer

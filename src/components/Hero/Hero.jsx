import './hero.css'
import rasm from './assets/image.png'
const Hero = () => {
    return (
        <div className='Hero'>
            <div className="max-width">
                <div className="background display">
                    <div className="hero-left">
                        <h1>Hello, I am <b>Ibrohim</b></h1>
                        <h3>Frontend Developer & UI Designer</h3>
                        <p>I create modern, responsive and beautiful web experiences. With 1+ years of experience building interfaces with React, Tailwind and other modern tools.</p>
                        <button className='hero-btn-1'>Hire Me</button>
                        <button className='hero-btn-2'>My Projects</button>
                        <div className="hero-div-aykin">
                            <a href="https://t.me/Mukhamadaliyev20"><i class='bx bxl-telegram' ></i></a>
                            <a href="https://www.instagram.com/ibrohim_325"><i class='bx bxl-instagram' ></i></a>
                            <a href="https://www.github.com/Mukhamadaliev"><i class='bx bxl-github'></i></a>
                            <a href="https://www.linkedin.com/"><i class='bx bxl-linkedin'></i></a>

                        </div>
                    </div>
                    <div className="hero-right">
                        <img src={rasm} alt="o`zimni rasmmin" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero

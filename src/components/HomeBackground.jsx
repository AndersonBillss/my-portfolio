import backgroundImg from '../img/Portfolio Background Image.png'
import { useEffect } from 'react'


export default function HomeBackground(){
    const imgDisplacement = -150
    let imgTop = 0

    useEffect(() => {
        const imgContainer = document.querySelector('#home-background-container')
        imgTop = imgContainer.offsetTop
        handleScroll()
        window.addEventListener('scroll', handleScroll)

    })
    
    function handleScroll(){
        const scrollTop = window.scrollY
        const background = document.getElementById("home-background")
        const parallax = .5
        background.style.transform = `translate(0, ${scrollTop*parallax-imgTop*parallax+imgDisplacement}px)`
    }
    
    function imgFadeIn(){
        const img = document.querySelector('#home-background img')
        console.log(img)
        img.classList.remove("fadeOut")
        img.classList.add("fadeIn")
    }

    return(
        <div id='home-background-container'>
            <div id='home-background'>
                <img 
                onLoad={imgFadeIn} 
                className='fadeOut'
                src={backgroundImg}
                alt="Background" 
                >
                </img>
            </div>
        </div>
    )
}
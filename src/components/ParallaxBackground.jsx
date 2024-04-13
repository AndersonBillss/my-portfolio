import { useEffect, useRef } from 'react'


export default function ParallaxBackground(props){
    const imgRef = useRef(null)
    const parallaxBackgroundRef = useRef(null);
    const parallaxBackgroundContainerRef = useRef(null);

    const img = props.img
    let imgTop = 0
    const parallax = .5


    useEffect(() => {
        const imgContainer = imgRef.current
        imgTop = imgContainer.offsetTop

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleWindowResize)

    })

    function handleWindowResize(){
        //reset the offset for the top of the image
        const imgContainer = parallaxBackgroundContainerRef.current
        imgTop = imgContainer.offsetTop

        const img = imgRef.current
        const imgHeight = img.offsetHeight
        const windowHeight = window.innerHeight
        const height = imgHeight/parallax-windowHeight

        imgContainer.style.height = `${height}px`
    }
    
    function handleScroll(){
        const scrollTop = window.scrollY
        const background = parallaxBackgroundRef.current
        background.style.transform = `translate(0, ${scrollTop*parallax-imgTop*parallax}px)`
    }
    
    function imgFadeIn(){
        handleWindowResize()
        handleScroll()
        const img = imgRef.current
        img.classList.remove("fadeOut")
        img.classList.add("fadeIn")
    }

    return(
        <div 
        ref={parallaxBackgroundContainerRef} 
        className='parallax-background-container'
        >
            <div 
            ref={parallaxBackgroundRef} 
            className='parallax-background'
            >
                <img 
                onLoad={imgFadeIn} 
                className='fadeOut'
                src={img}
                ref={imgRef}
                alt="Background" 
                >
                </img>
            </div>
        </div>
    )

}
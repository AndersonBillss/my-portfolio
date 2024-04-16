import { useEffect, useRef } from 'react'


export default function ParallaxBackground(props){
    const imgRef = useRef(null)
    const parallaxBackgroundRef = useRef(null);
    const parallaxBackgroundContainerRef = useRef(null);

    const prevWindowWidth = useRef(window.innerWidth)
    const prevWindowHeight = useRef(window.innerHeight)

    const heightToWidthRatio = useRef(null)

    const imgHeight = useRef(0)

    const img = props.img
    const text = props.text || undefined

    let imgTop = 0
    const parallax = .5


    useEffect(() => {
        const imgContainer = imgRef.current
        imgTop = imgContainer.offsetTop

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', handleWindowResize);
        };
    },[])

    function handleWindowResize(){
        const windowHeight = window.innerHeight
        const windowChangeY = windowHeight != prevWindowHeight.current

        //const windowChangeX = window.innerWidth > prevWindowWidth.current + 10 || window.innerWidth < prevWindowWidth.current - 10
        const windowChangeX = window.innerWidth !== prevWindowWidth.current

        if(!windowChangeY || windowChangeX){
            const imgContainer = parallaxBackgroundContainerRef.current
            imgTop = imgContainer.offsetTop
            const img = imgRef.current
            const heightNeededToFitEntireImage = (imgContainer.offsetHeight+windowHeight) / 2 + 100
            
            const containerHeightToWidthRatio = heightNeededToFitEntireImage / imgContainer.offsetWidth

            if(heightToWidthRatio.current > containerHeightToWidthRatio){

                parallaxBackgroundRef.current.style.width = `${imgContainer.offsetWidth}px`
                imgRef.current.style.width = `${imgContainer.offsetWidth}px`
                img.style.height = `auto`
                img.style.transform = `translate(0px)`

            } else {

                const height = heightNeededToFitEntireImage
                img.style.height = `${height}px`
                img.style.width = `auto`

                //center the image
                img.style.transform = `translateX(${(window.innerWidth - img.offsetWidth) / 2}px)`
            }
        }
        prevWindowHeight.current = windowHeight
        prevWindowWidth.current = window.innerWidth
    }

    
    function handleScroll(){
        const scrollTop = window.scrollY;
        const background = parallaxBackgroundRef.current;
        background.style.transform = `translateY(${(scrollTop - imgTop) * parallax}px)`;
    }
    
    function imgFadeIn(){
        const img = imgRef.current
        heightToWidthRatio.current = img.offsetHeight / img.offsetWidth
        setTimeout(() => {
            handleWindowResize()
            handleScroll()
                    
            img.classList.remove("fadeOut")
            img.classList.add("fadeIn")
        },100)

        imgHeight.current = img.offsetHeight
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
                {
                    text
                    ?
                    <div className='background-header-container'>
                        <h1 className='background-header'>
                            {text}
                        </h1>
                    </div>
                    :''
                }
        </div>
    )

}
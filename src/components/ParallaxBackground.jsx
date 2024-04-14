import { useEffect, useRef } from 'react'


export default function ParallaxBackground(props){
    const imgRef = useRef(null)
    const parallaxBackgroundRef = useRef(null);
    const parallaxBackgroundContainerRef = useRef(null);

    const prevWindowHeight = useRef(window.innerHeight)

    const img = props.img
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
        //reset the offset for the top of the image
        const imgContainer = parallaxBackgroundContainerRef.current

        //adjust image size with screen size
        imgTop = imgContainer.offsetTop
        const img = imgRef.current
        const windowHeight = window.innerHeight
        const isSuddenWindowChange = windowHeight < prevWindowHeight.current - 15 || windowHeight > prevWindowHeight.current + 15
        if(!isSuddenWindowChange){
            const heightNeededToFitEntireImage = (imgContainer.offsetHeight+windowHeight) / 2 + 100
            const heightToWidthRatio = img.offsetHeight / img.offsetWidth
            const containerHeightToWidthRatio = heightNeededToFitEntireImage / imgContainer.offsetWidth

            if(heightToWidthRatio > containerHeightToWidthRatio){
                const height = imgContainer.offsetWidth * heightToWidthRatio
                img.style.height = `${height}px`
            } else {
                const height = heightNeededToFitEntireImage
                img.style.height = `${height}px`

                //center the image
                img.style.transform = `translateX(${(window.innerWidth - img.offsetWidth) / 2}px)`
            }
        } else {
            console.log('sudden window change')
        }
        prevWindowHeight.current = windowHeight
    }

    
    function handleScroll(){
        // requestAnimationFrame(() => {
            const scrollTop = window.scrollY;
            const background = parallaxBackgroundRef.current;
            background.style.transform = `translateY(${(scrollTop - imgTop) * parallax}px)`;
        // });
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
import { useEffect } from "react"
import Navbar from "./Navbar"
import ProjectComponent from "./ProjectComponent"
import MiHealthPng from "../img/MiHealth.png"
import TailwindPng from "../img/Tailwind-project.png"

export default function Projects(){
    
    useEffect(() => {
        // window.addEventListener('load', handleLoad);
        window.addEventListener('scroll', handleScroll)
        handleScroll()
    })
    function handleScroll(){
        console.log('scrolling')
        const elements = document.getElementById("fadeInElements").children
        fadeIn(elements)
    }

    // function handleLoad(){
    //     const elements = document.getElementById("fadeInElements").children
    //     fadeIn(elements)
    //     window.removeEventListener('load', handleLoad) 
    // }

    function fadeIn(elements){
        for(let i=0; i<elements.length; i++){
            const element = elements[i]  
/*             setTimeout(() => {
               element.classList.remove('fadeOut') 
               element.classList.add('fadeIn')
            }, (i*350)) */
            const scrollTop = window.scrollY
            const scrollBottom = scrollTop + window.innerHeight

            const elementTop = element.offsetTop
            const elementBottom = elementTop + window.innerHeight/2
            console.log()
            

            if(scrollBottom > elementBottom){
                element.classList.remove('fadeOut') 
                element.classList.add('fadeIn')
            }
        }
    }
    


    const projects = [
        {
            title: 'MiHealth project',
            description: 'I created this project early on in my Web Developement course to practice css',
            link: 'https://andersonbillss.github.io/MiHealth/',
            img: MiHealthPng
        },
        {
            title: 'Tailwind Netflix project',
            description: 'I created this project using scss and tailwind css. I followed a reference image',
            link: 'https://andersonbillss.github.io/MiHealth/',
            img: TailwindPng
        },
        {
            title: 'test',
            description: 'I created this project using scss and tailwind css. I followed a reference image',
            link: 'https://andersonbillss.github.io/MiHealth/',
            img: MiHealthPng
        },
        {
            title: 'test',
            description: 'I created this project using scss and tailwind css. I followed a reference image',
            link: 'https://andersonbillss.github.io/MiHealth/',
            img: MiHealthPng
        },
        {
            title: 'test',
            description: 'I created this project using scss and tailwind css. I followed a reference image',
            link: 'https://andersonbillss.github.io/MiHealth/',
            img: MiHealthPng
        },
        {
            title: 'test',
            description: 'I created this project using scss and tailwind css. I followed a reference image',
            link: 'https://andersonbillss.github.io/MiHealth/',
            img: MiHealthPng
        },
    ]

    return(
        <div>
            <Navbar page="Projects"/>
            <div className="projects-page">
            <h1 className="project-title">Projects</h1>

                <div id='fadeInElements'>
                    {projects.map((project, index) => {
                        return(
                            <ProjectComponent info={project} key={index} className="fadeOut"></ProjectComponent>
                        )
                    })}
                </div>
            </div>

        </div>
    )
}



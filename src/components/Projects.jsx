import { useEffect } from "react"
import Navbar from "./Navbar"
import ProjectComponent from "./ProjectComponent"

//images
import MiHealthPng from "../img/MiHealth.png"
import TailwindPng from "../img/Tailwind-project.png"
import GolfScorePng from "../img/Golf-ScoreCard.png"
import ReactGamePng from "../img/React-game-app.png"
import ToDoListPng from "../img/ToDoList.png"
import RegistrationAppPng from "../img/Registration-app.png"

export default function Projects(){
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        handleScroll()
    })

    function handleScroll(){
        const elements = document.getElementById("fadeInElements").children
        fadeIn(elements)
    }

    function fadeIn(elements){
        for(let i=0; i<elements.length; i++){
            const element = elements[i]  
            const scrollTop = window.scrollY
            const scrollBottom = scrollTop + window.innerHeight

            const elementTop = element.offsetTop
            const elementMiddle = elementTop + (element.offsetHeight/2)
            

            if(scrollBottom > elementMiddle){
                element.classList.remove('fadeOut') 
                element.classList.add('fadeIn')
            }
        }
    }
    


    const projects = [
        {
            title: 'MiHealth project',
            description: 'I created this project early on in my Web Developement course to practice css.',
            link: 'https://andersonbillss.github.io/MiHealth/',
            img: MiHealthPng
        },
        {
            title: 'Tailwind Netflix project',
            description: 'I created this project using scss and tailwind css.',
            link: 'https://andersonbillss.github.io/tailwindProject/',
            img: TailwindPng
        },
        {
            title: 'Golf Score App',
            description: 'This is a golf score app.  It pulls from an API using vanilla javaScript.',
            link: 'https://andersonbillss.github.io/Golf-Score-App/',
            img: GolfScorePng
        },
        {
            title: 'To Do List App',
            description: 'This robust to do list app was created using vanilla javaScript',
            link: 'https://andersonbillss.github.io/toDoListApp/',
            img: ToDoListPng
        },
        {
            title: 'React Game App',
            description: 'This is a react app with several games.  It displays my ability to code complex logic systems.',
            link: 'https://react-game-project-dxrwofvh4-anderson-bills-projects.vercel.app/',
            img: ReactGamePng
        },
        {
            title: 'Registration App',
            description: 'This is a robust registration app built using react. It uses a postgresql database and incorperates proper security protocols. I worked on this project in a group.',
            link: 'https://capstone-co5w.onrender.com/',
            img: RegistrationAppPng
        },
    ]

    return(
        <div>
            <Navbar page="Projects"/>
            <div className="projects-page">
            <h1 className="main-header">Projects</h1>

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



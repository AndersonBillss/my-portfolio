import Navbar from "./Navbar"
import ParallaxBackground from "./ParallaxBackground"

//images
import backgroundImg from '../img/Portfolio Background Image.png'

//logos
import HtmlPng from '../logos/html.png'
import CssPng from  '../logos/css.png'
import JavaScriptPng from '../logos/js.png'
import TypeScriptPng from '../logos/ts.png'
import ReactPng from '../logos/react.png'
import AngularPng from '../logos/angular.png'
import NodePng from '../logos/node.png'
import DockerPng from '../logos/docker.png'
import KubernetesPng from '../logos/kubernetes.png'
import AwsPng from '../logos/aws.png'
import { useEffect, useRef } from "react"

export default function Home(){
    const listRef = useRef(null)

    useEffect(() => {
        window.addEventListener("scroll", handleScroll)
        setTimeout(() => {
            handleScroll()
        },400)
        return() => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
    function handleScroll(){
        const listItems = document.getElementsByClassName("subject-item")
        const windowBottom = window.scrollY + window.innerHeight

        const list = listRef.current
        const listBottom = list.offsetTop + list.offsetHeight

        const listImg = listItems[0].querySelector("img")

        if(windowBottom > listBottom && listImg.complete){
            for(let i=0; i<listItems.length; i++){
                const listItem = listItems[i]
                setTimeout(() => {
                    listItem.classList.remove("fadeOut")
                    listItem.classList.add("fadeIn")
                }, ((i+1)*400))
            }
            window.removeEventListener('scroll', handleScroll)
        }

    }

    const subjects = [
        {
            name: "Html",
            img: HtmlPng,
        },
        {
            name: "Css",
            img: CssPng,
        },
        {
            name: "JavaScript",
            img: JavaScriptPng,
        },
        {
            name: "TypeScript",
            img: TypeScriptPng,
        },
        {
            name: "React",
            img: ReactPng,
        },
        {
            name: "Angular",
            img: AngularPng,
        },
        {
            name: "Node.js",
            img: NodePng,
        },
        {
            name: "Docker",
            img: DockerPng,
        },
        {
            name: "Kubernetes",
            img: KubernetesPng,
        },
        {
            name: "AWS",
            img: AwsPng
        },
    ]

    return(
        <div>
            <Navbar page="Home"/>

            <ParallaxBackground text="Full Stack Web Developer" img={backgroundImg}></ParallaxBackground>


            <div className="main-content">

                <h1 className="main-header">About Me</h1>

                <p>I am currently a student at Mtech (Mountainland Technical College), enrolled in their Web Programming and Development course where industry professionals work with students. I spend 3 hours every school day in this program, and I spend time at home improving my skills. This program has taught me each of the following:</p>

                <ul ref={listRef} className="subject-list">
                    {
                        subjects.map((subject, index) => {
                            return(
                                <li className="subject-item fadeOut" key={index}>
                                    <div>
                                        {subject.name}
                                    </div>
                                    <img className="subject-logo" src={subject.img} />
                                </li>
                            )
                        })
                    }
                </ul>

                <p> I have a passion for coding, and a strong work ethic. I would love an opportunity to use my skills in an externship. Reach out to me at anderson@thebillsfamily.com and check out my <a className="button" href="/projects">projects page</a> to see what I have worked on.</p>

            </div>
        </div>
    )
}
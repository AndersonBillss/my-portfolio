
export default function ProjectComponent( props ){
    const project = { props }
    const info = project.props.info
    return(
        <div className="project fadeOut">
            <div className="project-description">
                <div>
                    <h1>{info.title}</h1>
                    <p>{info.description}</p>
                </div>

                <a href={info.link} className="projectLink button" target="_blank">See Project<i class="fa-solid fa-arrow-up-right-from-square"></i></a>
            </div>
            <div className="project-img" style={{backgroundImage: `url(${info.img})`}}>
                <div className="project-img-shadow"></div>
            </div>
        </div>
    )
}
function Navbar( props ){

    const currentPage = props.page
    const links = [
        {
            title: 'Home',
            href: '/',
        },
        {
            title: 'Projects',
            href: '/Projects',
        },
    ]

    return(
        <div className="nav">
            <h1>Anderson Bills</h1>
            <div className="links">
                {
                    links.map((link, index) => {
                        return(
                            <h2 
                            key={index}
                            className={currentPage === link.title ? "selected-link" : ""}                            >
                                <a href={link.href}>
                                    {link.title}
                                </a>
                            </h2>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Navbar
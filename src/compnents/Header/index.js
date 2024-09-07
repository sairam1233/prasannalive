import "./index.css"

const Header = ()=>{
    return(
        <nav className=" animate__animated animate__slideInDown">
            <a href="#home"><h1 className="h11"><span className="sp">P</span>rasanna Live</h1></a>
            <ul className="ul">
            <a href="#live"> <li>Live</li></a>
               <a href="#gallery"> <li>Gallery</li></a>
               <a href="#services"> <li>Services</li></a>
               <a href="#about"> <li>About</li></a>
            </ul>
            <ul className="ul1">
            <a href="#live"> <li>Live</li></a>
               <a href="#gallery"> <li>Gallery</li></a>
               <a href="#services"> <li>Services</li></a>
            </ul>
        </nav>
    )
}

export default Header
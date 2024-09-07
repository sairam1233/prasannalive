import "./index.css"

const Header = ()=>{
    return(
        <nav>
            <a href="#home"><h1><span className="sp">P</span>rasanna Live</h1></a>
            <ul>
            <a href="#live"> <li>Live</li></a>
               <a href="#gallery"> <li>Gallery</li></a>
               <a href="#services"> <li>Services</li></a>
               <a href="#about"> <li>About</li></a>
            </ul>
        </nav>
    )
}

export default Header
import { Component} from "react"
import { FaVrCardboard } from "react-icons/fa"
import { GiVrHeadset } from "react-icons/gi"
import { MdOutlineLiveTv } from "react-icons/md"
import { FaAngleDoubleDown } from "react-icons/fa"
import { FaSquareInstagram } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import { MdPhoneInTalk } from "react-icons/md"
import { IoMdMail } from "react-icons/io"
import ReactPlayer from 'react-player'
import Header from "../Header"
import 'animate.css'
import "./index.css"

class Home extends Component{

    render(){
        return(
            <div className="bgContainer">
                <Header/>
                <div className="mainContainer" id="home">
                    <div className="card-1">
                        <div className="cen">
                        <img src="https://res.cloudinary.com/djbivakqj/image/upload/v1725642088/Untitled-2_aaacopy_hqcgck.png" alt="logo" className="img-l animate__animated animate__zoomIn"/>
                        <h1 className="hh1 animate__animated animate__slideInUp"><span className="sp">360°</span> Live Streaming</h1>
                        <a href="#live">
                        <FaAngleDoubleDown className="animate__animated animate__slideInDown animate__infinite cl animate__slideInUp"/>
                        </a>
                        </div>
                    </div>
                    <section className="live" id="live">
                        <h1 className="live-heading"><span className="sp">360° Live</span> Streaming Features</h1>
                        <div className="live-section">
                            <div className="live-items">
                                <div className="features-section">
                                <FaVrCardboard className="icon"/>
                                <div>
                                    <h2 className="h1">360° Video Player</h2>
                                    <p>Our fully HTML5 360° Video Player works across desktop and mobile devices.</p>
                                </div>
                                </div>
                                <div className="features-section">
                                <GiVrHeadset className="icon"/>
                                <div>
                                    <h2 className="h1">VR Headset Compatible</h2>
                                    <p>Our player is compatible with Oculus Rift, HTC Vive and Google Daydream.</p>
                                </div>
                                </div>
                                <div className="features-section">
                                <MdOutlineLiveTv className="icon"/>
                                <div>
                                    <h2 className="h1">Live Stream in 4K 60FPS</h2>
                                    <p>Give your viewers the most immersive experience possible with 4K 60FPS streams.</p>
                                </div>
                                </div>
                            </div>
                            <ReactPlayer  className="vd" controls url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                            <ReactPlayer  className="vd1" width="350px" height="180px" controls url='https://www.youtube.com/watch?v=LXb3EKWsInQ' />
                        </div>
                        <h1 className="h3" id="gallery"><span className="sp">G</span>allery</h1>
                        <div className="gallery-section">
                            <img className="img1" src="https://res.cloudinary.com/djbivakqj/image/upload/v1710059070/WhatsApp_Image_2024-03-10_at_11.00.03_92455078_f1bshy.jpg" alt="img1"/>
                            <img className="img1" src="https://res.cloudinary.com/djbivakqj/image/upload/v1710049375/WhatsApp_Image_2024-03-10_at_10.59.55_cfbf6c97_ly54j6.jpg" alt="img2"/>
                            <img className="img1" src="https://res.cloudinary.com/djbivakqj/image/upload/v1697118807/0_ra7wmv.jpg" alt="img3"/>
                        </div>
                        <h1 className="h3"><span className="sp">O</span>ur services</h1>
                        <div className="services" id="services">
                            <div className="cd">
                                <p>Webinars</p>
                            </div>
                            <div className="cd">
                                <p>Weddings</p>
                            </div>
                            <div className="cd">
                                <p>Conferences</p>
                            </div>
                            <div className="cd">
                                <p>Road Shows</p>
                            </div>
                            <div className="cd">
                                <p>Musical Concerts</p>
                            </div>
                            <div className="cd">
                                <p>Election Campaigns</p>
                            </div>
                            <div className="cd">
                                <p>Educational Programs</p>
                            </div>
                        </div>
                        <h1 className="ab" id="about"><span className="sp">A</span>bout</h1>
                        <hr/>
                        <div className="about">
                            <div className="links">
                            <FaSquareInstagram className="icon1"/>
                            <FaFacebook className="icon1"/>
                            <FaYoutube className="icon1"/>
                            <a href="mailto:vinaysairam1233@gmail.com"><IoMdMail className="icon1"/></a>
                            <a href="tel:7382336310"><MdPhoneInTalk className="icon1"/></a>
                            </div>
                            <p className="pp">Copyrights <span className="sp">©</span> 2024 - 2030 All Rights Reserved by Digital Studios Video Provided by Prasanna Technologies</p>
                        </div>
                    </section>
                </div>
            </div>
        )
    }
}

export default Home
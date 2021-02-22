import Navbar from './navbar'
import {ImArrowDown2} from 'react-icons/all'

var Header = () => {
    return (
        <div className="header-page" id="home">
            <Navbar />
            <div className="titleContent">
                Hi, I am <span className="myName">Harshkumar Vishwakarma</span>a Full Stack Developer <br /> That convert your idea to working product
                <div className="subtitles">
                    ui and ux developer work for both frontend and backend
                </div>
            </div>
            <div className="bouncing">
                <ImArrowDown2 />
            </div>
        </div>
    )
}

export default Header
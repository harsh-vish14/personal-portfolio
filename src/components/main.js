import About from './aboutme'
import Contactform from './contactForm'
import Skills from './skills'
var Main = () => {
    return (
        <div className="main">
            <Skills/>
            <About />
            <Contactform />
        </div>
    )
}

export default Main;
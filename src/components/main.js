import About from './aboutme'
import Contactform from './contactForm'
import Projects from './projects'
import Skills from './skills'
var Main = () => {
    return (
        <div className="main">
            <Skills />
            <Projects />
            <About />
            <Contactform />
        </div>
    )
}

export default Main;
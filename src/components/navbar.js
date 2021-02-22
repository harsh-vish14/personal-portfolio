import { HashLink as Link ,NavHashLink} from 'react-router-hash-link'

var Navbar = () => {
    return (
        <div className="navbar" style={{ position:'fixed'}}>
            <div className="links" style={{width:'100%'}}>
                <div className="logo">
                    <Link smooth to="#home"><img src="Group 1.svg" /></Link>
                </div>
                <Link smooth to="#home" style={{ textDecoration: 'none', color: 'white' }} >Home</Link>
                <Link smooth to="#Skills" style={{ textDecoration: 'none', color: 'white' }} >Skills</Link>
                <Link smooth to="#Project" style={{ textDecoration: 'none', color: 'white' }} >Projects</Link>
                <Link smooth to="#aboutMe" style={{ textDecoration: 'none', color: 'white' }} >About Me</Link>
                <Link smooth to="#Contact" style={{ textDecoration: 'none', color: 'white' }} >Contact</Link>
            </div>
        </div>
    );
}

export default Navbar
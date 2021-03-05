import {AiOutlineGithub,FaLocationArrow} from 'react-icons/all'
import MyApp from './pdf'

var projectsData = [
    {
        image: 'images/coroinfo.jpeg',
        Title: 'Corona Virus Information Website',
        Content: 'This is full stack website where user can get information of Corona cases using live apis and next is form to get users information to collect in database and give doctor help from there provided information',
        Languages: 'HTML, CSS, SCSS, JavaScript, SQL Database, APIs',
        demo: 'https://harsh-vish14.github.io/coronaTrackerInformation/',
        githublink: 'https://github.com/harsh-vish14/coronaTrackerInformation/tree/main'
    },
    {
        image: 'images/e_commerce.jpeg',
        Title: 'A Full stack E-Commerce Website',
        Content: 'This is a full stack e commerce which is created by react js and firebase is used for data where user and purchase product and can pay to get the product where stripe is used for payment and more information of product the dynamic links is also created there is two ways auth available email and password and google auth',
        Languages: 'HTML, CSS, SCSS, React js, firebase, google auth, stripe (for payment), Javascript',
        demo: 'https://ecommerce-ba49d.web.app/',
        githublink: 'https://github.com/harsh-vish14/e-commerce-react-appication-with-firebase'
    },
    {
        image: 'images/tubeaudio.jpeg',
        Title: 'Youtube to Video to Ads free audio Player',
        Content: 'This is full stack website where user can create there own account and add there youtube video link in that in input and that link will get saved in our database and then he want to play audio then that is there in playlist where user can put there play and add more link also and that video is playing youtube player api and all data is getting saved in Firebase database',
        Languages: 'HTML, CSS, SCSS, JavaScript, Firebase Database, Node Js, Express, EJS, APIs',
        demo: 'https://limitless-sands-55578.herokuapp.com/',
        githublink: 'https://github.com/harsh-vish14/youtube-to-audio-player'
    },
    {
        image: 'images/pbog.jpeg',
        Title: 'Personal Blog Website',
        Content: 'This is a personal blog website where we can put blogs and user and see that blogs',
        Languages: 'HTML, CSS, SCSS, JavaScript, MongoDB Database, Node Js, Express, EJS',
        demo: 'https://blog-website-harsh.herokuapp.com/',
        githublink: 'https://github.com/harsh-vish14/personal-Bolgs-website-code'
    }
]

var projects = () => {
    return (
        <div className="Projects" id="Project">
            <MyApp />
            <h1>Projects</h1>
            {
                projectsData.map((data) => {
                    return (
                        <div className="projects-box">
                            <div className="project-image" style={{ background: `url(${process.env.PUBLIC_URL+data.image})`, height: '150px', width: '200px', backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover', borderRadius: '20px' }}></div>
                            <div className="project-details">
                                <div className="title">{data.Title}</div>
                                <div className="content">{data.Content}</div>
                                <div className="content">{data.Languages}</div>
                                 <div className="links" style={{display: 'block',marginTop:'15px'}}>
                                    <a href={data.demo} target="_blank" className="code-link demo">Demo <FaLocationArrow /></a>
                                    <a href={data.githublink} target="_blank" className="code-link code">Code <AiOutlineGithub /></a>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {/* <div className="projects-box">
                <div className="project-image" style={{background: 'url("images/coroinfo.jpeg")',height:'150px',width:'200px',backgroundPosition: 'center center',backgroundRepeat: 'no-repeat',backgroundSize: 'cover',borderRadius: '20px'}}></div>
                <div className="project-details">
                    <div className="title">This is title</div>
                    <div className="content">This is content</div>
                    <div className="content">This is content</div>
                    <a href="https://harsh-vish14.github.io/coronaTrackerInformation/" className="code-link">Code <AiOutlineGithub /></a>
                </div>
            </div> */}
        </div>
    )
}

export default projects
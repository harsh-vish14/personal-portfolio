
var data = [
    {
        logo: 'icons/React_js.svg',
        text:'React JS'
    },
    {
        logo: 'icons/html.svg',
        text:'HTML'
    },
    {
        logo: 'icons/Javascript.svg',
        text:'JAVASCRIPT'
    },
    {
        logo: 'icons/nodejs.svg',
        text:'nodejs'
    },
    {
        logo: 'icons/express.svg',
        text:'express js'
    },
    {
        logo: 'icons/css.svg',
        text:'css'
    },
    {
        logo: 'icons/json.svg',
        text:'json'
    },
    {
        logo: 'icons/sass.svg',
        text:'scss/sass'
    },
    {
        logo: 'icons/vscode.svg',
        text:'Visual Studio code'
    },
    {
        logo: 'icons/dimension.svg',
        text:'Adobe dimensions'
    },
    {
        logo: 'icons/photoshop.svg',
        text:'adobe photoshop'
    },
    {
        logo: 'icons/adobexd.svg',
        text:'adobe XD'
    }
]

var Skills = () => {
    return (
        <div className='skill' style={{paddingTop: '100px'}} id="Skills">
            <h1>Skills</h1>
            <div className="skills-box">
                {data.map((element,i) => {
                    return (
                        <div className='container' key={i} title={element.text}>
                            <div className="logo">
                                <img src={element.logo} height="90px" />
                            </div>
                            <div className="text">
                                {element.text}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Skills
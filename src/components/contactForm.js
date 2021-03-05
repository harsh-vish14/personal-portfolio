import {RiSendPlaneFill} from 'react-icons/all'
import MoreWay from './moreway'

var Contactform = () => {
    return (
        <div className="contact-form" id="Contact">
            <div className="form">
                <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Name" />
                    <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px',marginTop:'20px'}}></textarea>
                    <label for="floatingTextarea2">Message</label>
                </div>
                <button type="submit" className="btn btn-success" style={{marginTop:'20px'}}>Message <RiSendPlaneFill /></button>
            </div>
            <img src="Group 11.svg" id='arrow'/>
            <MoreWay />
        </div>
    )
};
export default Contactform
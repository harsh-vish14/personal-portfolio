import {RiSendPlaneFill} from 'react-icons/all'
import MoreWay from './moreway'

var Contactform = () => {
    return (
        <div className="contact-form" id="Contact">
            <div className="form">
                <div class="form-floating mb-3">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                    <label for="floatingInput">Email address</label>
                </div>
                <div class="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                    <label for="floatingPassword">Password</label>
                </div>
                <div class="form-floating">
                    <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px',marginTop:'20px'}}></textarea>
                    <label for="floatingTextarea2">Message</label>
                </div>
                <button type="submit" class="btn btn-success" style={{marginTop:'20px'}}>Message <RiSendPlaneFill /></button>
            </div>
            <img src="Group 11.svg" id='arrow'/>
            <MoreWay />
        </div>
    )
};
export default Contactform
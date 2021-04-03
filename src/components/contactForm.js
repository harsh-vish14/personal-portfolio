import { useState } from 'react';
import {RiSendPlaneFill} from 'react-icons/all'
import MoreWay from './moreway'

var Contactform = () => {
    const [formData, setFromData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const handelChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        setFromData((preve) => {
            return {
                ...preve,
                [name]:value
            }
        })
    }
    const saveData = async () => {
        await fetch(`http://localhost/personal-server/contact.php?name=${formData.name}&email=${formData.email}&message=${formData.message}`)
            .then(() => {
                // console.log('done bro')
            })
            .catch(() => {
                // console.log('error');
            });
        setFromData({
        name: '',
        email: '',
        message: ''
    })
    }
    return (
        <div className="contact-form" id="Contact">
            <div  className="form">
                <div className="form-floating mb-3">
                    <input name="name" type="text" className="form-control" id="floatingInput" placeholder="Name"  onChange={handelChange} value={formData.name} />
                    <label for="floatingInput">Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com"  onChange={handelChange} value={formData.email} />
                    <label for="floatingInput">Email</label>
                </div>
                <div className="form-floating">
                    <textarea name="message" className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{height: '100px',marginTop:'20px'}} onChange={handelChange} value={formData.message} ></textarea>
                    <label for="floatingTextarea2">Message</label>
                </div>
                <div type="submit" className="btn btn-success" style={{marginTop:'20px'}} onClick={saveData}>Message <RiSendPlaneFill /></div>
                </div>
            <img src="Group 11.svg" id='arrow'/>
            <MoreWay />
        </div>
    )
};
export default Contactform
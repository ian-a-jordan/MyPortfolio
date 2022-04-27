import React from 'react';
import ContactItem from '../Components/ContactItem';
import phone from '../img/phone.svg';
import email from '../img/emailme.svg';
import location from '../img/location.svg';
import Title from '../Components/Title';
import {motion} from 'framer-motion';



function ContactPage() {
    return (
        <motion.div initial={{opacity: 0}} animate={{opacity:1 }} exit={{opacity: 0}}>
            
        <div className="title">
        <Title title={'Contact'} span={'Contact'} />
        </div>
        
        <div className="ContactPage">
            <div className="map-sect">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d440729.5165168867!2d-81.96329790921949!3d30.345283956425305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e5b716f1ceafeb%3A0xc4cd7d3896fcc7e2!2sJacksonville%2C%20FL!5e0!3m2!1sen!2sus!4v1623471898797!5m2!1sen!2sus" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" title="unique"></iframe>
            </div>
            <div className="contact-sect">
            <ContactItem icon={phone} text1={'904-827-3669'} title={'Phone'}/>
            <ContactItem icon={email} text1={'Ian12009@gmail.com'} title={'Email'}/>
            <ContactItem icon={location} text1={'Jacksonville'} title={'Location'}/>
                
            </div>
            
        </div>
        
        </motion.div>
    )
}

export default ContactPage

import React from 'react';
import Image from '../Image/my-image.jpeg'



export default function Info() {
    return (
        <div className='info'>
            <img 
            src={Image} alt="my-img" style={{width: '200px', height: '200px'}} className='my-img'/>
            <h2 className='my-name'>Victor Okafor</h2>
            <h4 className='my-title'>Frontend Developer</h4>
            {/* <button class="btn"><i class="fa fa-envelope"></i>Email</button> */}
            <button className="mail-btn"><i class="fa fa-address-book"></i> Email</button>
            <button className="lkdn-btn"><i class="fa fa-linkedin"></i> Linkedin</button>            
        </div>
    )
}

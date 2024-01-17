import React from 'react'
import './AvatarCard.css'
import Media from '../../Assets/media.png'
import Facebook from '../../Assets/facebook.png'
import Instagram from '../../Assets/instagram.png'
import Twitter from '../../Assets/twitter.png'

const AvatarCard = () => {
    return (
        <div className='AvatarCard'>
            <img src={Media} alt='' />
            <span className='avatar-name'>John Doe</span>
            <span className='avatar-designation'>CEO</span>
            <div className='socials'>
                <img src={Facebook} alt='' />
                <img src={Instagram} alt='' />
                <img src={Twitter} alt='' />
            </div>
        </div>
    )
}

export default AvatarCard

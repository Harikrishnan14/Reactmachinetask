import React from 'react'
import './Main.css'
import Avatar from '../../Assets/Rectangle 10.png'
import LineChart from '../LineChart/LineChart'
import PieChart from '../PieChart/PieChart'
import TableChart from '../TableChart/TableChart'
import AvatarCard from '../AvatarCard/AvatarCard'

const Main = () => {
    return (
        <div className='main-component'>

            <div className='first-div'>
                <span className='morning-text'>Good Morning ! 🌞</span>
                <div className='avatar-div'>
                    <div className='name-email'>
                        <span className='name'>John Doe</span>
                        <span className='email'>john@doe.com</span>
                    </div>
                    <img src={Avatar} alt='' />
                </div>
            </div>

            <div className="second-div">
                <LineChart />
                <PieChart />
            </div>

            <div className='third-div'>
                <TableChart />
                <AvatarCard />
            </div>

        </div>
    )
}

export default Main

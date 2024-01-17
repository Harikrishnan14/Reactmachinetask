import React from 'react'
import './Sidebar.css'
import Briefcase from '../../Assets/Briefcase.png'
import StatBoard from '../../Assets/StatBoard.png'
import CircledMenu from '../../Assets/Circled Menu.png'
import Support from '../../Assets/Support.png'
import Puzzle from '../../Assets/Puzzle.png'
import Help from '../../Assets/Help.png'
import Shutdown from '../../Assets/Shutdown.png'

const Sidebar = () => {
    return (
        <div className='sidebar'>

            <div className='sidebar-img-div'>
                <img src={Briefcase} alt='' />
                <img src={StatBoard} alt='' />
            </div>

            <div className='sidebar-list'>
                <ul>
                    <li>
                        <div className='sidebar-list-item dashboard'>
                            <img src={CircledMenu} alt=''/>
                            <span className='list-text'>Dashboard</span>
                        </div>
                    </li>
                    <li>
                        <div className='sidebar-list-item'>
                            <img src={Support} alt='' />
                            <span className='list-text'>Support</span>
                        </div>
                    </li>
                    <li>
                        <div className='sidebar-list-item'>
                            <img src={Puzzle} alt='' />
                            <span className='list-text'>Plugins</span>
                        </div>
                    </li>
                    <li>
                        <div className='sidebar-list-item'>
                            <img src={Help} alt='' />
                            <span className='list-text'>Help</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div className='sidebar-logout-div'>
                <span>Logout</span>
                <img src={Shutdown} alt=''/>
            </div>

        </div>
    )
}

export default Sidebar

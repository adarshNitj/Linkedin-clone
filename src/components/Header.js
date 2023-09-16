import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import HeaderOption from './HeaderOption';

import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
  return (
    <div className='header'>


        <div className='header__left'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/8/81/LinkedIn_icon.svg' alt=''></img> 

            <div className='header__search'>

                {/*Search icon */}
                <SearchIcon />
                <input placeholder='Search' type='text'></input>
            </div>
        </div>

        <div className='header__right'>
            <HeaderOption Icon={HomeIcon} title='Home'/>
            <HeaderOption Icon={SupervisorAccountIcon} title='My Network'/>
            <HeaderOption Icon={BusinessCenterIcon} title='Jobs'/>
            <HeaderOption Icon={ChatIcon} title='Messaging'/>
            <HeaderOption Icon={NotificationsIcon} title='Notification'/>
            <HeaderOption avatar='https://media.licdn.com/dms/image/C4D03AQFatdbUP9seYg/profile-displayphoto-shrink_100_100/0/1655798127733?e=1698883200&v=beta&t=PLqMLqLgUKO8hjWjq8k9fu1VE01JpwjzpEc_d73wEQg' title='Me'/>


        </div>
    </div>
  )
}

export default Header
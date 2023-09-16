import { Avatar } from '@mui/material'
import React from 'react'
import './Sidebar.css'

const Sidebar = () => {

    const recentItem = (topic) => {
        <div className='sidebar__recentItem'>
            <span className='sidebar__hash'>#</span>
            <p>{topic}</p>
        </div>
    };


  return (
    <div className='sidebar'>

        <div className='sidebar__top'>
            <img src='https://wallpapers.com/images/featured/mahadev-pictures-s913b6ityt64zqiu.webp' alt=''></img>
                <Avatar className='sidebar__avatar'/>
                <h2>Adarsh Bajpai</h2>
                <h4>adarshbajpai0907@gmail.com</h4>
        </div>

        <div className='sidebar__stats'>
            <div className='sidebar__stat'>
                 <p>who viewed : </p>
                 <p className='sidebar__statNumber'>256256</p>
            </div>
            <div className='sidebar__stat'>
                 <p>views on post : </p>
                 <p className='sidebar__statNumber'>256</p>
            </div>
        </div>


        <div className='sidebar__bottom'>
            <p>Recent</p>
            {recentItem("reactjs")}
            {recentItem("coding")}
            {recentItem("java")}
            {recentItem("spring")}
            {recentItem("mongoDB")}
        </div>

    </div>
  )
}

export default Sidebar
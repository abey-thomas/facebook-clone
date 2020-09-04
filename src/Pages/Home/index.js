import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Widgets from '../../Components/Widgets'
import Feed from '../Feed'
import './Home.css'
function index() {
    return (
        <div className="home">
            <Sidebar/>
            <Feed/>
            <Widgets/>
        </div>
    )
}

export default index

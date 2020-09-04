import React from 'react'
import LocalHospitalIcon from '@material-ui/icons/LocalHospital'
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags'
import PeopleIcon from '@material-ui/icons/People'
import ChatIcon from '@material-ui/icons/Chat'
import StorefrontIcon from '@material-ui/icons/Storefront'
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary'
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined'


import SidebarRow from './SidebarRow'
import './Sidebar.css'
import { useStateValue } from '../../StateProvider'
function Sidebar() {
  const [{user}] = useStateValue();

    return (
        <div className="sidebar">
            <SidebarRow 
            src={user.photoURL || "https://avatars0.githubusercontent.com/u/37014930?s=460&u=6ed362de0d85ab0ded270082444d2bf5f2f7931a&v=4"} 
            title={user.displayName || "Abey Thomas"}/>
            <SidebarRow Icon={LocalHospitalIcon} title="COVID-19 information Center"/>
            <SidebarRow Icon={EmojiFlagsIcon} title="Pages"/>
            <SidebarRow Icon={PeopleIcon} title="Friends"/>
            <SidebarRow Icon={ChatIcon} title="Messenger"/>
            <SidebarRow Icon={StorefrontIcon} title="Marketplace"/>
            <SidebarRow Icon={VideoLibraryIcon} title="Videos"/>
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title="Marketplace"/>
        </div>
    )
}

export default Sidebar

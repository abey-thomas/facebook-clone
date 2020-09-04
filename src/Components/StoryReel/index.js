
import React from 'react'
import './StoryReel.css'
import Story from './Story'

function StoryReel() {
    return (
        <div className="storyReel">
            <Story image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/How-Often-to-Post-to-Facebook-Stories.png" profileSrc="https://avatars.dicebear.com/api/male/john.svg?mood[]=happy" title = "Abey Thomas" />
            <Story image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/facebook-stories-content.png" profileSrc="https://avatars.dicebear.com/api/female/john.svg?mood[]=happy" title = "Abey Thomas" />
            <Story image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/use-Facebook-Stories-to-share-fun-and-interactive-content.png" profileSrc="https://avatars.dicebear.com/api/male/alex.svg?mood[]=happy" title = "Abey Thomas" />
            <Story image="https://mk0laterblogouwugirk.kinstacdn.com/wp-content/uploads/2019/01/Facebook-Stories-tag-users.png" profileSrc="https://avatars.dicebear.com/api/female/sonu.svg?mood[]=happy" title = "Sonu Mathew" />
        </div>
    )
}

export default StoryReel

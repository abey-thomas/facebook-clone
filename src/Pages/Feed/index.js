import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move';
import './Feed.css';
import StoryReel from '../../Components/StoryReel';
import MessageSender from '../../Components/MessageSender';
import Post from '../../Components/Post';
import db from '../../firebase';

function Feed() {
  const [posts, setPosts] = useState([]);

  const customEnterAnimation = {
    from: { transform: 'scale(0.5, 1)' },
    to: { transform: 'scale(1, 1)' },
  };

  useEffect(() => {
    db.collection('posts')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setPosts(snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        })));
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <FlipMove enterAnimation={customEnterAnimation}>
        {posts.map(({ id, data }) => (
          <div key={id}>
            <Post
              key={id}
              profilePic={data.profilePic}
              message={data.message}
              timestamp={data.timestamp}
              username={data.username}
              image={data.image}
            />
          </div>
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;

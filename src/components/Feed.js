import React, { useEffect, useState } from 'react'
import './Feed.css'
import Post from './Post';

import CreateIcon from '@mui/icons-material/Create';
import InputOptions from './InputOptions';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import ViewDayIcon from '@mui/icons-material/ViewDay';
import { db } from './firebase';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const Feed = () => {

    const [input, setInput] = useState('');
    const [posts,setPosts] = useState([]);

    useEffect(() =>  {
        db.collection('posts')
          .orderBy('timestamp','desc')
          .onSnapshot(snapshot => 
            setPosts(
                snapshot.docs.map((doc) => ({
                    id : doc.id,
                    data : doc.data(),
                }))
            )
          );
    }, []);

    const sendPost = (e) => {
        e.preventDefault();

        db.collection('posts').add({
            name : 'Adarsh Bajpai',
            description : 'this is a test',
            message : input,
            photoUrl : '',
            timestamp : firebase.firestore.FieldValue.serverTimestamp(),
        });

        setInput('');
    };


  return (
    <div className='feed'>

        <div className='feed__inputContainer'>
            <div className='feed__input'>
                <CreateIcon />
                <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type='text'/>
                    <button onClick={sendPost} type='submit'>Send</button>
                </form>

            </div>
            <div className='feed__inputOptions'>
                <InputOptions Icon={ImageIcon} title='Photo' color='#70B5F9' />
                <InputOptions Icon={SubscriptionsIcon} title='Video' color='#E7A33E' />
                <InputOptions Icon={EventNoteIcon} title='Event' color='#C0CBCD' />
                <InputOptions Icon={ViewDayIcon} title='Write article' color='#7FC15E' />          
            </div>
        </div>

        
        {posts.map(( { id, data: { name, description, message, photoUrl } } ) => (
            <Post 
              key={id}
              name={name}
              description={description}
              message={message}
              photoUrl={photoUrl}
            />
        ))}


    </div>
  )
}

export default Feed
import React from 'react';
import Navbar from '../components/Navbar';
import Chat from '../components/Chat';
import Header from '../components/Header';
import './ChatApp.css';


import { auth } from '../components/firebase';
import { useAuthState } from 'react-firebase-hooks/auth';

const style = {
  appContainer: `w-full h-full mx-auto text-center`,
  sectionContainer: `flex flex-col h-full bg-gray-100 mt-10 shadow-xl border relative`,
};

function ChatApp() {
  const [user] = useAuthState(auth);
  //  console.log(user)
  return (
    <div className='chatapp'>
      <section>
        {/* Navbar */}
        <Header/>
        <Navbar />
        {user ? <Chat/> : null}
      </section>
      
    </div>
  );
}

export default ChatApp;
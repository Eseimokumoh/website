import React from 'react';
import {auth} from '../components/firebase';

const style = {
    button: `bg-gray-200 px-4 py-2 hover:bg-gray-100`
}


const ChatLogout = () => {
const signOut = () => {
    signOut(auth)
}

  return (
    <button onClick={() => auth.signOut()} className={style.button}>
        Logout
    </button>
  )
}

export default ChatLogout;
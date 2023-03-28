import React, { useState, useEffect } from 'react'
//firebase
import {
  db, 
  doc,
  getDoc
  
} from "../../firebase/firebase.config"

export default function SideNav() {
    const[user, setUser] = useState('')

    useEffect(() => {

        const fetchItems = async () => {

            const useId = localStorage.getItem('docRef');
            const docRef = doc(db, "users", useId);
            const docSnap = await getDoc(docRef);
            
            if (docSnap.exists()) {
              setUser(docSnap.data());
            } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
            }
        }

        fetchItems();
    }, []);
    let username = user?.username
  return (
      <div className='sticky top-0 left-0'>
        <div className=" transition-all ease-in-out duration-300 flex flex-col items-center h-screen w-[18rem] rounded-r-xl bg-[#FFFFFF] bg-opacity-20">
            <div className='py-10 w-full bg-[#FFFFFF] bg-opacity-30 '>
              <h1 className=' font-extrabold text-center text-xl'>hey, {username}👋🏾</h1>
            </div>
        </div>
      </div>
  )
}

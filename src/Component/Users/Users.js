import React, { useState, useEffect } from 'react';
import SingleUser from '../SingleUser/SingleUser';
import '../Users/Users.css';
import AddFriend from '../AddFriend/AddFriend';
//import fakeData from '../FakeData/FakeData';
import userData from '../FakeData/User';

const Users = () => {

    const [users,setUsers] = useState(userData);
 
    const[friend,setFriend] = useState([]);


    const clickHandle = (friends) =>{
       const newFriend = [...friend,friends]
         setFriend(newFriend);
    }
    return (
     

        <div className="container">
           <div   className='userInfo'>  {users.map((u)=> <SingleUser clickHandle={clickHandle}   userInfo={u}></SingleUser> )}   
           </div>  

           <div className='singleUser'>
              
              <AddFriend friend={friend}></AddFriend>
               
          </div> 
   

        </div>
    );
};



export default Users; 
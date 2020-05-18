import React from 'react';
import '../SingleUser/SingleUser.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee,faPlus } from '@fortawesome/free-solid-svg-icons'
const SingleUser = (props) => {
    const click = props.clickHandle;
    const {name,email,address,salary,thumbnailUrl} = props.userInfo;
  
 



    return (
        <div>
            <div>
            <h4>User Information</h4>
            <div className="flex"> 
            <div className="right">
               <img src={thumbnailUrl} alt=""/>
            </div>
              
              <div className="left">
                <p>Name: {name} </p>
                <p>Email: {email}</p>
                <p>Address: {address.city} </p>
                <p>Salary: {salary}</p>
                <button onClick={()=> click(props.userInfo)}> <FontAwesomeIcon icon={faPlus} /> Add Friend</button>
              </div>
              </div>
            </div>
        </div>
    );
};

export default SingleUser;
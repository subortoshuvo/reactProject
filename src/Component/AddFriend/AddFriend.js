import React from 'react';

const AddFriend = (props) => {
        const parseSalary = num => {
        let perse = parseFloat(num);
        return perse;
        }
    const totalFriend = props.friend.length;
    const friend = props.friend;
    let salary = 0;
    const personSalary =  friend.map( p => {
      return salary = salary + parseSalary(p.salary);
   }  )
     

    const {name,email,address}  =props.friend;
 
    return (
        <div>
           <h1>Add friend</h1>
            <p>You have added {totalFriend} friends</p>
            <p>Your friends Total Salary: {salary}</p>
        </div>
    );
};

export default AddFriend;
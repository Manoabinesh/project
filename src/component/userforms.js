// import React, { useState } from 'react'

// export const Userforms = (props) => {
//     const initialformstate={id:null,Name:'',username:''};
//     const[user,setuser]=useState(initialformstate);

//     const handleinputchange=(e)=>{
//          const {name,value}= e.target
//          setuser({...user,[name]:value})

//     }
// const handlesubmit=(e)=>{
//     // e.preventdefault();
//     if(!user.Name||!user.username) return;
//     props.adduser(user);
//     setuser(initialformstate);

// }

//     return (
//         <div>
//             <form onSubmit={handlesubmit}>
//                 <label>Name</label>
//                 <input type='text' name='name' onChange={handleinputchange} value={user.Name} />
//                 <label>Username</label>
//                 <input type='text' name=' username' value={user.username} />
//                 <button>Add new user</button>

//             </form>
//         </div>
//     )
// }

import React, { useState } from 'react';

export const Userforms = (props) => {
    const initialFormState = { id: null, Name: '', username: '' };
    const [user, setUser] = useState(initialFormState);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.Name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input type='text' name='Name' onChange={handleInputChange} value={user.Name} />
                <label>Username</label>
                <input type='text' name='username' onChange={handleInputChange} value={user.username} />
                <button>Add new user</button>
            </form>
        </div>
    );
};


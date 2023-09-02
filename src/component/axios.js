// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Axios() {
//     const initialvalue = {
//         "id": setpost.length + 1,
//         "name": "",
//         "username": "",
//         "email": "",

//     }

//     const [users, setUsers] = useState([]); // Change variable name to "users" for clarity
//     const [postuser, setpost] = useState({initialvalue});

//     useEffect(() => {
//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then((res) => setUsers(res.data)) // Fix the ".then()" typo
//             .catch((error) => console.error(error)); // Add error handling
//     }, []); // Add an empty dependency array to run the effect only once


//     const post = () => {
//         axios.post('https://jsonplaceholder.typicode.com/users/{postuser}')
//             .then((res) => setUsers(res.data))
//     }

//     const changehandle = (e) => {
//         const{name,value}=e.target;
//         setpost({...setpost,[name]:value})
//     }
//     return (
//         <div>
//             <form>
//                 <input type='text' name='username' placeholder='username' onChange={changehandle} />
//                 <button type='submit' onClick={post}>Submit</button> {/* Add type='submit' to make the button a submit button */}
//             </form>

//             {/* Display the fetched users */}
//             <ul>
//                 {users.map((user) => (
//                     <li key={user.id}>{user.name}</li>
//                 ))}
//             </ul>
//         </div>
//     );
// }

// export default Axios;



// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// function Axios() {
//   const initialvalue = {
//     "id": null,
//     "name": "",
//     "username": "",
//     "email": "",
//   }

//   const [users, setUsers] = useState([]);
//   const [postuser, setPostUser] = useState(initialvalue); // Corrected the initial value

//   useEffect(() => {
//     axios.get('https://jsonplaceholder.typicode.com/users')
//       .then((res) => setUsers(res.data))
//       .catch((error) => console.error(error));
//   }, []);

//   const post = (e) => {
//     e.preventDefault(); // Prevent default form submission
//     axios.post('https://jsonplaceholder.typicode.com/users', postuser) // Corrected the POST request
//       .then((res) => {
//         setUsers([...users, res.data]); // Add the newly created user to the list
//         setPostUser(initialvalue); // Reset the form fields after submission
//       })
//       .catch((error) => console.error(error));
//   }

//   const changehandle = (e) => {
//     const { name, value } = e.target;
//     setPostUser({ ...postuser, [name]: value ,id:setUsers.length+1}); // Update the correct field in postuser
//   }

//   return (
//     <div>
//       <form>
//         <input
//           type='text'
//           name='username'
//           placeholder='username'
//           onChange={changehandle}
//           value={postuser.name} // Bind input value to postuser state
//         />
//         <button type='submit' onClick={post}>Submit</button>
//       </form>

//       <ul>
//         {users.map((user) => (
//           <li key={user.id}>{user.name}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Axios;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Axios() {
  const initialvalue = {
    "id": null,
    "name": "",
    "username": "",
    "email": "",
  }

  const [users, setUsers] = useState([]);
  const [postuser, setPostUser] = useState(initialvalue);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((res) => setUsers(res.data))
      .catch((error) => console.error(error));
  }, []);

  const post = (e) => {
    e.preventDefault(); // Prevent default form submission
    axios.post('https://jsonplaceholder.typicode.com/users', postuser)
      .then((res) => {
        setUsers([...users, res.data]);
        setPostUser(initialvalue);
      })
      .catch((error) => console.error(error));
  }

  const changehandle = (e) => {
    const { name, value } = e.target;
    setPostUser({ ...postuser, [name]: value });
  }

  const del = () => {
    axios.delete(`https://jsonplaceholder.typicode.com/users/${1}`)
      .then((res) => console.log(setUsers(res.data)))

  }

  return (
    <div>
      <form>
        <input
          type='text'
          name='username'
          placeholder='username'
          onChange={changehandle}
          value={postuser.username}
        />
        <button type='submit' onClick={del}>Submit</button>
      </form>

      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Axios;

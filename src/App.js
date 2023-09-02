import React from 'react';
import Form from './component/form';
// import Final_form from './component/Form-final';
// import FinalForm from './component/Form-final';
// import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
// import Home from './component/Home';
// import About from './component/About';
// import Contact from './component/contact';
import { Table } from './component/table';
// import { useState } from 'react';
// import { Userforms } from './component/userforms'
import Axios from './component/axios';
import { Provider } from 'react-redux';
import CounterReducer from './component/counterReducer';
import store from './component/store';
import FormValidation from './component/redux/formvalidation';
function App() {
  // table component functionality start
  // const userData = [
  //   { id: 1, Name: "Ram", username: "Ramkumar" },
  //   { id: 2, Name: "Sam", username: "Samkaran" },
  //   { id: 3, Name: "Selva", username: "Selvakumar" },
  // ];

  // const addUser = (user) => {
  //   user.id = users.length + 1;
  //   setusers([...users, user])
  // }

  // const deleteUser = (id) => {
  //   setusers(users.filter((user) => user.id !== id))
  // }


  // const [users, setusers] = useState(userData);


  // table component functionality end
  return (
    <div className='app'>
      {/* <BrowserRouter>
        <Link to="/">Home</Link>
        <Link to="/about/:id">About us</Link>
        <Link to="/contact">Contact</Link>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/contact/:id' element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
      <Form />
      <FinalForm /> */}
      {/* <Table deleteUser={deleteUser} users={users} /> */}
      {/* <Userforms addUser={addUser} /> */}
      {/* <Axios/> */}
      {/* <Provider store={store}> */}
        {/* <CounterReducer/> */}
      {/* </Provider> */}
      <FormValidation></FormValidation>
    </div>
  )
}

export default App;
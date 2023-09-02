
// // import React, { useState } from 'react';

// // function Form() {
// //   const [inputValue, setValue] = useState('');
// //   const [formError, setFormError] = useState(''); // Use camelCase for variable names

// //   // Input value change handler
// //   const onChangeHandle = (e) => {
// //     const value = e.target.value;
// //     setValue(value);
// //   }

// //   // Submit button handler
// //   const submit = (e) => {
// //     e.preventDefault();
// //     const error = validation(inputValue);
// //     setFormError(error); // Set the error message based on validation result
// //   }

// //   // Validation function
// //   const validation = (inputValue) => {
// //     let error = ''; // Use let instead of const since this value can change
// //     if (inputValue.length <= 1) { // Change condition to less than or equal
// //       error = 'Please fill valid information'; // Update error message
// //     }
// //     return error;
// //   }

// //   return (
// //     <div>
// //       <form onSubmit={submit}> {/* Change onClick to onSubmit */}
// //         <div>
// //           <label>Name</label>
// //           <input type="text" placeholder='Name' onChange={onChangeHandle} />
// //         </div>
// //         <button type="submit">Submit</button> {/* Add type attribute */}
// //         <div>{formError}</div>
// //       </form>
// //     </div>
// //   )
// // }

// // export default Form;



// import React from 'react'
// import { useState } from 'react';

// const Form = () => {
//   // usestate user
//   const [uservalue, setuser] = useState('');
//   const [emailvalue, setemail] = useState('')
//   const [passwordvalue, setpassword] = useState('')
//   const [cpasswordvalue, setcpassword] = useState('');
// console.log(uservalue);
// console.log(emailvalue);
// console.log(passwordvalue);
// console.log(cpasswordvalue);

//   //userstate error display
//   const [erroruser, seterroruser] = useState('');
//   const [erroremail, seterroremail] = useState('');
//   const [errorpassword, seterrorpassword] = useState('');
//   const [errorcpassword, seterrorcpassword] = useState('');
//   console.log(erroruser);

//   const uservalid = (e) => {
//     const error = {};
//     if (e.length >= 3) {
//       error = "Enter valid name";
//     }
//     return (error);
//   }

//   const emailvalid = (e) => {
//     const error = {};
//     if (e = `${e}@gmail.com`) {
//       error = "Enter Valid email";
//     }
//     return (error);
//   }
//   const passwordvalid = (e) => {
//     const error = {};
//     if (e.length >= 8) {
//       error = "Enter valid password";
//     }
//     return (error);
//   }
//   console.log(passwordvalid);

//   const confirmvalid = (e) => {
//     const error = {};
//     if (e = cpasswordvalue) {
//       error = "password not match";
//     }
//     return (error);
//   }
//   console.log(confirmvalid);


//   // input value on change
//   const handleuser = (e) => {
//     const uservalue = e.target.value;
//     setuser(uservalue);
//   }
//   const handleemail = (e) => {
//     const emailvalue = e.target.value;
//     setemail(emailvalue);
//   }
//   const handlepassword = (e) => {
//     const passwordvalue = e.target.value;
//     setpassword(passwordvalue);
//   }
//   const handlecpassword = (e) => {
//     const cpasswordvalue = e.target.value;
//     setcpassword(cpasswordvalue);
//   }

//   // submit onchange
//   const submit = (e) => {
//     //  const submitvalue=e.target.value;
//      seterroruser(uservalid);
//     seterroremail(emailvalid);
//      seterrorpassword(passwordvalid);
//     seterrorcpassword(confirmvalid);
//   }

//  // error handling

//   return (
//     <div>
//       <h1>form</h1>
//       <div>
//         <form onSubmit={submit}>
//           <div>
//             <div><label>Username</label></div>
//             <input type='text' placeholder='UserName' value={uservalue} onChange={handleuser} />
//           </div>
//           <h1>{erroruser}</h1>
//           <div>
//             <div><label>Email</label></div>
//             <input type='email' placeholder='Email' value={emailvalue} onChange={handleemail} />
//             <h1>{erroremail}</h1>
//           </div>
//           <div>
//             <div><label>Password</label></div>
//             <input type='password' placeholder='Password' value={passwordvalue} onChange={handlepassword} />
//             <h1>{errorpassword}</h1>

//           </div>
//           <div>
//             <div><label>Conifrm Password</label></div>
//             <input type='password' placeholder='Confirm password' value={cpasswordvalue} onChange={handlecpassword} />
//             <h1>{errorcpassword}</h1>

//           </div>
//           <button>Submit</button>
//         </form>
//       </div>
//     </div>
//   )
// }
// export default Form;



import React, { useState } from 'react';

const Form = () => {
  const [uservalue, setuser] = useState('');
  const [emailvalue, setemail] = useState('');
  const [passwordvalue, setpassword] = useState('');
  const [cpasswordvalue, setcpassword] = useState('');

  const [erroruser, seterroruser] = useState('');
  const [erroremail, seterroremail] = useState('');
  const [errorpassword, seterrorpassword] = useState('');
  const [errorcpassword, seterrorcpassword] = useState('');

  // const object = {
  //   username: [...uservalue],
  //   email: [...emailvalue],
  //   password: [...passwordvalue],
  //   cpassword: [...cpasswordvalue],
  // };
  // console.log(object);
  // const [btn, setbtn] = useState(object);
  // console.log(btn);


  const uservalid = (e) => {
    let error = '';
    if (e.length < 3) {
      error = 'Enter valid name';
    }
    return error;
  }

  const emailvalid = (e) => {
    let error = '';
    if (!e.endsWith('@gmail.com')) {
      error = 'Enter Valid email';
    }
    return error;
  }

  const passwordvalid = (e) => {
    let error = '';
    if (e.length < 8) {
      error = 'Enter valid password';
    }
    return error;
  }

  const confirmvalid = (e) => {
    let error = '';
    if (e !== cpasswordvalue) {
      error = 'Passwords do not match';
    }
    return error;
  }

  const handleuser = (e) => {
    const uservalue = e.target.value;
    setuser(uservalue);
  }

  const handleemail = (e) => {
    const emailvalue = e.target.value;
    setemail(emailvalue);
  }

  const handlepassword = (e) => {
    const passwordvalue = e.target.value;
    setpassword(passwordvalue);
  }

  const handlecpassword = (e) => {
    const cpasswordvalue = e.target.value;
    setcpassword(cpasswordvalue);
  }

  const submit = (e) => {
    e.preventDefault();
    seterroruser(uservalid(uservalue));
    seterroremail(emailvalid(emailvalue));
    seterrorpassword(passwordvalid(passwordvalue));
    seterrorcpassword(confirmvalid(passwordvalue));
  }

  return (
    <div>
      <h1>form</h1>
      <div>
        <form onSubmit={submit}>
          <div>
            <div><label>Username</label></div>
            <input type='text' placeholder='UserName' value={uservalue} onChange={handleuser} />
          </div>
          <h1>{erroruser}</h1>
          <div>
            <div><label>Email</label></div>
            <input type='email' placeholder='Email' value={emailvalue} onChange={handleemail} />
            <h1>{erroremail}</h1>
          </div>
          <div>
            <div><label>Password</label></div>
            <input type='password' placeholder='Password' value={passwordvalue} onChange={handlepassword} />
            <h1>{errorpassword}</h1>
          </div>
          <div>
            <div><label>Confirm Password</label></div>
            <input type='password' placeholder='Confirm password' value={cpasswordvalue} onChange={handlecpassword} />
            <h1>{errorcpassword}</h1>
          </div>
          <button type="submit">Submit</button>
          {/* <div>{btn}</div> */}
        </form>
      </div>
    </div>
  )
}

export default Form;




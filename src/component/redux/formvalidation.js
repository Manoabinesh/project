import React, { useState } from 'react';

const FormValidation = () => {
 const initialvalue={
    inputBox:'',
    selectBox:'',
    radioOptions:'',

}
    const[userdata,setuser]=useState(initialvalue)
     const onchangehandle=(e)=>{
        const{name,value,type,checked}=e.target;
        console.log(name);

    }
    return (
        <div>
            <h1>Form</h1>
            <form action="#" method="post">
                <label for="inputBox" >Input Box:</label>
                <input type="text" id="inputBox" name="inputBox" placeholder="Enter text here" required onChange={onchangehandle} /><br /><br />

                <label for="selectBox">Select Box:</label>
                <select id="selectBox" name="selectBox" onChange={onchangehandle}>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select><br /><br />

                <label>Radio Button:</label><br />
                <input type="radio" id="radioOption1" name="radioOptions" value="Option 1"onChange={onchangehandle} />
                <label for="radioOption1">Option 1</label><br />
                <input type="radio" id="radioOption2" name="radioOptions" value="Option 2" />
                <label for="radioOption2">Option 2</label><br /><br />

                <label>Checkbox:</label><br />
                <input type="checkbox" id="checkboxOption1" name="checkboxOptions[]" value="Option 1" onChange={onchangehandle} />
                <label for="checkboxOption1">Option 1</label><br />
                <input type="checkbox" id="checkboxOption2" name="checkboxOptions[]" value="Option 2" onChange={onchangehandle} />
                <label for="checkboxOption2">Option 2</label><br/>
                <input type="checkbox" id="checkboxOption3" name="checkboxOptions[]" value="Option 3" onChange={onchangehandle} />
                <label for="checkboxOption3">Option 3</label><br />
                <input type="checkbox" id="checkboxOption4" name="checkboxOptions[]" value="Option 4" onChange={onchangehandle} />
                <label for="checkboxOption4">Option 4</label><br /><br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default FormValidation;

import counter from "./counter";
import { configureStore } from "@reduxjs/toolkit";

  export default configureStore({
    reducer:{
        counter:counter,
        // counter key is reducername defined
        // value key file  name
    },
})
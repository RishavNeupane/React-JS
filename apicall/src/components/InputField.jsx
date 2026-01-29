const { useState } = require("react")


const InputField=()=>{

    const[field,setField] = useState('');


    return(
        <input type="text" value={field}  />
    )


}
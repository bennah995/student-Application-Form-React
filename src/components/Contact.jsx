import { useState } from "react";

export default function Contact(){

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: ""
  })

  // const [name, setName] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPass, setConfirmPass] = useState("");
  // const [email, setEmail] = useState("");

  
  function handleChange(e){
    const { name, value } = e.target;
    setForm((prev) => ({...prev, [name]: value}));
  }

  function handleSubmit(e){
    e.preventDefault(); //prevents form from re loading
    console.log("Form submitted: ", {form});

    // setName("");
    // setPassword("");
    // setConfirmPass("");
    // setEmail("");

    setForm({name: "", email:"", password:"", confirmPass:""});
  }


  return(
    <div>
      <form onSubmit={handleSubmit}>
        {/* <label> */}
            {/* Name:  */}
            <input name="name"
              value={form.name} 
              onChange={handleChange}
              // onChange={(e) => setName(e.target.value)}  
              placeholder="Enter your name" />
          {/* </label> */}
          <p></p>

          {/* <label> */}
            {/* Email:  */}
            <input name="email"
              value={form.email} 
              onChange={handleChange}
              // onChange={(e) => setEmail(e.target.value)}  
              placeholder="Enter your email" />
          {/* </label> */}
          <p></p>

          {/* <label> */}
            {/* Password: */}
            <input name="password"
              type="text" 
              value={form.password}
              onChange={handleChange}
              // onChange={(e) => setPassword(e.target.value)} 
              placeholder="Input password"/>
          {/* </label> */}
          <p></p>

          {/* <label> */}
            {/* Confirm Password: */}
            <input name="confirmPass"
              type="text" 
              value={form.confirmPass}
              onChange={handleChange}
              // onChange={(e) => setConfirmPass(e.target.value)}
              placeholder="Confirm password"/>
          {/* </label> */}
          {/* <p>Name: {name}</p>
          <p>Email: {email}</p> */}

          <button type="submit" >SUBMIT</button>
{/* 
          {(password && confirmPass && (
            password === confirmPass ? (<p>Passwords Match</p>) : (<p>Password do not match</p>)
          ))} */}
      </form>   
    </div>

  )
}

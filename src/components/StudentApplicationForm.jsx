import { useState } from "react";


export default function StudentApplicationForm(){
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    experienceLevel: "",
    reasonToJoin: ""
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  function handleChange(e){
    const {name, value} = e.target;
    setForm((prev) => ({...prev, [name]: value}));
  }

  function validate(form){
    const errors = {};

    // name validation
    if(!form.fullName.trim()){
      errors.fullName = "Name is required.";
    }

    // email validation
    if(!form.email.trim()){
      errors.email = "Email is required.";
    } else if(!form.email.includes("@")){
      errors.email = "Enter a valid email address.";
    }

    // phone validation
    if(!form.phone.trim()){
      errors.phone = "Phone is required.";
    } else if(form.phone.length < 10 || isNaN(form.phone)){
      errors.phone = "Enter a valid phone number."
    }

    // experience validation
    if(!form.experienceLevel.trim()){
      errors.experienceLevel = "Select an experience level."
    }

    // reasonToJoin
    if(!form.reasonToJoin.trim()){
      errors.reasonToJoin = "Kindly state a reason to join."
    }

    return errors;
  }

  function handleSubmit(e){
    e.preventDefault();

    const nextErrors = validate(form);
    setErrors(nextErrors);

    if(Object.keys(nextErrors).length === 0 ){
      console.log("Submitting", form)

      setSuccess(true);
      setForm({fullName:"", email:"", phone:"", experienceLevel:"", reasonToJoin:""})
      setErrors({});
    }
  }

  return(
    <div>
      <h3>Student Application Form</h3>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <label>
          Full Name :
          <input 
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="John Doe"
          />
          {errors.fullName && <p style={{color: "red"}}>{errors.fullName}</p>}
        </label>
        <p></p>

        {/* email */}
        <label>
          Email :
          <input 
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="johndoe@gmail.com"
          />
          {errors.email && <p style={{color: "red"}}>{errors.email}</p>}
        </label>
        <p></p>

        {/* Phone */}
        <label>
          Phone :
          <input 
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+25412312312"
          />
          {errors.phone && <p style={{color: "red"}}>{errors.phone}</p>}
        </label>
        <p></p>

        {/* Experience */}
        <label>
          Experience :
          <select name="experienceLevel"
            value={form.experienceLevel}
            onChange={handleChange}
            >
            <option></option>
            <option value="beginner">beginner</option>
            <option value="intermediate">intermediate</option>
            <option value="advanced">advanced</option>
            <option value="expert">expert</option>
          </select>
          {errors.experienceLevel && <p style={{color: "red"}}>{errors.experienceLevel}</p>}
        </label>
        <p></p>

        {/* name */}
        <label>
          Why do you want to join?
          <p></p>
          <textarea 
            name="reasonToJoin" 
            onChange={handleChange}
            value={form.reasonToJoin}
            rows={4} cols={50}
            placeholder="I wanna join beacuse...."
          >

          </textarea>
          {errors.reasonToJoin && <p style={{color: "red"}}>{errors.reasonToJoin}</p>}
        </label>
        <p></p>

        <button type="submit">SUBMIT</button>
      </form>
      {success && <h5><i>Thanks for applying, we'll be in touch!</i></h5>}
    </div>
  )
}
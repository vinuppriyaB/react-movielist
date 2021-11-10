import { useFormik } from "formik";
import * as yup from 'yup';

// const validateform=(values)=>{
//     const errors={};
//     if(values.email.length<5){
//         errors.email="provide longer email";
//      }
//      else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) 
//      {
//         errors.email = 'Invalid email address';
//       }
     
//     if(values.password.length<8){
//         errors.password="provide longer password";
//      }
//      else if(values.password.length>12)
//      {
//         errors.password="provide short password"; 
//      }
    
//     return errors;

// }

const formValidationSchema=yup.object({
    email:yup
    .string()
    .min(5,"too small")
    .required("fill the email ")
    .matches(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,"Patter not mathch"),

    password:yup
    .string()
    .min(8,"too small")
    .max(12,"too big")
    .required("fill the password")

});
export function BasicForm() {
    const { handleSubmit,handleChange,handleBlur,values,errors,touched} =
    useFormik({
        initialValues:{ email: "vinu@gmail.com", password: "" },
    validateSchema:formValidationSchema,
    onSubmit:(values)=>{
        console.log( "submit",values);
    },

    });
    
  return (
    
      
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            placeholder="email"
          />
          {errors.email && touched.email && errors.email}
          <br></br>
          <input
            type="text"
            id="password"
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            placeholder="password"
          />
          {errors.password && touched.password && errors.password}
          <br></br>
          <button type="submit">submit</button>
        </form>
     
    
  );
}

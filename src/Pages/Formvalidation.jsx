import * as Yup from "yup"
import "yup-phone-lite";

  
    const Formvalidation = Yup.object({
        name:Yup.string().min(5,"name should be atleast 5 characters").required("name is required"),
        email:Yup.string().email("please enter valid email address").required("email is required"),
        phone:Yup.string().phone("US","phone number is not valid").required("please enter your phone number"),
        message:Yup.string().min(10,"message must be atleast ten character").max(50, "message must be not more than fifty charactesr").required("message is required")
    })



export default Formvalidation;

import * as Yup from "yup"
import "yup-phone-lite";

  
    const Formvalidation = Yup.object({
        name:Yup.string().min(5,"Name should be atleast 5 characters").required("Name is required"),
        email:Yup.string().email("Please enter valid email address").required("Email is required"),
        phone:Yup.string().matches(/^[0-9]{10}$/, "Phone number must be ten digits").phone("IN",true ,"Phone number is not valid").required("Please enter your phone number"),
        message:Yup.string().min(10,"Message must be atleast ten character").max(300, "Message must be not more than fifty charactesr").required("Message is required")
    })



export default Formvalidation;

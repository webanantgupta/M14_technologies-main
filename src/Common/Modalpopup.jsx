import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import ModalpopupValidation from '../Components/HomeComponents/ModalpopupValidation';
import { useFormik } from 'formik';
import { RxCross2 } from "react-icons/rx";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from 'react';
import toast from 'react-hot-toast';


function Modalpopup({ handleClose, modalOpen }) {

  const [captcha, setCaptcha] = useState(null);
  // const SITE_KEY = import.meta.env.VITE_SITE_KEY;
  const handleCaptchaChange = (value) => {
    // console.log(value);
    setCaptcha(value);
  }

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    message: ""
  }

  const { handleBlur, handleChange, errors, handleSubmit, touched, values } = useFormik({
    initialValues: initialValues,
    validationSchema: ModalpopupValidation,
    onSubmit: async (values, { resetForm }) => {
      try {
        if (!captcha) {
          toast.error("Please verify that you are not a robot");
          return;
        }
        const response = await fetch("https://api-company.onebigbit.com/clients/send_msg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify(values)
        });

        if (response.ok) {
          toast.success("Details submitted successfully!");
          resetForm();
        } else {
          toast.error("Something went wrong");
        }

      } catch (error) {
        console.log("Error", error);
        //  toast.error("Something went wrong");
      }


      console.log(values);
      // toast.success("We received your message")
      handleClose();
    }
  })

  return (<div>

    <Modal isOpen={modalOpen} toggle={handleClose}  >
      <ModalHeader className='modal_head'>
        Get A Quotation

        <RxCross2 className='modal_cross' onClick={handleClose} style={{ cursor: "pointer" }} /></ModalHeader>
      <ModalBody>
        <form onSubmit={handleSubmit} className='form_container'>
          <div className='form_element'>
            <Label>Name</Label>
            <input
              type='text'
              placeholder='Enter name'
              name='name'
              onBlur={handleBlur}
              onChange={handleChange}
              values={values.name}
            />
            {errors.name && touched.name ? (<small className='form_element_error'>{errors.name}</small>) : (null)}
          </div>
          <div className='form_element'>
            <Label>Mobile No</Label>
            <input
              type='number'
              placeholder='Enter Mobile No'
              name='phone' maxLength={10} minLength={10}
              onBlur={handleBlur}
              onChange={handleChange}
              values={values.phone}
            />
            {errors.phone && touched.phone ? (<small className='form_element_error'>{errors.phone}</small>) : (null)}
          </div>
          <div className='form_element'>
            <Label>Email</Label>
            <input
              type='email'
              placeholder='Enter Email'
              name='email'
              onBlur={handleBlur}
              onChange={handleChange}
              values={values.email}
            />
            {errors.email && touched.email ? (<small className='form_element_error'>{errors.email}</small>) : (null)}
          </div>
          <div className='form_element'>
            <Label>Query</Label>
            <textarea
              type="text"
              placeholder='Ask your Query here'
              name='message'
              onBlur={handleBlur}
              onChange={handleChange}
              values={values.message}
            />
            {errors.message && touched.message ? (<small className='form_element_error'>{errors.message}</small>) : (null)}
          </div>

        </form>
      </ModalBody>
      <ModalFooter>
        {/* <Button color="primary" >
            Do Something
          </Button>{' '} */}
        {/* <Button onClick={handleClose}>
            Cancel
          </Button> */}
        <div className="site-action  " style={{ width: "20x" }}>
          <div className="action-hamburger last_captcha my-3">
            <div className='captcha'>
              <ReCAPTCHA
                sitekey='6LdoDvsrAAAAAGAMJQSBNgdMCSdc5d4zVbBDQAbQ'

                onChange={handleCaptchaChange}
              />
            </div>
            <div>
              <Link to="#" className='requestBTn  px-4 py-2' onClick={() => { handleSubmit() }} >Submit</Link>
            </div>
          </div>
        </div>
        <div className="site-action  d-xl-block" style={{ width: "20x" }}>
          {/* <div className="action-hamburger">
              <Link to="#" className='requestBTn' onClick={handleClose}>Close</Link>
            </div> */}
        </div>
      </ModalFooter>
    </Modal>
  </div>
  );
}

export default Modalpopup;
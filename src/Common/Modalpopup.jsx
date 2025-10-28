import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Label } from 'reactstrap';
import ModalpopupValidation from '../Components/HomeComponents/ModalpopupValidation';
import { useFormik } from 'formik';
import { RxCross2 } from "react-icons/rx";

function Modalpopup({handleClose, modalOpen}) {


const initialValues={
    name:"",
    email:"",
    phone:"",
    message:""
}

const { handleBlur,handleChange,errors,handleSubmit,touched,values} = useFormik({
    initialValues:initialValues,
    validationSchema:ModalpopupValidation,
    onSubmit:(values)=>{
        console.log(values);
        handleClose();
    }
})

  return (<div>
     
      <Modal isOpen={modalOpen} toggle={handleClose}  >
        <ModalHeader className='modal_head'>
            Get A Quotation
            
             <RxCross2 className='modal_cross' onClick={handleClose} style={{cursor: "pointer"}}/></ModalHeader> 
        <ModalBody>
          <b>How can we help you?</b>
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
                name='phone'
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
                <Label>Message</Label>
                <textarea
                type="text"
                placeholder='Ask your query here'
                name='message'
                onBlur={handleBlur}
                onChange={handleChange}
                values={values.message}
                />
                {errors.message && touched.message ? (<small className='form_element_error'>{errors.message}</small>): (null)}
            </div>
         </form>
        </ModalBody>
        <ModalFooter className='text-center'>
          {/* <Button color="primary" >
            Do Something
          </Button>{' '} */}
          {/* <Button onClick={handleClose}>
            Cancel
          </Button> */}
           <div className="site-action d-none d-xl-block " style={{ width: "20x"  }}>
            <div className="action-hamburger d-flex justify-content-center my-3">
              <Link to="#" className='requestBTn  px-4 py-2' onClick={() => { handleSubmit() }} >Submit</Link>
            </div>
          </div>
           <div className="site-action d-none d-xl-block" style={{ width: "20x"  }}>
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
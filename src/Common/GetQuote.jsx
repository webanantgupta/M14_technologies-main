import { useState } from "react";
import { Link } from "react-router-dom"
import Modalpopup from "./Modalpopup";


const GetQuote = () => {

    const [modalOpen, setModalOpen] = useState(false);
    const [openMenu, setOpenMenu] = useState(false);        // this is for when mobile menu is open/close
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }

    const handleModal = (e) => {
        e.preventDefault();
        setModalOpen(true);
    }

    const handleClose = () => {
        setModalOpen(false);
    }



    return (
    <div className="action-hamburger quote_container">
        <Link to="#" className='requestBTn' onClick={handleModal}>Get A Quote</Link>
      <Modalpopup handleClose={handleClose} modalOpen={modalOpen} />

    </div>
    )
}

export default GetQuote

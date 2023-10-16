import React from 'react';
import { Link } from 'react-router-dom';


const Modal = ({ open, close }) => {
    if (!open) return null
    return (
        <div onClick={close} className='overlay h-screen w-screen'>
            {/* I'll use the stop propagation function to exempt the closing the modal when the modal is clicked but it closes when the overlay is clicked */}
            <div onClick={(e) => { e.stopPropagation() }} className='modal-container'>
                <h3>Are you sure?</h3>
                <p>If you leave this page, you will lose any progress made.</p>
                <Link to="/intro">
                    <button className='button-secondary-active'>Yes, leave page</button>
                </Link>
                <button onClick={close} className='button-secondary-active'>Cancel</button>
            </div>
        </div>
    )
}

export default Modal
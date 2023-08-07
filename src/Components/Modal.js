import React from 'react'
import "./Modal.css"
export default function Modal({open}) {
    if(!open) {
        return null
    }
    return (
        <div className='modalBackground'>
            <div className='modalContainer'>
                <button onClick={()=>open(false)}> X </button>
                <div className='title'>
                    <h1>Are you sure you want to continue</h1>
                </div>
                <div className='body'>
                    <p>
                        the next page is awesome ,you should move forward you will enjoy it.
                    </p>
                </div>
                <div className='footer'>
                    <button onClick={()=>open(false)}>Cancel</button>
                    <button>Continue</button>
                </div>
            </div>
        </div>
    );
}

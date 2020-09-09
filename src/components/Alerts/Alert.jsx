import React from 'react'

export default function Success({alert, type}) {
    const getMessage = () => {
        if(typeof alert === 'string') {
            return alert;
        } else if(typeof alert === 'object') {
            try {
                return Object.entries(alert)[0][1];
            } catch (e) {
                console.log(e);
            }
        }
    }
    return (
            <>
            <div className={`alert alert-${type} alert-dismissible fade show`} role="alert">
                 {getMessage()}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            </>
        
    )
}
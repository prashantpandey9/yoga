import React from 'react'

export default function Success(props) {
    return (
        
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                 {props.alert}
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        
    )
}
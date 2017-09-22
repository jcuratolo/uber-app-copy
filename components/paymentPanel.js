import React from 'react'

export default props => {
    return <div className="payment-panel text-center">
        <button className="payment-confirm-btn">
            Confirm {props.selectedService}
        </button>
    </div>
}

import React from 'react'
import PaymentPanel from '../components/paymentPanel'

import { selectService, hub } from '../actions'

function Service(props) {
    var handleClick = _ => selectService(props.name, props.price)

    return <div className="service col" onClick={handleClick}>
        <div className="service-name text-center">{props.name}</div>
        <div className="service-price text-center">{props.price}</div>
    </div>
}

function ServiceList(props) {
    var services =
        props.items.map((s, i) =>
            <Service name={s.name}
                price={s.price} 
                key={i}/>)

    return <div className="service-list row">
        {services}
    </div>
}

function ServiceCategory(props) {
    return <div className="service-category">
        <h4 className="text-center">{props.name}</h4>
        <ServiceList items={props.options}/>
    </div>
}

function ServiceCategoryList(props) {
    var serviceCategories =
        props.items.map((s, i) =>
            <ServiceCategory 
                name={s.name} 
                options={s.options} 
                key={i}/>)

    return <div className="service-category-list">
        {serviceCategories}
    </div>
}

function Book(props) {
    return <div>
        <h1>Book Ride</h1>
        <ServiceCategoryList items={props.services}/>
        <PaymentPanel selectedService={props.selectedService}/>
    </div>
}

export default Book

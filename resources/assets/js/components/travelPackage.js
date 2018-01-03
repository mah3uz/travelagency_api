import React, { Component } from 'react';

/* Stateless component or pure component
 * { travelPackage } syntax is the object destructing.
 */
const Package = ({ travelPackage }) => {
    const divStyle = {
        display: 'flex',
        flexDirection: 'column',
        width: '65%',
        margin: '30px 10px',
        padding: '10px',
        background: '#f2f2f2'
    }

    // if the props travelPackage is null, return Package doesn't exist.
    if (!travelPackage) {
        return(<div style={divStyle}> No Package selected.</div>);
    }

    // else display the product data.
    return(
        <div style={divStyle}>
            <h3>Package Information</h3>
            <h2>{travelPackage.title}</h2>
            <h3>Destination: {travelPackage.destination}</h3>
            <p>{travelPackage.description}</p>
            <h3>Price: {travelPackage.price}</h3>
        </div>
    )
}

export default Package;

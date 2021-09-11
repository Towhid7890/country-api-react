import React from 'react';

const Country = (props) => {
    // console.log(props);
    const {name,flag,population} = props.country;
    const handleAddCountry = props.handleAddCountry;
    
    const imgStyle={
        height :'30px',
    }
    return (
        <div>
            <h3>{name}</h3>
            <img style={imgStyle} src={flag} alt="" />
            <h2>population: {population}</h2> <br />
            <button onClick={() => handleAddCountry(props.country)}>Add to country</button>
        </div>
    );
};

export default Country;
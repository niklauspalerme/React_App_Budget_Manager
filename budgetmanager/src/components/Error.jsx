//////////////////////////////////////////////////////////////////////////////////////////////
/// Imports


import React from 'react';
import PropTypes from 'prop-types';


//////////////////////////////////////////////////////////////////////////////////////////////
/// Components


const Error = ({messages}) => (
    <p className='alert alert-danger error'>{messages}</p>
)


//////////////////////////////////////////////////////////////////////////////////////////////
//PropTypes


Error.propTypes = {
    messages: PropTypes.string.isRequired 
}


//////////////////////////////////////////////////////////////////////////////////////////////
/// Exports

 
export default Error;
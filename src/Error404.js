import React from 'react'
import {Link} from 'react-router-dom'

const Error404 = () =>
{
  return <div style={{'textAlign': 'center', 'marginTop' : '50px'}}>
    <h1>404 Error!</h1>
    <p>The Page you're trying to visit does not exist.</p>
    <br /><br />
    <h3>
      <Link to="/" style={{'textDecoration': "none"}}>Go Back to Homepage</Link>
    </h3>
  </div>
}

export default Error404
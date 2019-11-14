import React from 'react';
import {Link} from 'react-router-dom';

 const  About = ()=>(
    <div>
      <p>This is about page</p>
      <Link to="/contact">Go to next page</Link>
    </div>
)
export default About;
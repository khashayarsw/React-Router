import React from 'react';
import {Link} from 'react-router-dom';

 const  Home = ()=>(
    <div>
      <p>This is home page</p>
      <Link to="/tellus">Go to next page</Link>
    </div>
)
export default Home;
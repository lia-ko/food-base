import React from 'react';
import Search from './Search';
import Results from './Results';

const Home = (props) => {
    return(
        <div className="App">
            <div className="position-relative overflow-hidden p-3 p-md-5 m-md-3 text-center bg-light move">
                <div className="col-md-9 p-lg-5 mx-auto my-5">
                    <h1 id="brand"><strong>Welcome to FoodBase</strong></h1>
                    <h5>The OpenTable Database of where to eat</h5>
                    <Search/>
                </div>
            </div>
            <div className="container">
                <Results/>
            </div>   
        </div>
    )
}
export default Home;
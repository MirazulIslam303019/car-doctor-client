import React from 'react';
import Bennar from '../Bennar/Bennar';
import About from '../About/About';
import Service from '../Service/Service';
import Adrees from '../Adrees/Adrees';
import Product from '../Product/Product';
import Team from '../Team/Team';

const Home = () => {
    return (
        <div>
            <Bennar></Bennar>
            <About></About>
            <Service></Service>
            <Adrees></Adrees>
            <Product></Product>
            <Team></Team>
        </div>
    );
};

export default Home;
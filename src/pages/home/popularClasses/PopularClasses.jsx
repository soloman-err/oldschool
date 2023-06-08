import React from 'react';
import CrystalCard from '../../../components/cards/CrystalCard';

const PopularClasses = () => {
    return (
        <div className="mt-8 px-5 w-5/6 mx-auto">
            <h1 className='text-3xl md:text-5xl font-bold py-1 text-center'>Popular Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 mt-4">
            <CrystalCard/>
            <CrystalCard/>
            <CrystalCard/>
            <CrystalCard/>
            <CrystalCard/>
            <CrystalCard/>
            </div>
        </div>
    );
};

export default PopularClasses;
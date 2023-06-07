import React from 'react';
import CrystalCard from '../../../components/cards/CrystalCard';

const PopularClasses = () => {
    return (
        <div className="my-5 px-5">
            <h1 className='text-4xl font-bold py-1 text-center bg-slate-800 shadow-xl rounded bg-gradient-to-t to-blue-950 from-blue-900'>Popular Classes</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 my-5">
            <CrystalCard/>
            <CrystalCard/>
            <CrystalCard/>
            <CrystalCard/>
            <CrystalCard/>
            <CrystalCard/>
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
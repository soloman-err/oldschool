import React from 'react';

const Container = ({children}) => {
    return (
        <section className="max-w-[2520px] xl:px-40 mx-auto">
            {children}
        </section>
    );
};

export default Container;
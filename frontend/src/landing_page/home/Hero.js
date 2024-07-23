import React from 'react';

function Hero() {
    return (  
        <div className='container p-5 mb-5'>
            <div className='row text-center'>
                <img src='media/homeHero.png' alt='Illustration of investment opportunities'  className='mb-5' />
                <h1 className='mt-5'> Invest in everything</h1>
                <p>Online platform to invest stocks,derivatives,mutual funds, and more </p>
                <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%",margin:"0 auto"}}>CONNECT WITH US</button>

            </div>

        </div>
        
    );
}

export default Hero ;
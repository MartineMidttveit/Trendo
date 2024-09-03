import React from 'react';
import Newsletter from './Newsletter';

function Footer() {
    return (
        <footer className='bg-customOrange py-6'>
            <div className='wrapper flex justify-between mx-auto w-full'>
                <h3 className='text-left 2xl:text-xl font-bold'>Trendo</h3>

                <div className='flex w-1/2 justify-between text-left'>

                    <div className='flex flex-col gap-3'>
                        <h4 className='font-medium 2xl:text-lg'>Terms</h4>
                        <p>Copyright 2024 Trendo</p>
                        <p>Terms & conditions</p>
                        <p>Privacy policy</p>
                    </div>

                    <div className='flex flex-col gap-3'>
                        <h4 className='font-medium 2xl:text-lg'>Contact</h4>
                        <p>Contact us</p>
                        <p>FAQ</p>
                        <p>Phone: +47 65 76 78 76</p>
                        <p>Mail: <span className='underline'>support@trendo.com</span></p>
                    </div>

                    <div className='flex flex-col'>
                        <h4 className='font-medium 2xl:text-lg pb-3'>Newsletter</h4>
                        <p>Join the Trendo-club to get exclusive</p>
                        <p>offers and get updated about latest trends.</p>

                        <Newsletter/>
                    </div>
                </div>
                
            </div>
        </footer>
    )
}

export default Footer;
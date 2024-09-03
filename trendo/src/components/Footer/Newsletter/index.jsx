import React, { useState } from 'react';
import { isValidEmail } from './EmailValidator'; // Import the email validation function
import SuccessMessage from './SuccessMessage'; // Import the success message component
import ErrorMessage from './ErrorMessage'; // Import the error message component

function Newsletter() {
    const [email, setEmail] = useState('');
    const [showError, setShowError] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setShowError(false); 
    };

    const handleSubmit = () => {
        if (!isValidEmail(email)) {
            setShowError(true);
            setSubmitted(false);
        } else {
            setShowError(false);
            setSubmitted(true);
        }
    };

    return (
        <div className="flex flex-col lg:mb-6 gap-2 lg:gap-3">
            {submitted ? (
                <SuccessMessage />
            ) : (
                <>
                <div className='flex items-center gap-3 mt-4'>
                    <input
                        type="text"
                        placeholder="Your email..."
                        className={`border rounded h-8 md:h-10 lg:h-12 w-full pl-3 text-sm lg:text-base ${showError ? 'border-red-500' : ''}`}
                        aria-label="Sign up for newsletter"
                        value={email}
                        onChange={handleEmailChange}
                    />
                    <button
                        className="bg-primary text-white min-w-10 h-8 md:h-10 lg:min-w-12 lg:h-12 rounded flex items-center justify-center"
                        onClick={handleSubmit}
                        aria-label="Sign up for newsletter button"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                        </svg>

                    </button>
                </div>
                {showError && <ErrorMessage />}    
                </>
            )}
        </div>
    );
}

export default Newsletter;
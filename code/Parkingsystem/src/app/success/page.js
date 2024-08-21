// SuccessPage.js

import Link from 'next/link';

const SuccessPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-md max-w-md">
        <h2 className="text-3xl font-semibold text-green-600 mb-4">Payment Successful!</h2>
        <p className="text-gray-700 mb-4">Thank you for reserving your parking spot.</p>
        <div className="flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-green-600"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 2a8 8 0 100 16 8 8 0 000-16zM8.293 11.707a1 1 0 00.707.293h.001a1 1 0 00.707-1.707l-3-3a1 1 0 00-1.414 1.414l2.293 2.293zm5.414-7.414a1 1 0 011.414 1.414l-9 9a1 1 0 01-1.414-1.414l3.293-3.293a1 1 0 00-1.414-1.414L4.586 12.293a3 3 0 004.243 4.243l5-5a3 3 0 00-4.243-4.243l-1.414 1.414a1 1 0 01-1.414-1.414l2-2a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
          <span className="ml-2 text-gray-700">Confirmation Email Sent</span>
        </div>
        <p className="text-gray-700 mb-4">
          An email with details of your reservation has been sent to your registered email address.
        </p>
        <Link href="/">
          Return Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;

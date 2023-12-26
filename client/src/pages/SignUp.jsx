
// import { Link ,useNavigate} from 'react-router-dom'
// import { useState } from 'react'

// import Oauth from '../componet/Oauth'


// const SignUp = () => {
//   const [formData , setFormData]= useState({})
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const navigate = useNavigate();
//   const handleChange = async(e)=>{
//     setFormData({ ...formData , [e.target.id]:e.target.value})
    
//   }


//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try{
//       const res = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log(data);
//       setLoading(false);
//       setError(false)
//       if (data.success === false) {
//         setError(true);
//         return;
//       }
//       console.log('Redirecting to /sign-in');
//       navigate('/sign_in');
//     }catch(error){
//           setLoading(false)
//           setError(true)
//     }
   
//   };
  
  


//   return (
//     <div className='p-3 max-w-lg mx-auto'>
//       <h1 className='text-3xl text-center font-semibold my-7'>Sign Up</h1>
//       <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
//         <input
//           type='text'
//           placeholder='Username'
//           id='username'
//           className='bg-slate-100 p-3 rounded-lg'
//           onChange={handleChange}
//         />
//         <input
//           type='email'
//           placeholder='Email'
//           id='email'
//           className='bg-slate-100 p-3 rounded-lg'
//           onChange={handleChange}
//         />
//         <input
//           type='password'
//           placeholder='Password'
//           id='password'
//           className='bg-slate-100 p-3 rounded-lg'
//           onChange={handleChange}
//         />
//         <button
//             disabled={loading}
//           className='bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
//         >
//            {loading ? 'Loading ':'Sign Up'}
//         </button>
//         <Oauth/>
//       </form>
//       <div className='flex gap-2 mt-5'>
//         <p>Have an account?</p>
//         <Link to='/sign_in' onClick={() => navigate('/sign_in')}>
//           <span className='text-blue-500'>Sign in</span>
//         </Link>
//       </div>
//       <p className='text-red-700 mt-5'>{error &&'Something went wrong!'}</p>
//     </div>
//   )
// }

// export default SignUp



// SignUpModal.js

// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import Oauth from '../componet/Oauth';

// const SignUpModal = ({ onClose }) => {
//   const [formData, setFormData] = useState({});
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log(data);
//       setLoading(false);
//       setError(false);
//       if (data.success === false) {
//         setError(true);
//         return;
//       }
//       console.log('Redirecting to /sign-in');
//       onClose(); // Close the modal after successful signup
//     } catch (error) {
//       setLoading(false);
//       setError(true);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
//       <div className="bg-white p-8 rounded shadow-lg w-1/3">
//         <div className="flex justify-end">
//           <button
//             onClick={onClose}
//             className="text-gray-500 hover:text-gray-700 focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//             </svg>
//           </button>
//         </div>
//         <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Username"
//             id="username"
//             className="bg-slate-100 p-3 rounded-lg"
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             id="email"
//             className="bg-slate-100 p-3 rounded-lg"
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             id="password"
//             className="bg-slate-100 p-3 rounded-lg"
//             onChange={handleChange}
//           />
//           <button
//             disabled={loading}
//             className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
//           >
//             {loading ? 'Loading ' : 'Sign Up'}
//           </button>
//           <Oauth />
//         </form>
//         <div className="flex gap-2 mt-5">
//           <p>Have an account?</p>
//           <Link to="/sign_in" onClick={onClose}>
//             <span className="text-blue-500">Sign in</span>
//           </Link>
//         </div>
//         <p className="text-red-700 mt-5">{error && 'Something went wrong!'}</p>
//       </div>
//     </div>
//   );
// };

// export default SignUpModal;



// SignUp.js

// import { Link, useNavigate } from 'react-router-dom';
// import { useState } from 'react';
// import Oauth from '../componet/Oauth';

// const SignUp = () => {
//   const [formData, setFormData] = useState({});
//   const [error, setError] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [showSignup, setShowSignup] = useState(true);
//   const navigate = useNavigate();

//   const handleClose = () => {
//     setShowSignup(false);
//   };

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.id]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       const res = await fetch('/api/auth/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });
//       const data = await res.json();
//       console.log(data);
//       setLoading(false);
//       setError(false);
//       if (data.success === false) {
//         setError(true);
//         return;
//       }
//       console.log('Redirecting to /sign-in');
//       navigate('/sign_in');
//     } catch (error) {
//       setLoading(false);
//       setError(true);
//     }
//   };

//   return (
//     <div className={`fixed inset-0 bg-gray-800 bg-opacity-50 ${showSignup ? '' : 'hidden'} `}>
//       <div className="bg-white p-8 rounded shadow-lg w-1/3">
//         <div className="flex justify-end">
//           <button
//             onClick={handleClose}
//             className="text-gray-500 hover:text-gray-700 focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
//             </svg>
//           </button>
//         </div>
//         <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
//         <form onSubmit={handleSubmit} className="flex flex-col gap-4">
//           <input
//             type="text"
//             placeholder="Username"
//             id="username"
//             className="bg-slate-100 p-3 rounded-lg"
//             onChange={handleChange}
//           />
//           <input
//             type="email"
//             placeholder="Email"
//             id="email"
//             className="bg-slate-100 p-3 rounded-lg"
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             id="password"
//             className="bg-slate-100 p-3 rounded-lg"
//             onChange={handleChange}
//           />
//           <button
//             disabled={loading}
//             className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
//           >
//             {loading ? 'Loading ' : 'Sign Up'}
//           </button>
//           <Oauth />
//         </form>
//         <div className="flex gap-2 mt-5">
//           <p>Have an account?</p>
//           <Link to="/sign_in" onClick={() => setShowSignup(false)}>
//             <span className="text-blue-500">Sign in</span>
//           </Link>
//         </div>
//         <p className="text-red-700 mt-5">{error && 'Something went wrong!'}</p>
//       </div>
//     </div>
//   );
// };

// export default SignUp;



// SignUp.js

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Oauth from '../componet/Oauth';

const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showSignup, setShowSignup] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setShowSignup(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      setLoading(false);
      setError(false);
      if (data.success === false) {
        setError(true);
        return;
      }
      console.log('Redirecting to /sign-in');
      navigate('/sign_in');
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  return (
    <div className={`fixed inset-0 flex items-center justify-center ${showSignup ? '' : 'hidden'}`}>
      <div className="bg-white p-8 rounded shadow-lg w-1/3">
        <div className="flex justify-end">
          <button
            onClick={handleClose}
            className="text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            id="username"
            className="bg-slate-100 p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email"
            id="email"
            className="bg-slate-100 p-3 rounded-lg"
            onChange={handleChange}
          />
          <input
            type="password"
            placeholder="Password"
            id="password"
            className="bg-slate-100 p-3 rounded-lg"
            onChange={handleChange}
          />
          <button
            disabled={loading}
            className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80"
          >
            {loading ? 'Loading ' : 'Sign Up'}
          </button>
          <Oauth />
        </form>
        <div className="flex gap-2 mt-5">
          <p>Have an account?</p>
          <Link to="/sign_in" onClick={() => setShowSignup(false)}>
            <span className="text-blue-500">Sign in</span>
          </Link>
        </div>
        <p className="text-red-700 mt-5">{error && 'Something went wrong!'}</p>
      </div>
    </div>
  );
};

export default SignUp;

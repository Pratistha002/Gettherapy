import React from 'react'
import { Link } from 'react-router-dom';

function Register() {
  return (
    <>
    <div className=' max-h-screen flex justify-around'>
        <div id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h1 className="font-bold text-lg h-30">Create your new account</h1>
    <p>Create an account to start looking for the food you like </p>

{/* EMAIL */}

<div className='mt-8 space-y-3'><span>Email address</span>
<br/>
<input type="email" placeholder="Enter Email" className='w-80 px-3 py-1 border'>
     </input></div>

{/* user name */}

<div className='mt-8 space-y-3'><span>User Name</span>
<br/>
<input type="text" placeholder="Enter Name" className='w-80 px-3 py-1 border'>
     </input></div>

{/* password*/}

<div className='mt-4 space-y-3'><span>Password</span>
<br/>
<input type="password" placeholder="Password" className='w-80 px-3 py-1 border'>
     </input></div>

    {/*terms*/} 
<div className='flex  mt-4 '>
    <input type="checkbox" >I Agree with Terms of Service and Privacy Policy</input>
</div>
     
{/*Button */}
<div className='mt-4'>
    <button className='bg-orange-500 w-80 h-10 px-3 py-1 flex justify-around rounded-full text-white hover:bg-orange-700 duration-200'>Sign In</button>
</div>
{/*or sign in with */}
<div className='flex justify-around mt-4 '><span className=' cursor pointer'>or sign in with</span></div>
{/*Register */}
<div className='flex justify-around mt-4 '><p className="">Don't have an account?
<Link to='/register'
className=" btn text-orange-500 cursor pointer"
    >
    Register
     </Link> </p></div>
  </div>



</div>
    </div></>
  );
}

export default Register;
import React from 'react'


function Login() {
  return (<>
    <div className=' max-h-screen flex justify-around'>
        <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
    <h1 className="font-bold text-lg h-30">Login to your account</h1>
    <p>Please sign in to your account </p>

{/* EMAIL */}

<div className='mt-8 space-y-3'><span>Email address</span>
<br/>
<input type="email" placeholder="Enter Email" className='w-80 px-3 py-1 border'>
     </input></div>

{/* password*/}

<div className='mt-4 space-y-3'><span>Password</span>
<br/>
<input type="password" placeholder="Password" className='w-80 px-3 py-1 border'>
     </input></div>

    {/*Forgot password*/} 
<div className='flex justify-end mt-4 '><span className='underline  text-orange-500 cursor pointer '>Forgot password?</span></div>
     
{/*Button */}
<div className='mt-4'>
    <button className='bg-orange-500 w-80 h-10 px-3 py-1 flex justify-around rounded-full text-white hover:bg-orange-700 duration-200'>Sign In</button>
</div>
{/*or sign in with */}
<div className='flex justify-around mt-4 '><span className=' cursor pointer'>or sign in with</span></div>
{/*Register */}
<div className='flex justify-around mt-4 '><p className="">Don't have an account?
<a className=" btn text-orange-500 cursor pointer"
      onClick={()=> document.getElementById("my_modal_3").showModal()}>
    Register
     </a>
     </p>
     
     </div>
  </div>
</dialog>
    </div></>
  );
}

export default Login;
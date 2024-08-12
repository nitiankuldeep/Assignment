import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="flexBetween max container px-3 relative py-4">
      <div className="flex-col ">
        <div className="flexCenter">
        <img src='/images/Logo.png'/>
        <h1 className="text-2xl font-bold w-1/2">Training Horizon</h1>
        </div>
        <p className="flexCenter text-xs py-2">Offline batches and Classes</p>
      </div>
      <div className="flex-col py-5">
        <h2 className="text-2xm font-bold">About Us</h2>
        <div className="pt-5">
        <Link href={"/"} className="text-sm text-gray-50">
        Who we are
        </Link>
        </div>
        <div className="pt-5">
        <Link href={"/"} className="text-sm text-gray-50">
        Work with us
        </Link>
        </div>
      </div>
      
      <div className="flex-col py-5">
        <h2 className="text-xm font-bold ">Explore</h2>
        <div className="pt-5">
        <Link href={"/"} className="text-sm text-gray-50">
        Batches and Classes
        </Link>
        </div>
        <div className="pt-5">
        <Link href={"/"} className="text-sm text-gray-50">
        Community
        </Link>
        </div>
      </div>
      
      <div className="flex-col py-5">
        <h2 className="text-xm font-bold">Legal</h2>
        <div className="pt-5">
        <Link href={"/"} className="text-sm text-gray-50">
        Privacy policy
        </Link>
        </div>
        <div className="pt-5">
        <Link href={"/"} className="text-sm text-gray-50">
        Terms & Conditions
        </Link>
        </div>
      </div>
      
      <div className="flex-col py-5">
        <h2 className="text-xm font-bold">Contact</h2>
        <div className="flex pt-5 ">
          <img src="/contact/call.png" />
        <Link href={"/"} className="text-sm text-gray-50">
        +922323092928
        </Link>
        </div>
        <div className="flexBetween pt-5">
        <div className="flexBetween gap-4">
          
        <Link href={"/"} className=" text-gray-50 "><img src="/contact/Frame-1.png"></img></Link>
        <Link href={"/"} className=" text-gray-50 "><img src="/contact/Frame-2.png"></img></Link>
        <Link href={"/"} className=" text-gray-50 "><img src="/contact/Frame-3.png"></img></Link>
        <Link href={"/"} className=" text-gray-50 "><img src="/contact/Frame.png"></img></Link>
        </div>
        </div>
      </div>
    </footer>
    <div className="flex justify-center pb-5">
    <h1 className="text-xs">© 2022 All Rights Reserved</h1>
    </div>
    </>
  )
}

export default Footer
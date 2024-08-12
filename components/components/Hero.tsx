import Link from 'next/link';
import Button from '@/components/components/Button';


const Header = () => {
  return (
    <header className="bg-[#56C1FF] bg-cover bg-bottom bg-no-repeat text-white py-48 text-center p-10"
    style={{ backgroundImage: "url('/images/HeroBg.png')" }}>
    <div className="w-screen flex justify-center items-center">
      <div className=" w-1/2">
      <header className=" py-20 text-center">
        <h1 className="text-4xl bold-64 mb-4 drop-shadow-sm text-white">Get your skills upgraded with us</h1>
        <p className="text-lg mb-8 regular-18 text-white">Transform your productivity and deliver high-quality solutions customers want, and respond to threats and opportunities.</p>
        <div className="flex justify-center ">
        <Button type='button' title='Register to get Exclusive offers' variant='btn_yellow btn_large' fontSize='text-xl font-bold'/>
        </div>
        <p className="pt-4 text-sm text-white">500+  Free and paid courses</p>
      </header>
      </div>
    </div>
    </header>
  );
};

export default Header;
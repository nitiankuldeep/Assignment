import type { NextPage } from 'next';
import Pill from '@/components/components/Pill';
import Button from '@/components/components/Button';

const Review: NextPage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white py-6 bg-no-repeat bg-contain bg-right" style={{backgroundImage: "url('/images/summer_bg.png')"}}>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 ">
          <div className="flex">
            <img src='/images/summer.png'
            className="h-40 w-40"
            />
            <div className="flex-col px-4">
            <h1 className="text-2xl font-bold text-gray-900 pt-5">Summer bummer vacations</h1>
            <p className="text-gray-600 pt-2">Some recent classes and webinar near your location.</p>
            <div className="flex-row justify-center">Hello</div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center ">
            <img src='/images/math.png'
            className="w-32 h-32 rounded-full" />
              <div className="flex-col px-4">
                <Pill icon='/icons/person.png' text = 'Handicapped' color='bg-sky-400' />
              <h2 className="text-xl pt-4 font-bold text-gray-900">Mathematics</h2>
            <p className="mt-2 text-gray-600">Get course completion certificate and prizes for
            7 grade students participate now.</p>
            <button className="mt-4 px-4 py-2 bg-sky-400 text-white rounded">Learn Mathematics with best Teachers</button>
              </div>
            </div>
          </div><div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center ">
            <img src='/images/lab.png'
            className="w-32 h-32 rounded-full" />
              <div className="flex-col px-4">
                <Pill icon='/icons/person.png' text = 'Handicapped' color='bg-sky-400' />
              <h2 className="text-xl pt-4 font-bold text-gray-900">Science</h2>
            <p className="mt-2 text-gray-600">Get course completion certificate and prizes for
            7 grade students participate now.</p>
            <button className="mt-4 px-4 py-2 bg-sky-400 text-white rounded">Learn Science with best Teachers</button>
              </div>
            </div>
          </div>
        </div>
        </div>
      </header>
      <h2 className="text-2xl mt-10 ml-32 font-bold text-gray-900">What our customers say?</h2>
      <div className="flex justify-center">
      <section className="mt-10 mx-20">
          
          <div className="flex my-10  items-center">
            <img src='/images/review-1.png' className="w-36 h-36 z-20" />
          <div className="flex-col justify-center items-center py-20 mt-4 px-20 w-[900px] h-[300px] -ml-16 z-0 bg-white shadow rounded-lg">
            <p className="text-lg italic text-gray-900">"I am proud to say that after a few months of taking this course... I passed my exam and am now an AWS Certified Cloud Practitioner!"</p>
            <p className="mt-2 text-gray-900">- Nia Kyle</p>
          </div>
          </div>
        </section>
      </div>

    </div>
  );
};

export default Review;

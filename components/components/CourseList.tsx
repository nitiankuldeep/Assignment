// pages/index.js
import Card from '@/components/components/Card';
import Link from 'next/link';
import Dropdown from '@/components/components/Dropdown';

export default function Home() {
    const courses = [
        { title: 'Cricket', category: 'Sports', gender: 'Boys and Girls', description: 'Learn the basics of cricket...', imageUrl: '/images/cricket.png', time: '8:00 PM to 9:30 PM' },
        { title: 'Basketball', category: 'Sports', gender: 'Boys Only', description: 'Master the skills of basketball...', imageUrl: '/images/basketball.png', time: '2 hrs' },
        { title: 'Football', category: 'Sports', gender: 'Boys Only', description: 'Kick-start your football career...', imageUrl: '/images/football.png', time: '2hrs'},
        { title: 'Badminton', category: 'Sports', gender: 'Boys and Girls', description: 'Learn to smash the shuttle...', imageUrl: 'images//badminton.png', time: '2hrs' },
        { title: 'Mathematics', category: 'Educational', gender: 'Boys and Girls', description: 'Ace the formulas ',imageUrl: '/images/math.png', time: '8:00pm to 9:30 pm'  },
        { title: 'Science', category: 'Educational', gender: 'Boys Only', description: 'Ace the formulas ',imageUrl: '/images/lab.png', time: '2hrs'  },
        { title: 'History', category: 'Educational', gender: 'Boys Only', description: 'Ace the formulas ',imageUrl: '/images/history.png', time: '2hrs'  },
        { title: 'algebra', category: 'Educational', gender: 'Boys Only', description: 'Ace the formulas ',imageUrl: '/images/math.png', time: '2hrs'  },
      ];

      const sportsCourse = courses.filter(course => course.category == 'Sports')
      const educationalCourse = courses.filter(course => course.category == 'Educational')
      return (
        <>
        <div className="w-full flex container mx-auto py-6">
          <h2 className="text-2xl font-bold mb-4 ">Our Best Courses</h2>
          <div className="gap-4 w-auto flex-grow flex justify-end ">
            <Dropdown label="Select Category" options={['Sports', 'Arts', 'Music']} />
            <Dropdown label="Gender" options={['Boys','Boys and Girls']} />
          </div>
          </div>
          <div className="flex container mx-auto">
              <h1 className=" text-base font-bold">Sports</h1>
              <Link href={'/'}
              className="flexEnd w-full text-sky-400"
               >
              View All
              </Link>
          </div>
          <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {sportsCourse.map((course, index) => (
              <Card key={index} {...course} />
            ))}
          </div>
          <div className="flex container mx-auto">
              <h1 className=" text-base font-bold">Educational</h1>
              <Link href={'/'}
              className="flexEnd w-full text-sky-400"
               >
              View All
              </Link>
          </div>
          <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationalCourse.map((course, index) => (
              <Card key={index} {...course} />
            ))}
          </div>
          <div className="flex container mx-auto">
              <h1 className=" text-base font-bold">Educational</h1>
              <Link href={'/'}
              className="flexEnd w-full text-sky-400"
               >
              View All
              </Link>
          </div>
          <div className="container mx-auto py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {educationalCourse.map((course, index) => (
              <Card key={index} {...course} />
            ))}
          </div>
        </>
      );
}

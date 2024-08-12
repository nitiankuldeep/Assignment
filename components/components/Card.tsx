import Pill from '@/components/components/Pill';

type CardProps = {
    title: string,
    category: string,
    gender: string,
    description: string,
    imageUrl: string,
    time: string
}

const Card = ({ title, category, gender, description, imageUrl, time }: CardProps) => {
  return (
    <div className="flex-col max-w-sm rounded-2xl overflow-hidden shadow-lg bg-sky-400 w-full ">
    <div className=" rounded-b-2xl bg-white px-2">
      <div className="flex px-4 py-2">
      <img
          src={imageUrl}
          alt={title}
          className="h-32 w-20 object-contain"
        />
        <div className="flex w-full justify-end items-start">
        <Pill text= {time} color='bg-sky-400' icon='/icons/clock.png'/>
        </div>
      </div>

      <div className='pt-5'>
      <div className="flex w-full">
        <Pill text = {gender} color='bg-sky-400' icon='/icons/person.png' />
        <div className="flex-grow flexEnd">
        <img src="/icons/Vector.png" alt="fav" />
        </div>
        </div>
        <h3 className="text-xl pt-1 font-semibold">{title} Coaching</h3>
        <p className="text-xs text-gray-500 font-semibold">On Monday & Thursday</p>
        <p className="text-xs text-gray-700 py-3">
          Some description in 2-3 lines it can be about the trainer or about our facility
        </p>
      </div>
      
    </div>
    <div className="flex justify-center items-center py-4">
    <button className=" text-white rounded">
        Play {title} Now
      </button>
      </div>
    </div>
  );
};

export default Card;

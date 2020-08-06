import { FaRegSadTear } from 'react-icons/fa';

const Error = () => (
  <div className='centered'>
    <div className='grid grid-rows-2 justify-center '>
      <div className='flex justify-center'>
        <FaRegSadTear className='h-6 w-6' />
      </div>
      <div className='grid grid-rows-2 justify-center gap-2'>
        <span className='flex justify-center'>Something went wrong.</span>
        <span className='flex justify-center'>Please try again.</span>
      </div>
    </div>
  </div>
);

export default Error;

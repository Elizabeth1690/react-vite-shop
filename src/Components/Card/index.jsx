import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';

const Card = (data) => {
  const context = useContext(ShoppingCartContext);

  return (
    <div className=' mt-7 bg-white cursor-pointer w-75 h-80 rounded-lg p-2 border border-gray-300 shadow-md mb-4 flex flex-col justify-center items-center'>
      <figure className='relative w-full h-3/5'>
        <span className=' mx-auto absolute bottom-0 left-0 bg-indigo-500 rounded-lg text-white text-xs m-2 px-3 py-0.5'>{data.data?.category}</span>
        <img className='mx-auto max-w-full object-cover rounded-lg max-h-full' src={data.data.image} alt={data.data.title} />
        <div className='font-medium absolute top-0 right-0 flex text-white justify-center items-center bg-indigo-600 w-6 h-6  rounded-full m-2 p-1 ' onClick={() => context.setCount(context.count + 1)}>+
        </div>
      </figure>
      <p className='text-sm font-light my-3 text-center'>{data.data.title}</p>
      <p className='text-lg font-medium text-indigo-600 text-left mt-1'>$ {data.data.price}</p>
    </div>
  );
};

export default Card;

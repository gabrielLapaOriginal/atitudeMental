import { useNavigate } from 'react-router-dom';
import { dataWork } from "./dataWork"
export default function Workshops (){

  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return(
    <body className="w-screen h-screen flex justify-center items-center font-iphone">
      <button 
          onClick={goBack} 
          className="absolute top-4 left-4 p-2 bg-gray-300 rounded-full text-white hover:bg-gray-400 focus:outline-none"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
        </button>

        

      <div className="w-[1320px] h-[900px]
      flex justify-center items-center flex-col ">
        {dataWork.map((item, index) =>(
        <div key={index} className=' w-[50%] h-[30%] rounded-2xl flex m-3'>
         <div style={{ backgroundImage: `url(${item.image})`  }} className='rounded-tl-lg rounded-bl-lg h-full min-w-[300] w-[300px] bg-cover bg-center bg-no-repeat'>
         
         </div>
         <div className='w-96 h-full text-center bg-slate-200'>
         <h1 className='p-1 text-lg'>{item.title}</h1>
         <h2 className='p-3 text-base'>{item.description}</h2>
         <p>Data: {item.data}</p>
         <p className='p-4'>Local: {item.link ? (<a href={item.link} className="text-blue-500 text-xs font-semibold "
                  >{item.title}</a>) :item.local }</p>
         
         </div>
        </div>

        ))}

      </div>
    </body>
  )
}
import { images } from '@/dataStore/images';
import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { MdAddCircleOutline, MdOutlineAddTask } from "react-icons/md";


interface Props {
    slides?: ReactNode
}

export const Carousel = ({ slides }: Props) => {

  // const [checked, setChecked] = useState<Boolean | null | number >();
  return (
    <div className='md:grid flex overflow-hidden lg:grid-cols-4 grid-cols-1 gap-4 '
    >
        {images.map((data, index) => { 

          const [checked, setChecked] = useState<Boolean | null | number >();
          return (
            <div key={index}
                    className='w-full h-full rounded-3xl space-y-2'
            >
               <div className='relative'
               >
                  <Image src={data.img} 
                            alt={`image of ${data.title}`}
                            className='h-[355px] rounded relative bg-cover'
                  />

                  {/* displays On Hover */}

                  <div className='absolute flex justify-between w-full bottom-5 bg-black/60 p-5 text-white items-center '
                  >
                    <div className=''
                    >
                        <h3 className='font-bold text-2xl tracking-wide'
                        > {data.title} </h3>
                        <span className='text-white/90 capitalize'
                        >{data.namedAs}</span> <br />
                        <Link href={data.title}
                        >
                          {/* <span className='text-sm'
                          >Site details </span> */}
                        </Link>
                    </div>

                    <div className='transition-all duration-300'
                          onClick={() => setChecked(data.status == 1 ? data.status = 0 : data.status = 1)}
                    >
                      {checked == 1 ? <MdOutlineAddTask size={35}
                                                        className='text-green-600'
                                      /> 
                                : <MdAddCircleOutline size={35}
                                                    
                                  />}
                    </div>
                  </div>
               </div>
               
               <div className='flex  items-center justify-between'
               >
                    <div className=''
                    >
                        {/* <h3 className='text-xl font-bold'
                        > {data.title}</h3> */}
                        <span
                        >most recommended</span>
                    </div>

                    <span
                    > Rating: {4.3}</span>

               </div>
            </div>
        )})}
    </div>
  )
}

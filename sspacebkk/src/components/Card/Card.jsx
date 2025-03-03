import React from 'react'
import ArrowIcon from '../common/ArrowIcon';


const Card = ({imgPath,title,description,actionArrow,height,width}) => {
    return (
        <div className='flex flex-col p-6'>
            <img className='h-[240px] w-[240px] bg-cover bg-center border rounded hover:scale-105 cursor-pointer' src={imgPath} alt='shirt'/>
            <div className='flex justify-between items-center'>
                <div className='flex flex-col'>
                    <p className='text-[16px] p-1'>{title}</p>
                    {description && <p className='text-[12px] px-1 text-gray-600'>{description}</p>}
                </div>
                {actionArrow && <span className='cursor-pointer pr-2 items-center'><ArrowIcon /></span>}
            </div>
        </div>
    );
}
export default Card
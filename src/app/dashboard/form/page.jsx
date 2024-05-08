"use client"
import React from 'react';
import ReactPaginate from 'react-paginate';

const Page = () => {
    const handlePageClick=(data)=>{
        console.log(data.selected)
    }
  return (
    <div>
      <div>
        <ReactPaginate
          previousLabel={"previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={25}
          
          marginPagesDisplayed={2}
          pageRangeDisplayed={2}
          onPageChange={handlePageClick}
          className='flex w-full'
         
          pageLinkClassName='flex items-center justify-center px-3 h-8 ms-0 leading-tight bg-red-500 text-gray-500  border border-e-0 border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          containerClassName='inline-flex -space-x-px text-sm'
          previousClassName='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0  border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
          nextClassName='flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border  border-gray-300  hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
        />
      </div>
    </div>
  )
}

export default Page;

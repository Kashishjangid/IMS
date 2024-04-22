import React from 'react'
const page = () => {
    return (
        <>
            <div className="flex-grow h-screen flex justify-center items-center  bg-black/70">
                <div className=' sm:w-[70%] w-full p-2 sm:p-0 !h-fit    '>
                    <form action="" className='  p-8 rounded    bg-white'>
                        <div className="grid md:grid-cols-2 md:gap-14 mt-4 space-y-6 md:space-y-0 ">
                            <div className="relative inline-block">
                                <span className="absolute -top-3 left-2 bg-white px-1  ">Your Caption</span>
                                <input type="text" className='border outline-none w-full pt-4 border-black p-2 rounded'></input>
                            </div>
                            <div className="relative inline-block">
                                <span className="absolute -top-3 left-2 bg-white px-1  ">Your Caption</span>
                                <input type="text" className='border outline-none w-full pt-4 border-black p-2 rounded'></input>
                            </div>
                            <div className="relative inline-block">
                                <span className="absolute -top-3 left-2 bg-white px-1  ">Your Caption</span>
                                <input type="text" className='border outline-none w-full pt-4 border-black p-2 rounded'></input>
                            </div>
                            <div className="relative inline-block">
                                <span className="absolute -top-3 left-2 bg-white px-1  ">Your Caption</span>
                                <input type="text" className='border outline-none w-full pt-4 border-black p-2 rounded'></input>
                            </div>
                            <div className="relative inline-block">
                                <span className="absolute -top-3 left-2 bg-white px-1  ">Your Caption</span>
                                <input type="text" className='border outline-none w-full pt-4 border-black p-2 rounded'></input>
                            </div>
                            <div className="relative inline-block">
                                <span className="absolute -top-3 left-2 bg-white px-1  ">Your Caption</span>
                                <input type="text" className='border outline-none w-full pt-4 border-black p-2 rounded'></input>
                            </div>





                            <div>
                                <select className='border rounded p-2 outline-none border-black w-full'>
                                    <option value="option1">option1</option>
                                    <option value="option2">option2</option>
                                    <option value="option3">option3</option>
                                    <option value="option1">option4</option>
                                    <option value="option2">option5</option>
                                    <option value="option3">option6</option>
                                </select>
                            </div>
                            <div>
                                <select className='border rounded p-2 outline-none border-black w-full'>
                                    <option value="option1">option1</option>
                                    <option value="option2">option2</option>
                                    <option value="option3">option3</option>
                                    <option value="option1">option4</option>
                                    <option value="option2">option5</option>
                                    <option value="option3">option6</option>
                                </select>
                            </div>





                        </div>
                            <div className='flex *:border *:border-black *:rounded  justify-end gap-4 *:p-2 *:px-5 mt-5'>
                                <button type="submit" className='hover:bg-black bg-white hover:text-white'>Submit</button>
                                <button type="submit" className='hover:bg-black bg-white hover:text-white'>Cancel</button>


                            </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default page;

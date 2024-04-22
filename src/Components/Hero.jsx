"use client"


import img1 from '../../public/images/laptops.jpg'
import img2 from '../../public/images/graphs.jpg'
import img3 from '../../public/images/graphs1.jpg'



import Page from '@/app/dashboard/subcard/page'

const HeroSection = () => {

    const data = [
        {
            img: img1,
            headline: 'Heading1',
            description: "This is description section 1",

        },
        {
            img: img2,
            headline: 'Heading2',
            description: "This is description section 2",

        },
        {
            img: img3,
            headline: 'Heading3',
            description: "This is description section 3",

        },
        {
            img: img1,
            headline: 'Heading4',
            description: "This is description section 4",

        },
        {
            img: img2,
            headline: 'Heading5',
            description: "This is description section 5",

        },
        {
            img: img3,
            headline: 'Heading6',
            description: "This is description section 6",

        }

    ]



    return (
        <>



            <div className=' h-screen max-md:pt-20 max-md:pb-0 overflow-auto w-full  '>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-4 p-2 md:pb-20  ">

                    {data.map((element, index) => (
                        <Page key={index} headline={decodeURIComponent(element.headline)} img={element.img} description={element.description} index={index+1} />
                    ))}


                </div>
                

            </div>


        </>
    );
};

export default HeroSection;




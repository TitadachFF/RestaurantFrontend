import React from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import './Carousel.css'

export default function CarouselCustomArrows() {
  return (
    <div>
    <Carousel
      className=" max-h-[650px] mt-[100px] "
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
  
          
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 !right-4 -translate-y-2/4"
   
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      )}
    >
    <img
        src="https://images.workpointtoday.com/workpointnews/2017/12/02101039/%E0%B8%9B%E0%B8%81-%E0%B9%80%E0%B8%97%E0%B9%88%E0%B8%87-1200x630.jpg"
        alt="image 3"
        className=" w-full object-fill max-h-[650px]"
   
      />


      <img
        src="https://www.sentangsedtee.com/wp-content/uploads/2016/07/1042-140512014535.jpg"
        alt="image 1"
        className=" w-full object-fill max-h-[650px]"
      
        
      />
      <img
        src="https://image.bangkokbiznews.com/uploads/images/md/2022/07/HD7ZyRAxB8O8pRthaQ2q.webp"
        alt="image 2"
        className=" w-full object-fill max-h-[650px] "
   
      />


      









      
    </Carousel>



    </div>




  );
}
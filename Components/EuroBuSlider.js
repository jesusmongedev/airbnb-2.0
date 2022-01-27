import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'

const EuroBuSlider = () => {
  const [sliderImage, setSliderImage] = useState([])
  const [current, setCurrent] = useState(0)
  const sliderImageLength = sliderImage?.length

  const nextSlide = () => {
    setCurrent(current === sliderImageLength - 1 ? 0 : current + 1)
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? sliderImageLength - 1 : current - 1)
  }

  console.log(current)

  useEffect(() => {
    window
      .fetch('/api/rooms')
      .then((res) => res.json())
      .then(({ rooms }) => {
        console.log(rooms)
        setSliderImage(rooms)
      })
  }, [])

  return (
    <div className="relative flex items-center justify-center mb-8">
      <FaArrowAltCircleLeft
        className="slider-arrow left-[15px]"
        onClick={prevSlide}
      />
      <FaArrowAltCircleRight
        className="slider-arrow right-[15px]"
        onClick={nextSlide}
      />
      <span className="absolute  top-[-5px] text-center z-10 font-semibold text-white bg-primary w-full max-w-[1000px] p-1 rounded-t-md">
        Vive la experiencia EuroBuilding
      </span>
      {sliderImage?.map((slide, index) => {
        return (
          <div
            key={index}
            className={
              index === current
                ? 'opacity-1 duration-1000 ease-in-out'
                : 'opacity-0 duration-1000 ease-in-out'
            }
          >
            {index === current && (
              // eslint-disable-next-line @next/next/no-img-element
              <Image
                src={slide?.room_image.url}
                alt={slide?.room_image.alt}
                width={1000}
                height={800}
                // Test with contain
                objectFit="cover"
                className="rounded-md "
              />
            )}
          </div>
        )
      })}
    </div>
  )
}

export default EuroBuSlider

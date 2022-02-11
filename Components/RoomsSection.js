import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const RoomsSection = () => {
  const [rooms, setRooms] = useState([])
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    window
      .fetch('/api/rooms')
      .then((res) => res.json())
      .then(({ rooms }) => {
        setRooms(rooms[current])
      })
  }, [current])
  return (
    <section className="px-4">
      <h2 className="text-sm font-semibold mb-2">HABITACIONES</h2>
      <div>
        {rooms.room_image?.url && (
          <Image
            src={rooms?.room_image.url}
            alt={rooms?.room_image.alt}
            objectFit="cover"
            width={1000}
            height={800}
          />
        )}
        <div className="text-center space-x-2">
          <button
            onClick={() => {
              setCurrent(0)
            }}
            className={`rounded-button ${current === 0 ? 'bg-gray-500' : ''}`}
          ></button>
          <button
            onClick={() => {
              setCurrent(1)
            }}
            className={`rounded-button ${current === 1 ? 'bg-gray-500' : ''}`}
          ></button>
          <button
            onClick={() => {
              setCurrent(2)
            }}
            className={`rounded-button ${current === 2 ? 'bg-gray-500' : ''}`}
          ></button>
          <button
            onClick={() => {
              setCurrent(3)
            }}
            className={`rounded-button ${current === 3 ? 'bg-gray-500' : ''}`}
          ></button>
          <button
            onClick={() => {
              setCurrent(4)
            }}
            className={`rounded-button ${current === 4 ? 'bg-gray-500' : ''}`}
          ></button>
        </div>
        <h3 className="text-sm font-semibold py-1">{rooms?.room_title}</h3>
        <p className="text-xs leading-normal">{rooms?.room_description}</p>
        <button className="euro-button px-10 my-6">Ver más</button>
      </div>
      {/* {rooms?.map((euro, i) => {
          return (
            <div key={i} className="min-w-[288px] max-w-[328px] sliderCards ">
              <Image
                src={euro.room_image.url}
                alt={euro.room_image.alt}
                objectFit="cover"
                width={1000}
                height={800}
              />
              <h3 className="text-sm font-semibold py-1">{euro.room_title}</h3>
              <p className="text-xs leading-normal">{euro.room_description}</p>
              <button className="euro-button px-10 my-6">Ver más</button>
            </div>
          )
        })} */}
    </section>
  )
}

export default RoomsSection
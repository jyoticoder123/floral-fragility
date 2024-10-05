import React from 'react'

const BottomDiv = () => {
  return (
    <div id="bottomDiv" className="mt-[20vw] flex justify-between items-start px-[11vw]">
        <div id="part1" className="w-1/2">

        </div>
        <div id="part2" className="w-[40%]">
          <h1 className="text-[5vw] whitespace-nowrap leading-none">Blue Pottery <br/> Decorative <br /> Vase</h1>
          <div  className="flex justify-between w-full mt-10 items-center">
            <button className="py-8 px-10 rounded-full border-2 text-[1vw] bg-transparent">Add to Cart</button>
            <h2 className="text-5xl">$57</h2>
          </div>
        </div>
      </div>
  )
}

export default BottomDiv
// import { useEffect } from "react"
import Bar from "./Bar"

type props = {
    bars: {
        height: number,
        active: boolean
    }[]
}

const RightCanvas = ({bars}: props) => {
    
  return (
    <>
        <div className="w-3/4 h-screen bg-gray-950 p-10 flex">
            {bars && bars.map((bar, index) => {
                return <Bar key={index} height={bar.height} active={bar.active}/>
            })}
        </div>
    </>
  )
}

export default RightCanvas

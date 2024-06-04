import {SetStateAction, Dispatch } from 'react'

type props = {
    setNumber_of_bars : Dispatch<SetStateAction<number>>
    number_of_bars: number,
    setTime : Dispatch<SetStateAction<number>>
    time: number,
    randomButton: () => void
    bubbleSort: () => void
    selectionSort: () => void
    sorting: boolean
    timetosort: number
}

const LeftCanvas = ({setNumber_of_bars, number_of_bars, randomButton, bubbleSort, time, setTime, selectionSort, sorting, timetosort}: props) => {
  return (
    <>
    <div className="bg-gray-700 p-2 w-1/4 h-screen">
        <div className="text-3xl text-center p-5">Sorting Visualizer</div>
        <div className="p-5 rounded-md bg-gray-800 mb-2">
            <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of bars</label>{number_of_bars}
            <input disabled={sorting} id="default-range" type="range" value={number_of_bars} max={100} min={2} onChange={(e) => setNumber_of_bars(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
            <button disabled={sorting} onClick={() =>  randomButton()} className='text-center p-3 disabled:bg-gray-600 my-2 rounded-md text-2xl bg-black w-full'>Randomize</button>
        </div>
        <div className="p-5 rounded-md bg-gray-800 mb-2">
        <label htmlFor="default-range" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Set Sorting time</label>{time}ms
            <input id="default-range" type="range" value={time} max={300} min={1} onChange={(e) => setTime(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"/>
            <button disabled={sorting} onClick={() =>  bubbleSort()} className='text-center p-3 my-2 disabled:bg-gray-600 rounded-md text-2xl bg-black w-full'>Bubble Sort</button>
            <button disabled={sorting} onClick={() =>  selectionSort()} className='text-center p-3 my-2 disabled:bg-gray-600 rounded-md text-2xl bg-black w-full'>Selection&nbsp;Sort</button>
        </div>
        {timetosort !== 0 && <div className='p-8 rounded-md bg-gray-800 lg:flex'>
          Time&nbsp;To&nbsp;Sort:&nbsp;<p className='text-red-500'>{timetosort/1000}</p>&nbsp;Seconds
        </div>}
    </div>
    </>
  )
}

export default LeftCanvas
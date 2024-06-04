"use client";
import { useEffect, useState } from "react";
import LeftCanvas from "./components/LeftCanvas";
import RightCanvas from "./components/RightCanvas";

export default function Home() {
  const [number_of_bars, setNumber_of_bars] = useState(50);
  const [time, setTime] = useState(10);
  const [sampleArray, setSampleArray] = useState<
    { height: number; active: boolean }[]
  >([
    {
      height: 0,
      active: false,
    },
  ]);
  const [Sorting, setSorting] = useState(false)
  const [timetosort, setTimetosort] = useState(0)


  useEffect(() => {
    let newArray = Array.from({ length: number_of_bars }, (_, index) => ({
      height: Math.round(((index + 1) / number_of_bars) * 100),
      active: false,
    }));
    setSampleArray(newArray);
  }, [number_of_bars]);

  const randomButton = () => {
    setSampleArray((s) => (s.length > 1 ? randomizeArray([...s]) : s));
  };

  
  function randomizeArray(
    array: { height: number; active: boolean }[]
  ): { height: number; active: boolean }[] {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }


  function bubbleSortByHeight() {
    let arr = [...sampleArray];
    const date1 = Date.now()
    setTimetosort(0)

    const n = arr.length;
    let i = 0;
    let j = 0;

    const sortStep = () => {
      arr.forEach((bar) => (bar.active = false));
      if (i < n - 1) {
        setSorting(s => s == false ? true : true)
        if (j < n - i - 1) {
          arr[j].active = true;
          arr[j + 1].active = true;

          if (arr[j].height > arr[j + 1].height) {
            const temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
            setSampleArray([...arr]);
          }

          j++;
          setTimeout(sortStep, time);
        } else {
          arr[i].active = true;
          i++;
          j = 0;
          setTimeout(sortStep, time);
        }
      }
      else{
        setTimetosort(Date.now() - date1)
        setSorting(s => s == true ? false : false)
      }
    };
    sortStep();
  }

  function selectionSortByHeight() {
    const date1 = Date.now()
    setTimetosort(0)
    let arr = [...sampleArray];

    const n = arr.length;
    let i = 0;
    let j = i + 1;

    const sortStep = () => {
      arr.forEach((bar) => (bar.active = false));

      if (i < n - 1) {
        let minIndex = i;
        setSorting(s => s == false ? true : true)

        if (j < n) {
          arr[i].active = true;
          arr[j].active = true;

          if (arr[j].height < arr[minIndex].height) {
            const temp = arr[j];
            arr[j] = arr[minIndex];
            arr[minIndex] = temp;
          }
          
          setSampleArray([...arr]);
          j++;
          setTimeout(sortStep, time);
        } else {          
          i++;
          j = i + 1;
          setTimeout(sortStep, time);
        }
      }
      else{
        setTimetosort(Date.now() - date1)
        setSorting(s => s == true ? false : false)
      }
    };

    sortStep();
  }
  
  return (
    <>
      <div className="flex w-full h-full">
        <LeftCanvas
          timetosort={timetosort}
          sorting={Sorting}
          time={time}
          setTime={setTime}
          bubbleSort={bubbleSortByHeight}
          selectionSort={selectionSortByHeight}
          randomButton={randomButton}
          number_of_bars={number_of_bars}
          setNumber_of_bars={setNumber_of_bars}
        />
        <RightCanvas bars={sampleArray} />
      </div>
    </>
  );
}
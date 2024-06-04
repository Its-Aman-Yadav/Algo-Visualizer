type props = {
  height: number,
  active: boolean
}

const Bar = ({height, active}: props) => {
return (
  <div style={{height: `${height}%`}} className={`w-full mx-0.5 mt-auto rounded-sm ${active ? "bg-green-500" : "bg-gray-500"}`}>
  </div>
)
}

export default Bar

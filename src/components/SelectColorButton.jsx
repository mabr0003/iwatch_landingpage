const SelectColor = ({ color, bgColor, setSelectedColor }) => {
  return <button onClick={() => setSelectedColor(color)} className={`w-7 h-7 rounded-full border-2 ${bgColor}`}></button>;
};

export default SelectColor;
 
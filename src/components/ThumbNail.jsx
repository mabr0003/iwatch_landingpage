import Image from "next/image";
const ThumbNail = ({ bgColor, setSelectedColor, src }) => {
  return (
    <button onClick={() => setSelectedColor(src)}>
      <div className={`relative ${bgColor} w-32 h-20 rounded-md flex items-start justify-center`}>
        <Image src={src} alt="Mint colored iWatch" width={100} className="-top-8 relative" />
      </div>
    </button>
  );
};

export default ThumbNail;

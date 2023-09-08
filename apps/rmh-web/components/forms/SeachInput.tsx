import Image from "next/image";
import searchImg from "../../assets/icons/search.png";
function SeachInput() {
  return (
    <div className="flex border border-gray-400 rounded-md  px-2 mx-2 my-4 items-center">
      <Image
        src={searchImg}
        alt="Search Logo"
        width={17}
        className="h-4 mr-5"
      />
      <input
        type="search"
        placeholder="Search Client"
        className="border-0 h-full p-2"
      />
    </div>
  );
}

export default SeachInput;

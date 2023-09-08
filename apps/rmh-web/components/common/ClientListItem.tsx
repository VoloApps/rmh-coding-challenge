import Image from "next/image";import Avatar from "./Avatar";
import msgImg from "assets/icons/msg.png";

type ClientListProps = {
  name: string;
  activePatient?: string;
  setActivePatient: (name: string) => void;
};

function ClientListItem({
  name,
  activePatient,
  setActivePatient,
}: ClientListProps) {
  return (
    <div
      className={`flex justify-around p-3 items-center cursor-pointer
          ${activePatient === name ? "bg-slate-200 font-semibold" : ""}`}
      onClick={() => setActivePatient(name)}
    >
      <div className="mr-auto flex flex-row items-center">
        <Avatar />
        <p className="ml-4 text-gray-700 text-sm">{name}</p>
      </div>

      <Image src={msgImg} alt="message" className="w-4 h-4 ml-auto mr-2" />
    </div>
  );
}

export default ClientListItem;

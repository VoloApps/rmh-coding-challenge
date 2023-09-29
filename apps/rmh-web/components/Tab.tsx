import clsx from "clsx";

const Tab = ({
  isActive,
  text,
  setActive,
}: {
  isActive: boolean;
  text: string;
  setActive: () => void;
}) => {
  const color = isActive
    ? "border-[#2B478B] text-[#2B478B]"
    : "border-[#C3C6CC] text-[343741] transition-opacity hover:opacity-50";
  const baseClass = "cursor-pointer border-b-[2px] font-bold text-[16px] pb-2";
  const className = clsx(baseClass, color);

  return (
    <div onClick={setActive} className={className}>
      {text}
    </div>
  );
};

export default Tab;

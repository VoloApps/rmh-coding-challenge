"use client";

type FilterToggleProps = {
  onChange: (isToday: boolean) => void;
  isToday: boolean;
};

export const FilterToggle: React.FC<FilterToggleProps> = ({
  onChange,
  isToday,
}) => {
  return (
    <div className="flex flex-[0_0_45px] border-b-[1px] border-b-borderGray">
      <button
        className={`flex-1 h-11 font-bold leading-[18px] text-base px-4 pt-2 ${
          isToday ? "text-selected border-b-2 border-b-selected" : "text-black"
        }`}
        onClick={() => onChange(true)}
      >
        {"Today's"}
      </button>
      <button
        className={`flex-1 h-11 font-bold leading-[18px] text-base px-4 pt-2 ${
          !isToday ? "text-selected border-b-2 border-b-selected" : "text-black"
        }`}
        onClick={() => onChange(false)}
      >
        {"All"}
      </button>
    </div>
  );
};

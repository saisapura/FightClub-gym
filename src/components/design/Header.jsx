import { fighters } from "../../assets";

export const HamburgerMenu = () => {
  return (
    <div className="absolute inset-0 pointer-events-none lg:hidden">
      <div className="absolute inset-0 opacity-[.2]">
        <img
          className="w-full h-full object-cover"
          src={fighters}
          width={788}
          height={953}
          alt="Background"
        />
      </div>
       
      
    </div>
  );
};

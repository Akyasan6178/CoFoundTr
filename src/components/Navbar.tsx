export default function Navbar() {
  return (
    <nav className="w-full max-w-7xl mx-auto px-6 py-8 flex flex-col justify-center sm:justify-start items-center sm:items-start relative z-10">
      <div className="flex flex-col items-center sm:items-start select-none cursor-default">
        <div className="text-[34px] sm:text-[42px] leading-[0.7] font-display font-black tracking-tighter text-white sm:ml-[3px] z-10">
          CO
        </div>
        <div className="text-[40px] sm:text-[48px] leading-[0.8] font-display font-extrabold tracking-tighter text-white">
          Found<span className="text-[#E60000]">TR</span>
        </div>
      </div>
    </nav>
  );
}

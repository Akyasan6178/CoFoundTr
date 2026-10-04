/** Kompakt CO / FoundTR logosu; Navbar ve Footer'da ortak. Sayfanın en üstüne götürür. */
export default function Logo() {
  return (
    <a
      href="#"
      aria-label="CoFoundTR ana sayfa"
      className="flex flex-col items-start select-none rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-500"
    >
      <span className="text-[15px] sm:text-[18px] leading-[0.8] font-display font-black tracking-tighter text-white ml-px">
        CO
      </span>
      <span className="text-[19px] sm:text-[24px] leading-[0.9] font-display font-extrabold tracking-tighter text-white">
        Found<span className="text-[#E60000]">TR</span>
      </span>
    </a>
  );
}

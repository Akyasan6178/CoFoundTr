import { User } from "lucide-react";

const DIMENSIONS = ["Uyum", "Çalışma tarzı", "Niyet"];
const ROLES = ["Sen", "Seni tamamlayan kişi"] as const;

/**
 * "İki taraf da uyum, çalışma tarzı ve niyet üzerine üç soruyu yanıtlar."
 * cümlesinin diyagramı: iki rol, aynı üç boyut, boyutları birleştiren çizgiler.
 * Veri, isim, skor yok. Yanındaki metni tekrar ettiği için ekran okuyuculardan gizli.
 */
export default function MatchDiagram() {
  return (
    <div aria-hidden="true" className="select-none">
      {/* sm+: iki kart yan yana, aynı satırlar yatay çizgilerle bağlı */}
      <div className="hidden sm:grid grid-cols-[minmax(0,1fr)_2.5rem_minmax(0,1fr)] grid-rows-[auto_repeat(3,2.75rem)_0.75rem] items-center">
        <div className="col-start-1 row-start-1 row-span-5 self-stretch rounded-xl border border-line bg-surface shadow-card" />
        <div className="col-start-3 row-start-1 row-span-5 self-stretch rounded-xl border border-line bg-surface shadow-card" />

        <RoleHeader role={ROLES[0]} className="col-start-1 row-start-1" />
        <RoleHeader role={ROLES[1]} className="col-start-3 row-start-1" />

        {DIMENSIONS.map((dimension, i) => (
          <Row key={dimension} index={i} label={dimension} />
        ))}
      </div>

      {/* Mobil: kartlar üst üste, aynı boyutlar dikey çizgilerle bağlı */}
      <div className="sm:hidden">
        <MobileCard role={ROLES[0]} dots="bottom" />
        <div className="grid grid-cols-3 h-8">
          {DIMENSIONS.map((dimension) => (
            <span key={dimension} className="justify-self-center w-px h-full bg-accent/40" />
          ))}
        </div>
        <MobileCard role={ROLES[1]} dots="top" />
      </div>
    </div>
  );
}

function RoleHeader({ role, className }: { role: string; className: string }) {
  return (
    // Simge üstte: dar kartta rol adı tüm genişliği kullanır (en fazla iki satır).
    <div className={`${className} self-start flex flex-col items-start gap-2 px-4 pt-4 pb-2 min-w-0`}>
      <span className="shrink-0 w-6 h-6 rounded-full border border-line bg-surface-raised flex items-center justify-center text-fg-muted">
        <User className="w-3.5 h-3.5" />
      </span>
      <span className="text-sm font-display font-semibold text-fg-strong leading-tight">{role}</span>
    </div>
  );
}

// Satır başlangıcı: 2. satırdan itibaren (1. satır rol başlıkları). Sınıflar Tailwind için tam yazılı.
const ROW_START = ["row-start-2", "row-start-3", "row-start-4"];

function Row({ index, label }: { index: number; label: string }) {
  const row = ROW_START[index];
  return (
    <>
      <div className={`col-start-1 ${row} relative flex items-center h-full px-4 min-w-0`}>
        <span className="text-sm text-fg-secondary truncate">{label}</span>
        <Dot className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2" />
      </div>
      <span className={`col-start-2 ${row} h-px bg-accent/40`} />
      <div className={`col-start-3 ${row} relative flex items-center h-full px-4 min-w-0`}>
        <Dot className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2" />
        <span className="text-sm text-fg-secondary truncate">{label}</span>
      </div>
    </>
  );
}

function MobileCard({ role, dots }: { role: string; dots: "top" | "bottom" }) {
  return (
    <div className="relative rounded-xl border border-line bg-surface shadow-card py-3">
      <div className="flex items-center gap-2 px-3 mb-3">
        <span className="shrink-0 w-6 h-6 rounded-full border border-line bg-surface-raised flex items-center justify-center text-fg-muted">
          <User className="w-3.5 h-3.5" />
        </span>
        <span className="text-sm font-display font-semibold text-fg-strong">{role}</span>
      </div>
      {/* Etiketler ve noktalar aynı üç sütunda: bağlantı çizgileriyle hizalı */}
      <div className="grid grid-cols-3 text-center text-xs text-fg-secondary leading-tight">
        {DIMENSIONS.map((dimension) => (
          <span key={dimension} className="px-1">
            {dimension}
          </span>
        ))}
      </div>
      <div className={`absolute inset-x-0 ${dots === "bottom" ? "bottom-0 translate-y-1/2" : "top-0 -translate-y-1/2"} grid grid-cols-3`}>
        {DIMENSIONS.map((dimension) => (
          <Dot key={dimension} className="justify-self-center" />
        ))}
      </div>
    </div>
  );
}

function Dot({ className }: { className: string }) {
  return <span className={`${className} block w-2.5 h-2.5 rounded-full bg-accent`} />;
}

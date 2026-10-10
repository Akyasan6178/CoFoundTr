import { useEffect, useEffectEvent, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { TALLY_FORM_TITLE } from "../config/site.ts";

type TallyModalProps = {
  /** Açılacak form adresi (source parametresiyle); null ise modal kapalı. */
  src: string | null;
  onClose: () => void;
};

/**
 * Başvuru formu "kâğıt" olarak: perdenin üstünde beyaz bir sayfa (Tally formu açık temalı).
 * Masaüstünde ortalı ve yuvarlak köşeli, mobilde tam ekran.
 */
export default function TallyModal({ src, onClose }: TallyModalProps) {
  const isOpen = src !== null;
  const closeRef = useRef<HTMLButtonElement>(null);
  const close = useEffectEvent(() => onClose());

  // Açılınca odak kapat butonuna, kapanınca formu açan öğeye döner; Escape kapatır.
  useEffect(() => {
    if (!isOpen) return;
    const opener = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    closeRef.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      opener?.focus({ preventScroll: true });
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          key="backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-stretch justify-center bg-backdrop sm:items-center sm:p-6 md:p-10"
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={TALLY_FORM_TITLE}
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            onClick={(event) => event.stopPropagation()}
            className="relative flex flex-col w-full h-full overflow-hidden bg-sheet shadow-sheet sm:max-w-2xl sm:h-[min(100%,56rem)] sm:rounded-2xl"
          >
            <div className="h-14 shrink-0 flex items-center justify-end px-3">
              <button
                ref={closeRef}
                type="button"
                onClick={onClose}
                aria-label="Formu kapat"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-sheet-control text-on-sheet hover:bg-sheet-control-hover hover:text-on-sheet-strong transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-on-sheet"
              >
                <X aria-hidden="true" className="w-5 h-5" />
              </button>
            </div>
            <div className="flex-1 overflow-y-auto pb-10">
              <iframe
                src={src}
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title={TALLY_FORM_TITLE}
                // Tally sayfası color-scheme bildirmiyor; sayfanın koyu şemasıyla eşleşmezse
                // tarayıcı iframe'e opak zemin boyar. "normal" ile form, kâğıdın beyazı üstünde şeffaf kalır.
                style={{ colorScheme: "normal" }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

import { AnimatePresence, motion } from "motion/react";
import { X } from "lucide-react";
import { TALLY_FORM_TITLE } from "../config/site.ts";

type TallyModalProps = {
  /** Açılacak form adresi (source parametresiyle); null ise modal kapalı. */
  src: string | null;
  onClose: () => void;
};

export default function TallyModal({ src, onClose }: TallyModalProps) {
  return (
    <AnimatePresence>
      {src && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#09090B]">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-full h-full relative overflow-hidden flex flex-col"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Formu kapat"
              className="absolute top-6 right-6 z-10 w-12 h-12 flex items-center justify-center rounded-full bg-zinc-800/50 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors shadow-sm"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="w-full h-full pt-20 overflow-y-auto pb-10">
              <iframe
                src={src}
                width="100%"
                height="100%"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title={TALLY_FORM_TITLE}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

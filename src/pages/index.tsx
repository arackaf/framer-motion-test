import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

const WIDTH = "368px";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className={`flex flex-col p-24 gap-3`}>
      <div>Hello</div>
      <button onClick={() => setOpen((val) => !val)} className="border p-2 self-start">
        Toggle
      </button>
      <AnimatePresence
        onExitComplete={() => {
          console.log("EXIT");
        }}
      >
        {open ? (
          <motion.div
            initial={{
              width: 0,
            }}
            animate={{
              width: WIDTH,
            }}
            exit={{
              width: 0,
            }}
            transition={{ type: "spring", damping: 10, mass: 0.25, stiffness: 100 /*restSpeed: 100, restDelta: 75*/ }}
            className="w-[0] h-[700px] bg-red-500"
          ></motion.div>
        ) : null}
      </AnimatePresence>
    </main>
  );
}

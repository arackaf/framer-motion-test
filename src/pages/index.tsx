import { motion } from "framer-motion";
import { useState } from "react";

const WIDTH = "500px";

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <main className={`flex flex-col p-24 gap-3`}>
      <div>Hello</div>
      <button onClick={() => setOpen((val) => !val)} className="border p-2 self-start">
        Toggle
      </button>
      <motion.div
        animate={{
          width: open ? WIDTH : 0,
        }}
        transition={{ type: "spring", damping: 10, mass: 1, stiffness: 100 }}
        className="w-[0] h-[700px] bg-red-500"
      ></motion.div>
    </main>
  );
}

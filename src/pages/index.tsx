import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className={`flex flex-col p-24 gap-3`}>
      <div>Hello</div>
      <button className="border p-2 self-start">Toggle</button>
      <div className="w-[500px] h-[700px] bg-red-500"></div>
    </main>
  );
}

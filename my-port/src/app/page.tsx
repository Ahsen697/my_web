import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-purple-300">
     <h1 className="text-pink-600 font-extrabold text-5xl">Hello, I am Nida Rizwan</h1>
     <Image
     src="/avt.png"
     alt="girl pic"
     width={450}
     height={450}
     />
     <p className="text-pink-600 font-bold text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti qui temporibus ut laborum in enim dolores deserunt voluptate, consectetur quod ipsum ullam voluptatem consequuntur minima at fugiat eligendi quaerat ratione!</p>
    </div>
  );
}

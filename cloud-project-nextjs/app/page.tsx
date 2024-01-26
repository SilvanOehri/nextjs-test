import Link from "next/link";

export default async function Home() {

  return (
    <main className="h-screen w-screen flex items-center justify-center m-10">
      <div>
        <h1 className="text-9xl text-blue-500 font-bold">Todo - App</h1>
        <Link href="/todo" className="text-6xl justify-end flex mt-8" >Go to todos</Link>
      </div>
    </main>
  );
  }

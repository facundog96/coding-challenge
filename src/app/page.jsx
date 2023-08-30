import Link from "next/link";

export default function Home() {
  return (
    <main className="m-auto max-w-screen-md p-4">
      <ul className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(140px,1fr))]">
        <li className="bg-slate-800 text-xl p-4 text-white w-32 h-64 flex items-center justify-center">
          <Link href="/movies">Movies</Link>
        </li>
        <li className="bg-slate-800 text-xl p-4 text-white w-32 h-64 flex items-center justify-center">
          <Link href="/series">Series</Link>
        </li>
      </ul>
    </main>
  );
}

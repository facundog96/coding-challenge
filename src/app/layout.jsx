import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Coding Challenge",
  description: "A coding challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="grid min-h-screen grid-rows-[60px,1fr,120px]">
        <header className=" py-4 bg-blue-400">
          <div className="flex items-center justify-between px-4 max-w-screen-md m-auto">
            <h1 className="text-2xl font-semibold">
              <Link href="/">DEMO Streaming</Link>
            </h1>
            <nav>
              <span className="p-2">Log in</span>
              <button
                type="button"
                className="bg-slate-800 text-white py-2 px-4"
              >
                Start your free trial
              </button>
            </nav>
          </div>
        </header>
        <main className="px-4 max-w-screen-md m-auto">{children}</main>
        <footer className="py-4 bg-slate-800 text-white">
          <div className="flex items-center justify-between px-4 max-w-screen-md m-auto">
            Home | Terms and Conditions | Privacy Policy | Collection Statement
            | Help | Manage Account
          </div>
        </footer>
      </body>
    </html>
  );
}

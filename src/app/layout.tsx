import "./globals.css";
import {Inter} from "next/font/google";

const inter = Inter({subsets: ["latin"]});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning className={inter.className}>
        <main className="h-screen flex items-center justify-center bg-emerald-100 px-4">
          <div className="m-auto max-w-screen-sm flex-1 max-h-96">
            <div className="h-full w-full max-w-lg md:max-w-none mx-auto rounded-3xl bg-white p-6 shadow-lg">
              {children}
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}

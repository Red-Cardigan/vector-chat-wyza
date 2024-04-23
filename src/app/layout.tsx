import "./globals.css";
import { Inter } from "next/font/google";
import { ClerkProvider, UserButton } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="flex flex-col space-y-4 w-full">
            <header className="containerbg-white w-full">
              <div className="h-16 border-b border-b-slate-200 py-4 flex justify-between items-center">
                <nav className="ml-4 pl-6">
                  <a href="#" className="hover:text-slate-600 cursor-pointer">
                    Home
                  </a>
                </nav>
                <div className='mr-4'>
                  <UserButton />
                </div>
              </div>
            </header>
            <div>
              <main className="flex w-full flex-1 flex-col overflow-hidden">
                {children}
              </main>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import { NavBar, Footer } from "@/components/common";
import Provider from "@/redux/provider";
import { Setup } from "@/components/utils";
import { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ weight: "500", preload: false });

export const metadata = {
  title: "JunkFree",
  description: "A Web and Mobile JunkFree",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* Provider para sa redux */}
        <Provider>
          <Setup />
          <NavBar />
          <Suspense fallback={<div>Loading...</div>}>
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8">
              {children}
            </div>
          </Suspense>
          {/* <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-8">
            {children}
          </div> */}

          <Footer />
        </Provider>
      </body>
    </html>
  );
}

import type { Metadata } from "next";
import { Poppins } from '@next/font/google';
import "./globals.css";
import Navbar from "@/components/navbar";
import { SlideDown, SlideUp } from "@/components/slide";
import Footer from "@/components/footer";
import AsideContactMe from "@/components/aside";
import { Divider } from "antd";
import { Provider } from "@/components/darkTheme";
import { keywords } from "@/utils/data";

export const metadata: Metadata = {
  title: {
    template: "%s | mocoder",
    default: "Home | mocoder",
  },
  description: "A personal website for resume, curriculum vitae",
  publisher: "Mohammed Nour",
  authors: [{ name: "Mohammed Nour" }],
  keywords: keywords,
};

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '800'], // Define which weights to use
});
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`flex flex-col h-screen relative dark:bg-black ${poppins.className}`}>
        <Provider>
          <div className="flex-1 relative">
            <SlideDown>
              <Navbar />
              <Divider className="m-0  dark:border-gray-50 border-gray-200" />
            </SlideDown>
            <AsideContactMe />
            {children}
            <Divider className="m-0" />
          </div>
          <SlideUp>
            <Footer />
          </SlideUp>
        </Provider>
      </body>
    </html>
  );
}

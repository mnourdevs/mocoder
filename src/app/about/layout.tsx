import { SlideRight } from "@/components/slide";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Me",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SlideRight>{children}</SlideRight>;
}

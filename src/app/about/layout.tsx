import { SlideRight } from "@/components/slide"

export const metadata = {
  title: "About Me",
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <SlideRight>
      { children }
    </SlideRight>
  )
}
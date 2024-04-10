import { SlideRight } from "@/components/slide"

export const metadata = {
  title: "Contact Me",
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
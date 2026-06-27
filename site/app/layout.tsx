import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Haus of Bossy Claws | Glen Burnie",
  description: "Luxury nail lounge, private beauty services, retail, and considered care."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en"><body>{children}</body></html>;
}

import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import UpDown from "@/components/upDown";
const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", 
  weight: [ "600", "700", "800"],
});

export const metadata = {
  title: "Ay Construction",
  description: "Created a Project AY Construction",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.className} antialiased`}>
        <Header />
        {children}
        <UpDown />
        <Footer />
      </body>
    </html>
  );
}

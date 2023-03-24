import Navbar from "@/components/Navbar";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Avira Shop",
  description:
    "Avira Shop merupakan toko online fashion yang menawarkan berbagai macam pakaian, aksesori, dan produk fashion berkualitas tinggi. Temukan gaya Anda dengan koleksi terbaru kami, mulai dari busana kasual hingga pakaian formal. Dapatkan produk fashion terbaik dengan harga terjangkau hanya di Avira Shop.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}

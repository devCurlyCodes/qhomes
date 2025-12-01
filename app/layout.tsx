import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/Header/HeaderComponent";
import FooterContainer from "@/components/Footer/FooterContainer";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <style>
          {`
            html {
              scroll-behavior: smooth;
            }
          `}
        </style>
      </head>
      <body className={`${inter.variable} ${poppins.variable} antialiased   `}>
        <HeaderComponent />
        <div className="mainBody flex-grow">
          {children ?? <p>Something went wrong, please try again.</p>}
        </div>
        <FooterContainer />
      </body>
    </html>
  );
}

import { Encode_Sans_Semi_Expanded } from "next/font/google";



const inter = Encode_Sans_Semi_Expanded({ subsets: ["latin"],
  weight: ["400", "700"] });

export const metadata = {

  
  title: "joseRobles",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>

     <link rel="shortcut icon" href="/logo.svg" />
     </head>
      <body className={inter.className}>
     
        {children}

        </body>
    </html>
  );
}

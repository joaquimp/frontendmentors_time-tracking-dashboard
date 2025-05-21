import { Rubik } from "next/font/google";
import "./globals.css";

const rubikSans = Rubik({
  variable: "--font-rubik-sans",
  subsets: ["latin"],
});

export const metadata = {
  title: "Frontend Mentor | Time tracking dashboard",
  description: "Projeto de exemplo para os alunos",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${rubikSans.variable} content`}>
        {children}
      </body>
    </html>
  );
}

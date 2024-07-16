import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import style from "./page.module.css";
import Link from "next/link";
import Social from "./social/page";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fernand Mesange",
  description: "Portfolio of Fernand Mesange ( Web and mobile developer)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header>
          <nav >
            <ul className={style.navbar_list}>
              <li>
                <Link className={style.link} href="/">Home</Link>
              </li>
              <li>
                <Link className={style.link} href="/about">About</Link>
              </li>
              <li>
                <Link className={style.link} href="/experience">Experience</Link>
              </li>
              <li>
                <Link className={style.link} href="/projects">Project</Link>
              </li>
            </ul>
          </nav>
        </header>
        <main>
          {children}
        </main>
        <footer className={style.footer}>
          <p>© 2024 Fernand Mesange</p>
          <p>guyfernandmesangee@gmail.com</p>
          <Social/>
        </footer>
        </body>
    </html>
  );
}

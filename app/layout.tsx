import { Inter, Bricolage_Grotesque } from "next/font/google";
const inter = Bricolage_Grotesque({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}

import {
  Inter,
  Bricolage_Grotesque,
  Darker_Grotesque,
  Space_Grotesk,
} from "next/font/google";
const inter = Space_Grotesk({ subsets: ["latin"] });

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

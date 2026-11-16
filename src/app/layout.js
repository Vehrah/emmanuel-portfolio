import "./globals.css";

export const metadata = {
  title: "Emmanuel Udeagha | Business & Product",
  description:
    "The professional portfolio of Orji Emmanuel Udeagha, exploring product management, business strategy and technology-driven solutions.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
import "./globals.css";



export const metadata = {
  title: "Zoom Parallax Effect",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` antialiased bg-[#181818]`}
      >
        {children}
      </body>
    </html>
  );
}

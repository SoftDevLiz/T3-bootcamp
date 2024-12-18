import "@/styles/globals.css";

interface Metadata {
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "T3 App",
  description: "Learning about dynamic routing",
};

interface Children {
  children: React.ReactNode;
}

const RootLayout: React.FC<Children> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  )
}

export default RootLayout;
import './globals.css';

export const metadata = {
  title: 'The BluePrint Series',
  description: 'Inspiring conversations with creative leaders',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

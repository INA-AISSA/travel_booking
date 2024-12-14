// app/layout.js

import './globals.css';  // Make sure the CSS is imported here

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

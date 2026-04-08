import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Design Supporter | AI Design Coach',
    description: 'Step-by-step design assistance for beginners',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="antialiased overflow-hidden">
                {children}
            </body>
        </html>
    );
}

import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
    title: '404 - Page Not Found | ZeeQue Preschool',
    description: 'The page you are looking for does not exist. Return to ZeeQue Preschool Admissions 2026-27.',
    robots: { index: false },
    openGraph: {
        title: '404 - Page Not Found | ZeeQue Preschool',
        description: 'The requested page could not be found.',
    },
    twitter: {
        card: 'summary',
        title: '404 - Page Not Found | ZeeQue Preschool',
        description: 'The requested page could not be found.',
    },
};

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-luxury-cream dark:bg-luxury-navy text-luxury-charcoal dark:text-luxury-cream p-8 text-center">
            <h1 className="text-8xl md:text-9xl font-heading font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">404</h1>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Oops! Page Not Found</h2>
            <p className="text-xl mb-10 max-w-md font-body text-luxury-charcoal/70 dark:text-luxury-cream/70">
                It seems you&apos;ve taken a wrong turn. The page you are looking for doesn&apos;t exist or has been moved.
            </p>
            <Link
                href="/"
                className="px-8 py-4 bg-gradient-primary text-white rounded-full font-semibold hover:scale-105 transition-all shadow-[0_0_20px_rgba(221,81,149,0.3)]"
            >
                Return to Home
            </Link>
        </div>
    );
}

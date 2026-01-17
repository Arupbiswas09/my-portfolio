import React from 'react';

export const Footer = () => {
    return (
        <footer className="py-8 bg-slate-950 border-t border-slate-900 text-center text-slate-500 text-sm">
            <div className="container mx-auto px-6">
                <p>© {new Date().getFullYear()} Arup Biswas. All rights reserved.</p>
                <p className="mt-2">Built with React, Vite, Tailwind CSS & Framer Motion.</p>
            </div>
        </footer>
    );
};

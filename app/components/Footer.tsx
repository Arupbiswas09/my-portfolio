export function Footer() {
    return (
        <footer className="py-12 border-t border-border bg-muted/30">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                <p className="text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Arup Biswas. Built with Next.js, TypeScript, Tailwind CSS & Framer Motion.
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                    Designed & developed with attention to detail
                </p>
            </div>
        </footer>
    )
}

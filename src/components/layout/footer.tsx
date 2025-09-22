import Link from 'next/link';
import { Mail, Phone, Linkedin, Facebook } from 'lucide-react';

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'Programs', href: '#programs' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
];

const Logo = () => (
    <Link href="/" className="font-headline text-2xl font-bold text-primary">
        Aynthram
    </Link>
);

export default function Footer() {
  return (
    <footer className="bg-muted/30">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
            <div className="space-y-4">
                <Logo />
                <p className="text-muted-foreground text-sm max-w-xs">
                    Crafting Leaders. Cultivating Legacies. Immersive, art-led leadership programs rooted in Odisha’s heritage.
                </p>
            </div>
            <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
                <div>
                    <h3 className="font-semibold text-primary mb-4">Sitemap</h3>
                    <nav className="flex flex-col gap-2">
                        {navItems.map((item) => (
                            <Link key={item.name} href={item.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                            {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div>
                    <h3 className="font-semibold text-primary mb-4">Contact Us</h3>
                    <div className="flex flex-col gap-2 text-sm">
                         <a href="mailto:vasudev.aynthram@gmail.com" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <Mail className="w-4 h-4"/>
                            <span>Email Us</span>
                        </a>
                        <a href="tel:+919703831819" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                            <Phone className="w-4 h-4"/>
                            <span>Call Us</span>
                        </a>
                    </div>
                </div>
                 <div>
                    <h3 className="font-semibold text-primary mb-4">Follow Us</h3>
                    <div className="flex items-center gap-4">
                        <a href="#" aria-label="LinkedIn" className="text-muted-foreground hover:text-primary"><Linkedin className="w-5 h-5"/></a>
                        <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary"><Facebook className="w-5 h-5"/></a>
                    </div>
                </div>
            </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Aynthram Leadership Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

import { MainNav } from "@/components/molecules/main-nav";
import { ModeToggle } from "@/components/molecules/mode-toggle";
import { SiteFooter } from "@/components/molecules/site-footer";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-50 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav />
          <nav className="flex items-center gap-5">
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

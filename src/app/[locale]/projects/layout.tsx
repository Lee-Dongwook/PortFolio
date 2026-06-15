import { MainNav } from "@/widgets/navigation";
import { ModeToggle } from "@/shared/ui/mode-toggle";
import { SiteFooter } from "@/widgets/footer";
import { LocaleSwitcher } from "@/features/switch-locale";
import { routesConfig } from "@/shared/config/routes";

interface MarketingLayoutProps {
  children: React.ReactNode;
}

export default function MarketingLayout({ children }: MarketingLayoutProps) {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="container z-50 bg-background">
        <div className="flex h-20 items-center justify-between py-6">
          <MainNav items={routesConfig.mainNav} />
          <nav className="flex items-center gap-5">
            <LocaleSwitcher />
            <ModeToggle />
          </nav>
        </div>
      </header>
      <main className="container flex-1">{children}</main>
      <SiteFooter />
    </div>
  );
}

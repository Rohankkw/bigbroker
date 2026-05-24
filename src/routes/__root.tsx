import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import appCss from "../styles.css?url";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ThemeProvider from "@/components/ThemeProvider";
import { themeInitScript } from "@/lib/theme";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-dark px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-8xl font-black text-brand-gold">
          404
        </h1>
        <h2 className="mt-4 font-display text-2xl font-bold">Page not found</h2>
        <p className="mt-2 text-sm text-foreground/60">
          This page doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-flex mt-6 px-6 py-3 rounded-full bg-brand-gold text-brand-dark font-bold"
        >
          Go Home
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-brand-dark px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-bold">
          Something went wrong
        </h1>
        <p className="mt-2 text-sm text-foreground/60">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 px-6 py-3 rounded-full bg-brand-gold text-brand-dark font-bold"
        >
          Try again
        </button>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()(
  {
    head: () => ({
      meta: [
        { charSet: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { title: "Jay Bholenath Enterprises — Real Estate in Vasai-Virar" },
        {
          name: "description",
          content:
            "Trusted estate agent & builder in Nalasopara East. Sale, purchase, rent and heavy deposit for flats, shops, bungalows and plots across Vasai-Virar.",
        },
      ],
      links: [
        { rel: "stylesheet", href: appCss },
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossOrigin: "anonymous",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@400;600;700;800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&family=Playfair+Display:ital,wght@1,500;1,700&display=swap",
        },
      ],
    }),
    shellComponent: RootShell,
    component: RootComponent,
    notFoundComponent: NotFoundComponent,
    errorComponent: ErrorComponent,
  },
);

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <HeadContent />
      </head>
      <body className="bg-brand-dark text-foreground" suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </QueryClientProvider>
    </ThemeProvider>
  );
}

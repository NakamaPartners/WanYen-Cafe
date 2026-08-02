import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import Home from '@/pages/Home';
import StoryPage from '@/pages/StoryPage';
import MenuPage from '@/pages/MenuPage';
import CateringPage from '@/pages/CateringPage';
import VisitPage from '@/pages/VisitPage';
import { Route, Switch, Router as WouterRouter, useLocation } from 'wouter';
import { Navbar } from '@/components/Navbar';
import { useEffect } from 'react';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/story" component={StoryPage} />
      <Route path="/menu" component={MenuPage} />
      <Route path="/catering" component={CateringPage} />
      <Route path="/visit" component={VisitPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

const pageMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'WanYen Cafe | Asian-Inspired Ice Cream & Desserts',
    description: "WanYen Cafe is Salt Lake City's Asian-inspired ice cream and dessert cafe, making small-batch ice cream, desserts, and drinks from scratch.",
  },
  '/story': {
    title: 'Our Story | WanYen Cafe',
    description: 'From a craving for matcha ice cream to a welcoming dessert cafe in downtown Salt Lake City.',
  },
  '/menu': {
    title: 'Menu | WanYen Cafe',
    description: 'Explore WanYen small-batch ice cream, signature Asian-inspired desserts, and crafted drinks.',
  },
  '/catering': {
    title: 'Catering & Wholesale | WanYen Cafe',
    description: 'Bring WanYen small-batch ice cream and signature desserts to celebrations, company events, and hospitality partners.',
  },
  '/visit': {
    title: 'Visit | WanYen Cafe',
    description: 'Visit WanYen Cafe at 378 W Broadway, Suite 115 in downtown Salt Lake City, Utah.',
  },
};

function RouteEffects() {
  const [location] = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    const meta = pageMeta[location] ?? {
      title: 'Page Not Found | WanYen Cafe',
      description: 'Find your way back to WanYen Cafe.',
    };
    document.title = meta.title;
    document.querySelector('meta[name="description"]')?.setAttribute('content', meta.description);
    document.querySelector('meta[property="og:title"]')?.setAttribute('content', meta.title);
    document.querySelector('meta[property="og:description"]')?.setAttribute('content', meta.description);
    document.querySelector('meta[name="twitter:title"]')?.setAttribute('content', meta.title);
    document.querySelector('meta[name="twitter:description"]')?.setAttribute('content', meta.description);
  }, [location]);

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <RouteEffects />
          <Navbar />
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;

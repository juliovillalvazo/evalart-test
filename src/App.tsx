import { Header } from './common/header';
import { Features } from './pages';
import { Footer } from './common/footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <Header />
        <Features />
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;

import { Suspense } from 'react';
import {
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './screens/Home/Home';
import { PaginatedProvider } from './context/Paginated.context';

const queryClient = new QueryClient();

const App = () => {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Suspense>
          <Router>
            <Routes>
              <Route path={'/'} element={<Home />} />
            </Routes>
          </Router>
        </Suspense>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
};

export default App;

import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider} from '@tanstack/react-query'
import Header from './Components/Header';
import BannerSearch from './Components/BannerSearch';
import Details from './Components/Details';
import Footer from './Components/Footer';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Infinity,
            cacheTime: Infinity,
        }
    }
});


const App = () => {
    return(
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Header/>
                <Routes>
                    <Route path="/details/:id" element={<Details />}/>
                    <Route path="/" element={<BannerSearch/>}/>
                </Routes>
                <Footer/>
            </QueryClientProvider>
        </BrowserRouter>
    )
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)
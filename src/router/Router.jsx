import App from '../App';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../pages/Home';
import About from '../pages/About';
import WhoWeAre from '../pages/WhoWeAre';
import MissionVission from '../pages/MissionVission';
import BoardMember from '../pages/BoardMember';
import Products from '../pages/Products';
import Manufacturing from '../pages/Manufacturing';
import Quality from '../pages/Quality';
import Gallery from '../pages/Gallery';
import Careers from '../pages/Careers';
import Contact from '../pages/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/who-we-are',
        element: <WhoWeAre />,
      },
       {
        path: '/mission-vision',
        element: <MissionVission />,
      },
       {
        path: '/board-of-member',
        element: <BoardMember />,
      },
       {
        path: '/products',
        element: <Products />,
      },
       {
        path: '/manufacturing',
        element: <Manufacturing />,
      },
      {
        path: '/quality',
        element: <Quality />,
      },
      {
        path: '/gallery',
        element: <Gallery />,
      },
      {
        path: '/careers',
        element: <Careers />,
      },
      {
        path: '/contact',
        element: <Contact />
      }
    
    ],
  },
]);

export default router;
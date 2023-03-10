import React, { Suspense, useContext, useEffect } from 'react';
import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route, Navigate } from 'react-router-dom';

// import RootLayout from './components/Layout/RootLayout';
import Players from './pages/Players';
import LoadingSpinner from './components/UI/LoadingSpinner';
import PlayerContext from './store/player-context';

const RootLayout = React.lazy(() => import('./components/Layout/RootLayout'));
const NewPlayer = React.lazy(() => import('./pages/NewPlayer'));

 
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Suspense fallback={<LoadingSpinner />}><RootLayout /></Suspense>}>
    <Route index path='/' element={<Players />}/>
    <Route path='/add-player/' element={<Suspense fallback={<LoadingSpinner />}><NewPlayer /></Suspense>} />
    <Route path='*' element={<Navigate to="/" />}/>
  </Route>
));

function App() {
  const ctx = useContext(PlayerContext);

  useEffect(() => {
    ctx.setPlayerData();
  }, []);

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

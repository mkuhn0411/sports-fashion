import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import RootLayout from './components/RootLayout';
import NewPlayer, { action as newPlayerAction } from './pages/NewPlayer';
import Players from './pages/Players';
import { getPlayers } from './util/api';
 
const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<RootLayout />}>
    <Route index path='/' element={<Players />} loader={() => getPlayers()} />
    <Route path='/add-player/' element={<NewPlayer />} action={newPlayerAction} />
  </Route>
));

function App() {
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App

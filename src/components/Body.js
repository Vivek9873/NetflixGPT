

import Login from './Login'
import Browse from './Browse'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const Body = () => {
    const appRouter = createBrowserRouter([
        {
            path:"/",
            element:<Login/>
        },
        {
            path:"/browse",
            element:<Browse/>
        },
    ]);
    // We have to implement once that's why just use useEffect();

    return (
    <div>
        <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body
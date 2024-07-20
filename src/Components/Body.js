import React from 'react'
import {RouterProvider,createBrowserRouter} from "react-router-dom";
import Login from './UserValidation/Login';
import Browse from './BrowseSection/Browse';
import WatchContent from './Content/WatchContent';
import MainVideoContainer from './BrowseSection/MainVideoContainer';


const Body = () => {
  

    const appRouter=createBrowserRouter([
        {
            path: "/",
            element: <Login/>
        },
        {
            path:"/browse",
            element:<Browse/>,
        },
        {
          path:"/content",
          element:<WatchContent/>,
      }
    ])

   


  return (
    <div>
      <RouterProvider router={appRouter}/>
    </div>
  )
}

export default Body

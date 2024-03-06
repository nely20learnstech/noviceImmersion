import "./App.css"

import { Home } from './pages/Home';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Login } from './pages/Login';
import { CareerOpportunities } from './pages/CareerOpportunities';
import { Programs } from './pages/Programs';
import { Roadmap } from './pages/Roadmap';
import { StudyTips } from './pages/StudyTips';
import { FQA } from './pages/FQA';
import { Entities } from './components/Entities/Entities';
import { UndergraduatePrograms } from './components/UndergraduatePrograms';
import { PostgraduatePrograms } from './components/PostgraduatePrograms';
import { Custom404Page } from './pages/Custom404Page';


function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/login',
      element: <Login />,
    },
    {
      path: '/careers',
      element: <CareerOpportunities />,
    },
    {
      path: "*",
      element: (
        <Custom404Page/>
      ),
    }, 
    {
      path: "/entities",
      element: (
        <Entities/>
      ),
    },
    {
      path: '/programs',
      element: <Programs />,
      // children: [
      //   {
      //     path: 'undergraduate', 
      //     element: <UndergraduatePrograms />,
      //   },
      //   {
      //     path: 'postgraduate', // Notice: Removed the leading slash (/)
      //     element: <PostgraduatePrograms />,
      //   },
      // ],
    },
    {
      path: 'undergraduate', 
      element: <UndergraduatePrograms />,
    },
    {
      path: 'postgraduate', // Notice: Removed the leading slash (/)
      element: <PostgraduatePrograms />,
    },
    {
      path: '/roadmap',
      element: <Roadmap />,
    },
    {
      path: '/studytips',
      element: <StudyTips />,
    },
    {
      path: '/fqa',
      element: <FQA />,
    },

  ])  

  return (
    <RouterProvider router={router}/>
  )
}

export default App

import './assets/css/App.css';
import MainPage from './pages/MainPage';

import DownloadApk from './pages/DownloadApk'

import AHStudy from './pages/AHStudy';
import AHStudyChatbot from './pages/AHStudyChatbot';  
import AIChatBot from './pages/AIChatBot';
import TongQuan from './pages/TongQuan';

import CommingSoon from './CommingSoon';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/apkdownload",
    element: <DownloadApk />,
  },
  {
    path: "/ahstudy",
    element: <AHStudy />,
  },
  {
    path: "/ahstudychatbot",
    element: <AHStudyChatbot />,
  },
  {
    path: "/aichatbot",
    element: <AIChatBot />,
  },
  {
    path: "/commingsoon",
    element: <CommingSoon />,
  },
  {
    path: "/tong-quan",
    element: <TongQuan />,
  },
]);

function App() {
  return (
    <div className="">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

import Navbar from './component/navbar/Navbar';
import Homepage from '../src/pages/homePage/Homepage';
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom';
import Students from './pages/students/Students';
import AddStudent from './pages/addStudent/AddStudent';
import StudentPage, { studentLoader } from './pages/student/StudentPage';
import EditPage from './pages/editPage/EditPage';

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Homepage />,
      },
      {
        path: '/students',
        element: <Students />,
      },
      {
        path: '/student/:id',
        element: <StudentPage />,
        loader: studentLoader,
      },
      {
        path: '/students-add',
        element: <AddStudent />,
      },
      {
        path: '/student-edit/:id',
        element: <EditPage />,
        loader: studentLoader,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

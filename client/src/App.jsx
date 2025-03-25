import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

// Lazy-loaded components
const Homepage = lazy(() => import('./pages/Homepage'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));

// Route configuration
const routes = [
  { path: '/', element: <Homepage /> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
];

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
      </Routes>
    </Suspense>
  );
}

export default App;
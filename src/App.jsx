import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Navigation  from './component/navigations';
import  Footer  from './component/footer';
import Loader from './component/loader';

// Lazy-loaded components
const LazyLogin = React.lazy(() => import('./component/login'));
const LazyHome = React.lazy(() => import('./component/home'));
const LazyLogout = React.lazy(() => import('./component/logout'));
const LazyRegister = React.lazy(() => import('./component/register'));
const LazyCourse = React.lazy(() => import('./component/course'));
const LazyProfile = React.lazy(() => import('./component/profile'));


const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
      <Route path="/" element={
          <Suspense fallback={<Loader />} >
            <LazyHome />
          </Suspense>
        } />
        <Route path="/login" element={
          <Suspense fallback={<Loader />}>
            <LazyLogin />
          </Suspense>
        } />
        <Route path="/course" element={
          <Suspense fallback={<Loader />}>
            <LazyCourse />
          </Suspense>
        } />
        <Route path="/logout" element={
          <Suspense fallback={<Loader />}>
            <LazyLogout />
          </Suspense>
        } />
        <Route path="/register" element={
          <Suspense fallback={<Loader />}>
            <LazyRegister />
          </Suspense>
        } />
      
        <Route path="/profile" element={
          <Suspense fallback={<Loader />}>
            <LazyProfile />
          </Suspense>
        } />
       
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;

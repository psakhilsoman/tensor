import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PublicRoute from './public-route';
import PrivateRoute from './private-route';
import Login from '../components/auth/login';
import Register from '../components/auth/register';
// import MovieList from '../components/MovieList';
// import MovieDetails from '../components/MovieDetails';

const AppRouter = () => {
  // Simulated authentication state (replace with actual logic)
  const isAuthenticated = localStorage.getItem('authToken') ? true : false;

  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route
          path="/login"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <Login />
            </PublicRoute>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRoute isAuthenticated={isAuthenticated}>
              <Register />
            </PublicRoute>
          }
        />

        {/* Private Routes */}
        <Route
          path="/"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              {/* <MovieList /> */}
            </PrivateRoute>
          }
        />
        {/* <Route
          path="/movies/:id"
          element={
            <PrivateRoute isAuthenticated={isAuthenticated}>
              <MovieDetails />
            </PrivateRoute>
          }
        /> */}
      </Routes>
    </Router>
  );
};

export default AppRouter;

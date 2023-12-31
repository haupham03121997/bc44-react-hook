import React from "react";
import { useState } from "react";
import HomePage from "./pages/Home";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import DemoUseEffect from "./pages/DemoHooks/DemoUseEffect";
import DemoUseCallBack from "./pages/DemoHooks/DemoUseCallBack";
import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import MainLayout from "./layout/MainLayout";
import AdminLayout from "./layout/AdminLayout";

import Dashboard from "./pages/Dashboard";
import AddUser from "./pages/AddUser";
import AddMovie from "./pages/AddMovie";

import MovieDetail from "./pages/MovieDetail";

import SearchPage from "./pages/Search";
import DemoUseRef from "./pages/DemoHooks/DemoUseRef";
import DemoHookRedux from "./pages/DemoHooks/DemoHookRedux";
import LoginPage from "./pages/Login";

function App() {
  return (
    <>
      <Routes>
        {/* Main Layout */}
        <Route path="/" element={<MainLayout />}>
          <Route path="/list-movie" element={<HomePage />} />
          <Route path="/list-movie/:id" element={<MovieDetail />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/demo-use-ref" element={<DemoUseRef />} />
          <Route path="/demo-hook-redux" element={<DemoHookRedux />} />
          <Route path="/login" element={<LoginPage />} />
        </Route>

        {/* Admin Layout */}
        <Route path="/admin" element={<Navigate to={"/admin/dashboard"} />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route path="/admin/dashboard" element={<Dashboard />} />
          <Route path="/admin/add-user" element={<AddUser />} />
          <Route path="/admin/add-movie" element={<AddMovie />} />
        </Route>

        {/* Auth Layout */}
      </Routes>
    </>
  );
}

export default App;

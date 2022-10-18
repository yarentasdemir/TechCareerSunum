import React, { useEffect } from "react";
import Customers from "./proje/Customers";
import Login from "./proje/Login";
import { BrowserRouter, Routes, Navigate, Route } from "react-router-dom";
import AddCustomer from "./proje/AddCustomer";
import CustomerDetail from "./proje/CustomerDetail";
import CustomerUpdate from "./proje/CustomerUpdate";

const App = () => {
  const [user, setUser] = React.useState(null);

  const handleLogin = (data) => {
    setUser(data);
  };

  const handleLogout = () => setUser(null);


  useEffect(() => {
    if(!user){
      <Navigate to="/login" replace />
    }
  },[user])

  return (
    <div>
      {user ? (
        <button onClick={handleLogout}>Logout</button>
      ) : (
        <button onClick={handleLogin}>Login</button>
      )}
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute user={user}>
                <Customers />
              </ProtectedRoute>
            }
          />
          <Route
            path="/login"
            element={
              <ProtectedUserRoute user={user} >
                <Login handleLogin={handleLogin} />
              </ProtectedUserRoute>
            }
          />
          <Route
            path="/customer/detail/:id"
            element={
              <ProtectedRoute user={user}>
                <CustomerDetail />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/customer/update/:id"
            element={
              <ProtectedRoute user={user}>
                <CustomerUpdate />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/addcustomer"
            element={
              <ProtectedRoute user={user}>
                <AddCustomer />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

function ProtectedRoute({ user, children }) {
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

function ProtectedUserRoute({ user, children }) {
  if (user) {
    return <Navigate to={"/"} replace />;
  }
  return children;
}

export default App;


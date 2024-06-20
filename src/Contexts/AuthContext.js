import React, { createContext, useState, useEffect, useContext } from "react";

const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const login = async (email, password) => {
    const userData = { id: 1, email };
    setUser(userData);
  };

  const logout = async () => {
    setUser(null);
  };

  useEffect(() => {
    const fetchUser = async () => {
      const storedUser = null;
      setUser(storedUser);
      setLoading(false);
    };
    fetchUser();
  }, []);

  const value = {
    user,
    loading,
    login,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

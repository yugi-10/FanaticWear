import { createContext, useContext, useState } from 'react';

export const AuthContext = createContext();

const dummyUser = {
  email: 'fan@example.com',
  password: 'football123'
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    if (email === dummyUser.email && password === dummyUser.password) {
      setUser({ email });
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthContext;

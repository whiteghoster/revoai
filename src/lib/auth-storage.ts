export const AuthStorage = {
  isLoggedIn: () => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("auth_token");
  },
  isAuthenticated: () => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("auth_token");
  },
  isAdmin: () => {
    if (typeof window === "undefined") return false;
    return localStorage.getItem("auth_role") === "admin";
  },
  getToken: () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("auth_token");
  },
  setToken: (token: string) => {
    localStorage.setItem("auth_token", token);
  },
  setAuthData: (
    token: string,
    user?: { name?: string; role?: string; [key: string]: unknown },
    refreshToken?: string,
    expiresIn?: number
  ) => {
    if (token) localStorage.setItem("auth_token", token);
    if (user?.role) localStorage.setItem("auth_role", user.role);
    if (refreshToken) localStorage.setItem("auth_refresh_token", refreshToken);
    if (expiresIn) localStorage.setItem("auth_expires_in", String(expiresIn));
  },
  clear: () => {
    localStorage.removeItem("auth_token");
    localStorage.removeItem("auth_role");
    localStorage.removeItem("auth_refresh_token");
    localStorage.removeItem("auth_expires_in");
  },
};

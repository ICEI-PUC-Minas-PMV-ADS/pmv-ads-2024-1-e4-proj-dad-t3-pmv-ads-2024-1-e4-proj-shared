import React from "react";
import { jwtDecode } from "jwt-decode";
import { useStorageState } from "./useStorageState";

const AuthContext = React.createContext<{
  signIn: (email: string, password: string) => Promise<boolean>;
  signOut: () => void;
  register: (newObj: object) => Promise<boolean>;
  session?: string | null;
  userInfo?: any;
  isLoading: boolean;
}>({
  signIn: async () => false,
  signOut: () => null,
  register: async () => false,
  session: null,
  userInfo: null,
  isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
  const value = React.useContext(AuthContext);
  if (process.env.NODE_ENV !== "production") {
    if (!value) {
      throw new Error("useSession must be wrapped in a <SessionProvider />");
    }
  }

  return value;
}

export function SessionProvider(props: React.PropsWithChildren) {
  const [[isLoading, session], setSession] = useStorageState("session");
  const [userInfo, setUserInfo] = React.useState<any>(null);

  const signIn = async (email: string, password: string): Promise<boolean> => {
    try {
      console.log(email);
      const response = await fetch("https://localhost:44346/api/auth/entrar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include", // This is important if your API uses cookies for authentication
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      setSession(data.token);
      const decoded = jwtDecode(data.token);
      console.log(decoded);
      setUserInfo(decoded);
      // router.push("/home");
      return true; // Indicating successful sign-in
    } catch (error) {
      console.error("Failed to sign in", error);
      return false; // Indicating failed sign-in
    }
  };

  const register = async (newObj: object): Promise<boolean> => {
    try {
      console.log(newObj);
      const response = await fetch(
        "https://localhost:44346/api/auth/registro",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include", // This is important if your API uses cookies for authentication
          body: JSON.stringify(newObj),
        }
      );
      // console.log(response);
      if (!response.ok) {
        throw new Error("Registration failed");
      }

      const data = await response.json();
      console.log(data);
      setSession(data.token);
      const decoded = jwtDecode(data.token);
      setUserInfo(decoded);
      return true; // Indicating successful registration
    } catch (error) {
      console.error("Failed to register", error);
      return false; // Indicating failed registration
    }
  };

  const signOut = () => {
    setSession(null);
    setUserInfo(null);
  };

  React.useEffect(() => {
    if (session) {
      const decoded = jwtDecode(session);
      setUserInfo(decoded);
    }
  }, [session]);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        register,
        session,
        userInfo,
        isLoading,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

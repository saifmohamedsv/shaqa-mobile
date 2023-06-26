import React from "react";
import { useRouter, useSegments } from "expo-router";

export const AuthContext = React.createContext({ user: { token: null } });

// This hook can be used to access the user info.
export function useAuth() {
  return React.useContext(AuthContext);
}

// This hook will protect the route access based on user authentication.
function useProtectedRoute(user) {
  const segments = useSegments();
  const router = useRouter();

  React.useEffect(() => {
    const inAuthGroup = segments[0] === "(auth)";

    if (
      // If the user is not signed in and the initial segment is not anything in the auth group.
      !user &&
      !inAuthGroup
    ) {
      // Redirect to the sign-in page.
      router.push("/(auth)/login");
    } else if (user && inAuthGroup) {
      // Redirect away from the sign-in page.
      router.push("/");
    }
  }, [user, segments]);
}

export function Provider(props) {
  const [user, setAuth] = React.useState(null);
  useProtectedRoute(user);

  console.log(user);
  return (
    <AuthContext.Provider
      value={{
        signIn: (user) => setAuth({ ...user, token: "123" }),
        signOut: () => setAuth(null),
        user,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

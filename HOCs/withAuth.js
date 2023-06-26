import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaView, Text } from "react-native";
import { useSelector } from "react-redux";
import Navbar from "../components/shared/Navbar/Navbar";

const AuthContainer = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);

  const router = useRouter();

  useEffect(() => {
    if (!isLoggedIn) {
      router.replace("/login");
    } else if (isLoggedIn) {
      router.replace("/");
    }
  }, [isLoggedIn]);

  return (
    <>
      {isLoggedIn ? (
        <SafeAreaView style={{ flex: 1 }}>
          <View style={{ flex: 1 }}>
            <Navbar />
            {children}
          </View>
        </SafeAreaView>
      ) : (
        <>{children}</>
      )}
    </>
  );
};

export default AuthContainer;

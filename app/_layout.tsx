import { persistor, store } from "@/Redux/store";
import { Stack } from "expo-router";
import { Text } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Stack
          screenOptions={{ headerShown: false }}
          initialRouteName="index"
        />
      </PersistGate>
    </Provider>
  );
}

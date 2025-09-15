import { persistor, store } from "@/Redux/store";
import { Stack } from "expo-router";
import { Text } from "react-native";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function RootLayout() {
  return (
    <Provider store={store}>
      <PersistGate loading={<Text>Loading...</Text>} persistor={persistor}>
        <Stack screenOptions={{ headerShown: false }} initialRouteName="index">
          <Stack.Screen
            name="/(modal)/tasksModal"
            options={{
              presentation: "modal",
              animation: "slide_from_bottom",
              gestureEnabled: true,
              contentStyle: {
                backgroundColor: "#1e1e1e",
                borderTopLeftRadius: 20,
                borderTopRightRadius: 20,
              },
              headerShown: true,
              headerStyle: {
                backgroundColor: "#1e1e1e",
              },
              headerTitleStyle: {
                color: "#fff",
                fontSize: 18,
                fontWeight: "600",
              },
              headerTintColor: "#fff",
            }}
          />
        </Stack>
      </PersistGate>
    </Provider>
  );
}

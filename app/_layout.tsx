import { Stack } from 'expo-router/stack';

export default function Layout() {

  return <Stack
    screenOptions={
      {
        headerTitleAlign: "center",
        headerStyle: {
          backgroundColor: "#000",
        },
        headerTintColor: "#fff",
      }
    }
  />;
}


import { Link, router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Screen() {
  const id = 7;

  const handleGoToAbout = () => {
    router.push("/about");
  }

  return (
    <View style={styles.container}>
      <Link href={{pathname:"/about", params: {id, name: 'About Page'}}}>About</Link>
      <Link key={id} href={{pathname: "/user/[id]", params: {id, name: 'About Page'}}}>User Details </Link>
      <Button title="About" onPress={handleGoToAbout} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

import { View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import Card from "./app/components/Card";

export default function App() {
  // return( <WelcomeScreen />);
  return (
    <View style={{padding:10, paddingTop:100, backgroundColor: "gray"}}>
      <Card
        title="Red Jacket for Sale"
        subtitle="$100"
        image={require("./app/assets/jacket.jpg")}
      />
    </View>
  );
}

import "@expo/match-media";
import { Text } from "react-native";
import { useMediaQuery } from "react-responsive";

export default function MediaQueriesApp() {
  const isTableOrMobileDevice = useMediaQuery({
    maxDeviceWidth: 1224,
    query: "(max-device-width:1224px)"
  });

  if (isTableOrMobileDevice) {
    return <Text>Hi Mobile </Text>;
  }
  return <Text>Hello Desktop people</Text>;
}

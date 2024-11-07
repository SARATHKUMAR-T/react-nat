import { SessionProvider } from "@/utils/ctx";
import { Slot } from "expo-router";

export default function RootLayout() {
  return (
    <SessionProvider>
      <Slot />
    </SessionProvider>
  );
}

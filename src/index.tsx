import { StatusBar } from "expo-status-bar";
import React from "react";
import { Provider as PaperProvider } from "react-native-paper";
import { RecoilRoot } from "recoil";

export default function App() {
  return (
    <PaperProvider>
      <RecoilRoot>
        <StatusBar />
      </RecoilRoot>
    </PaperProvider>
  );
}

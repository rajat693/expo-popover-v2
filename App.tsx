import React, { useState } from "react";
import "@/global.css";
import { GluestackUIProvider } from "@/components/ui/gluestack-ui-provider";
import { SafeAreaView } from "react-native";
import { Button, ButtonText } from "./components/ui/button";
import { Text } from "./components/ui/text";
import {
  Popover,
  PopoverBackdrop,
  PopoverContent,
  PopoverArrow,
  PopoverBody,
} from "./components/ui/popover";

function PopoverExample() {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <Popover
      isOpen={isOpen}
      onClose={handleClose}
      onOpen={handleOpen}
      placement="bottom"
      size="md"
      offset={10}
      trigger={(triggerProps) => {
        return (
          <Button {...triggerProps} className="mt-16">
            <ButtonText>Open Popover</ButtonText>
          </Button>
        );
      }}
    >
      <PopoverBackdrop />
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>
          <Text className="text-typography-900">hello world</Text>
        </PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default function App() {
  return (
    <GluestackUIProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <PopoverExample />
      </SafeAreaView>
    </GluestackUIProvider>
  );
}

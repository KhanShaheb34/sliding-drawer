import React from "react";
import PageLayout from "../components/pageLayout";
import { Text } from "react-native";
import { CenteredView } from "../components/views";

export default function CartPage() {
  return (
    <PageLayout title="Your Cart">
      <CenteredView>
        <Text>Cart</Text>
      </CenteredView>
    </PageLayout>
  );
}

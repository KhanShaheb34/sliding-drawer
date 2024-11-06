import React from "react";
import PageLayout from "../components/pageLayout";
import { Text } from "react-native";
import { CenteredView } from "../components/views";

export default function OrdersPage() {
  return (
    <PageLayout title="Orders">
      <CenteredView>
        <Text>Orders</Text>
      </CenteredView>
    </PageLayout>
  );
}

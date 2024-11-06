import React from "react";
import PageLayout from "../components/pageLayout";
import { Text } from "react-native";
import { CenteredView } from "../components/views";

export default function FavoritesPage() {
  return (
    <PageLayout title="Favorites">
      <CenteredView>
        <Text>Favorites</Text>
      </CenteredView>
    </PageLayout>
  );
}

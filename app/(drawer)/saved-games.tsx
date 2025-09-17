import React, { useEffect } from 'react';
import { View, Text, FlatList, StyleSheet, Button } from 'react-native';
import { useGame } from '../../contexts/GameContext';

export default function SavedGamesScreen() {
  const { profiles, loadProfiles, clearProfiles } = useGame();

  useEffect(() => {
    loadProfiles();
  }, []);

  const handleClear = async () => {
    await clearProfiles();
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved Games</Text>
      <FlatList
        data={[...profiles].reverse()}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>Saved at: {new Date(item.createdAt).toLocaleString()}</Text>
            <Text>Money: {item.resources.money}</Text>
          </View>
        )}
        ListEmptyComponent={<Text>No saved games found.</Text>}
      />
      <Button title="Clear Saved Games" onPress={handleClear} color="red" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  item: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

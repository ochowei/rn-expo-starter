import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

export default function GameScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Screen</Text>
      <Text>This is the main game screen. The game logic would go here.</Text>
      <Link href="/menu" style={styles.link}>Go back to Menu</Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  link: {
    marginTop: 20,
    color: 'blue',
  }
});

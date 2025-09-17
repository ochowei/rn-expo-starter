import React, { useEffect } from 'react';
import { View, Button, Alert, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
import { useGame } from '../../contexts/GameContext'; // Adjust path based on actual structure

export default function MenuScreen() {
  const router = useRouter();
  const { profiles, addProfile, loadProfiles } = useGame();

  useEffect(() => {
    loadProfiles();
  }, []);

  const handleNewGame = async () => {
    if (profiles.length >= 5) {
      Alert.alert("存檔已達上限", "請先刪除多餘的存檔，最多只能有 5 個存檔。");
      router.push('/saved-games');
      return;
    }

    const newGameProfile = {
      resources: { creativity: 10, productivity: 10, money: 100 },
      assets: [{ name: '工程師', count: 1 }],
      createdAt: new Date().toISOString(),
    };

    await addProfile(newGameProfile);
    router.push('/game');
  };

  const handleGoToSavedGames = () => {
    router.push('/saved-games');
  };

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <Button title="New Game" onPress={handleNewGame} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Saved Games" onPress={handleGoToSavedGames} />
      </View>
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
  buttonContainer: {
    marginVertical: 10,
    width: '80%',
  }
});

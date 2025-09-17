import React, { createContext, useState, useContext, ReactNode } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Define the shape of the game state and profile
interface Resources {
  creativity: number;
  productivity: number;
  money: number;
}

interface Asset {
  name: string;
  count: number;
}

export interface GameProfile {
  resources: Resources;
  assets: Asset[];
  createdAt: string;
}

interface GameContextType {
  profiles: GameProfile[];
  addProfile: (profile: GameProfile) => Promise<void>;
  loadProfiles: () => Promise<void>;
  clearProfiles: () => Promise<void>; // For testing/debugging
}

// Create the context with a default value
const GameContext = createContext<GameContextType | undefined>(undefined);

// Create a provider component
export const GameProvider = ({ children }: { children: ReactNode }) => {
  const [profiles, setProfiles] = useState<GameProfile[]>([]);

  const loadProfiles = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('gameProfiles');
      if (jsonValue != null) {
        setProfiles(JSON.parse(jsonValue));
      }
    } catch (e) {
      console.error('Failed to load profiles.', e);
    }
  };

  const addProfile = async (profile: GameProfile) => {
    try {
      const newProfiles = [...profiles, profile];
      setProfiles(newProfiles);
      const jsonValue = JSON.stringify(newProfiles);
      await AsyncStorage.setItem('gameProfiles', jsonValue);
    } catch (e) {
      console.error('Failed to save profile.', e);
    }
  };

  const clearProfiles = async () => {
    try {
        await AsyncStorage.removeItem('gameProfiles');
        setProfiles([]);
    } catch (e) {
        console.error('Failed to clear profiles.', e);
    }
  };


  return (
    <GameContext.Provider value={{ profiles, addProfile, loadProfiles, clearProfiles }}>
      {children}
    </GameContext.Provider>
  );
};

// Create a custom hook to use the game context
export const useGame = () => {
  const context = useContext(GameContext);
  if (context === undefined) {
    throw new Error('useGame must be used within a GameProvider');
  }
  return context;
};

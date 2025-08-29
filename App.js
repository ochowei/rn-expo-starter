import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import { Provider, Button, SegmentedControl, light, dark } from '@zellosoft/antd-react-native';

export default function App() {
  const systemTheme = useColorScheme();
  const [theme, setTheme] = useState('system'); // 'light', 'dark', 'system'
  const [currentTheme, setCurrentTheme] = useState(systemTheme === 'dark' ? dark : light);

  useEffect(() => {
    if (theme === 'system') {
      setCurrentTheme(systemTheme === 'dark' ? dark : light);
    } else if (theme === 'dark') {
      setCurrentTheme(dark);
    } else {
      setCurrentTheme(light);
    }
  }, [theme, systemTheme]);

  const handleThemeChange = (value) => {
    setTheme(value);
  };

  return (
    <Provider theme={currentTheme}>
      <View style={styles.container}>
        <Text style={{ color: currentTheme.color_text_base, marginBottom: 20, fontSize: 18 }}>
          Welcome to Ant Design!
        </Text>
        <SegmentedControl
          values={['Light', 'Dark', 'System']}
          selectedIndex={theme === 'light' ? 0 : theme === 'dark' ? 1 : 2}
          onChange={(e) => handleThemeChange(e.nativeEvent.value.toLowerCase())}
          style={{ width: 200, marginBottom: 20 }}
        />
        <Button type="primary">Primary Button</Button>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

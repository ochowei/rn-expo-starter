import { Drawer } from 'expo-router/drawer';

export default function DrawerLayout() {
  return (
    <Drawer initialRouteName="menu">
      <Drawer.Screen
        name="menu"
        options={{
          drawerLabel: 'Menu',
          title: 'Main Menu',
        }}
      />
      <Drawer.Screen
        name="saved-games"
        options={{
          drawerLabel: 'Saved Games',
          title: 'Saved Games',
        }}
      />
      <Drawer.Screen
        name="game"
        options={{
          drawerItemStyle: { display: 'none' },
          title: 'Game',
        }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: 'Home (Tabs)',
          title: 'Home',
        }}
      />
    </Drawer>
  );
}

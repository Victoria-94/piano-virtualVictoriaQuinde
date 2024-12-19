import React from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

interface KeyProps {
  note: string;
  isActive: boolean;
  onPress: () => void;
}

const Key: React.FC<KeyProps> = ({ note, isActive, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.key, isActive ? styles.active : null]}
      onPress={onPress}
    >
      <Text style={styles.note}>{note}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  key: {
    width: 50,
    height: 150,
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  active: {
    backgroundColor: 'yellow',
  },
  note: {
    fontSize: 16,
    color: 'black',
  },
});

export default Key;

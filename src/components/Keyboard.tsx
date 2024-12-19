import React from 'react';
import { View, StyleSheet } from 'react-native';
import Key from './Key';

interface KeyboardProps {
  activeNote: string;
  onNotePress: (note: string) => void;
}

const Keyboard: React.FC<KeyboardProps> = ({ activeNote, onNotePress }) => {
  const notes = ['DO', 'RE', 'MI', 'FA', 'SOL', 'LA', 'SI'];

  return (
    <View style={styles.keyboard}>
      {notes.map((note) => (
        <Key
          key={note}
          note={note}
          isActive={activeNote === note}
          onPress={() => onNotePress(note)}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 20,
  },
});

export default Keyboard;

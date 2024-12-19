import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface PlaybackProps {
  sequence: string[];
  onPlay: () => void;
}

const Playback: React.FC<PlaybackProps> = ({ sequence, onPlay }) => {
  return (
    <View style={styles.playback}>
      <Button title="Play Sequence" onPress={onPlay} disabled={sequence.length === 0} />
    </View>
  );
};

const styles = StyleSheet.create({
  playback: {
    marginVertical: 20,
  },
});

export default Playback;

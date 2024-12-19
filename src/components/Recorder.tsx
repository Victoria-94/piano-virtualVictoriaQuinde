import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

interface RecorderProps {
  isRecording: boolean;
  onStartRecording: () => void;
  onStopRecording: () => void;
}

const Recorder: React.FC<RecorderProps> = ({ isRecording, onStartRecording, onStopRecording }) => {
  return (
    <View style={styles.recorder}>
      <Button
        title={isRecording ? 'Stop Recording' : 'Start Recording'}
        onPress={isRecording ? onStopRecording : onStartRecording}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  recorder: {
    marginVertical: 20,
  },
});

export default Recorder;

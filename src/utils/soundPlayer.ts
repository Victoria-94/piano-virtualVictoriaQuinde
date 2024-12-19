import { Audio } from 'expo-av';

const sounds: Record<string, any> = {
  DO: require('../assets/do.mp3'),
  RE: require('../assets/re.mp3'),
  MI: require('../assets/mi.mp3'),
  FA: require('../assets/fa.mp3'),
  SOL: require('../assets/sol.mp3'),
  LA: require('../assets/la.mp3'),
  SI: require('../assets/si.mp3'),
};

export const playSound = async (note: string) => {
  const sound = new Audio.Sound();
  try {
    await sound.loadAsync(sounds[note]);
    await sound.playAsync();
    setTimeout(() => sound.unloadAsync(), 3000);
  } catch (error) {
    console.error('Error al reproducir el sonido:', error);
  }
};

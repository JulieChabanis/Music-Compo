import { useEffect, useRef } from 'react';
import * as Tone from 'tone';

export default function useSounds() {
  const mySampler = useRef(null);

  useEffect(()=> {
    const sampler = new Tone.Sampler({
      urls: {
        "C4": "C4.mp3",
        "D#4": "Ds4.mp3",
        "F#4": "Fs4.mp3",
        "A4": "A4.mp3",
      },
      release: 1,
      baseUrl: "https://tonejs.github.io/audio/salamander/",
    }).toDestination();

    Tone.loaded().then(() => {
      mySampler.current = sampler; 
    }); 
  }, []); 

  const buttonsList = [
    { 
      soundPlay: () => mySampler.current.triggerAttackRelease(["C5"], 4) 
    },
    { 
      soundPlay: () => mySampler.current.triggerAttackRelease(["D#4"], 4) 
    },
    { 
      soundPlay: () => mySampler.current.triggerAttackRelease(["F#3"], 4) 
    },
    { 
      soundPlay: () => mySampler.current.triggerAttackRelease(["A4"], 4) 
    },
  ];

  return { buttonsList };
}
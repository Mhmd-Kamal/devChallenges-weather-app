import { atom } from 'recoil';
// import { getWeather } from './utils';

export const showLocationFormAtom = atom({
  key: 'showLocationFormAtom',
  default: false,
});

export const tempUnitAtom = atom({key: 'tempUnitAtom', default:'c'})
export const locationAtom = atom({ key: 'locationAtom', default: '' });

// export const weatherSelector = selector({
//   key: 'weatherSelector',
//   get: async ({ get }) => {
//     const weatherData = await getWeather();
//     return weatherData;
//   },
// });

export const weatherAtom = atom({ key: 'weather', default: null });

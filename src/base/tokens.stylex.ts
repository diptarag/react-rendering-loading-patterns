import * as stylex from '@stylexjs/stylex';

export const sizes = stylex.defineVars({
  sizeXS: '1rem',
  sizeS: '1.5rem',
  sizeM: '2rem',
  elementHeight: '2rem',
  elementHeightS: '1.5rem',
  elementHeightL: '2.5rem'
});

export const spaces = stylex.defineVars({
  spacingZero: '0',
  spacingXXS: '0.125rem',
  spacingXS: '0.25rem',
  spacingS: '0.5rem',
  spacingM: '0.75rem',
  spacingL: '1rem',
  spacingXL: '1.5rem',
  spacingXXL: '2rem',
  spacingXXXL: '3rem'
});

export const fontSizes = stylex.defineVars({
  textSizeXS: '0.5rem',
  textSizeS: '0.6rem',
  textSizeM: '0.75rem',
  textSize: '1rem',
  textSizeL: '1.1rem',
  textSizeXL: '1.25rem',
  textSizeXXL: '1.3rem',
  textSizeXXXL: '1.5rem'
});

export const borders = stylex.defineVars({
  borderThin: '0.1rem',
  borderRadiusDefault: '0.125rem',
  borderRadiusL: '0.25rem',
});

export const animation = stylex.defineVars({
  transitionDurationM: '150ms',
  transitionDurationDefault: '300ms'
});

export const colors = stylex.defineVars({
  backgroundPrimary: '#0d1520',
  backgroundSubtle: '#111927',
  backgroundElement: '#0d2847',
  backgroundElementHover: '#003362',
  backgroundElementActive: '#004074',
  borderSubtle: '#104d87',
  borderElement: '#205d9e',
  borderHover: '#2870bd',
  backgroundSolid: '#0090ff',
  backgroundSolidHover: '#3b9eff',
  fontLowContrast: '#70b8ff',
  fontHighContrast: '#c2e6ff',
  fontLightBackground: '#111927',
  elementColor: '#003362',
  backgroundElementLight: '#c2e6ff',
  backgroundElementLightHover: '#b6ecf7',
  blackAlpha1: 'rgba(0, 0, 0, 0.05)',
  blackAlpha2: 'rgba(0, 0, 0, 0.1)',
  blackAlpha3: 'rgba(0, 0, 0, 0.15)',
  blackAlpha4: 'rgba(0, 0, 0, 0.2)',
  blackAlpha5: 'rgba(0, 0, 0, 0.3)',
  blackAlpha6: 'rgba(0, 0, 0, 0.4)',
  blackAlpha7: 'rgba(0, 0, 0, 0.5)',
  blackAlpha8: 'rgba(0, 0, 0, 0.6)',
  blackAlpha9: 'rgba(0, 0, 0, 0.7)',
  blackAlpha10: 'rgba(0, 0, 0, 0.8)',
  blackAlpha11: 'rgba(0, 0, 0, 0.9)',
  blackAlpha12: 'rgba(0, 0, 0, 0.95)'
});

// .blackA {
//   --black-a1: rgba(0, 0, 0, 0.05);
//   --black-a2: rgba(0, 0, 0, 0.1);
//   --black-a3: rgba(0, 0, 0, 0.15);
//   --black-a4: rgba(0, 0, 0, 0.2);
//   --black-a5: rgba(0, 0, 0, 0.3);
//   --black-a6: rgba(0, 0, 0, 0.4);
//   --black-a7: rgba(0, 0, 0, 0.5);
//   --black-a8: rgba(0, 0, 0, 0.6);
//   --black-a9: rgba(0, 0, 0, 0.7);
//   --black-a10: rgba(0, 0, 0, 0.8);
//   --black-a11: rgba(0, 0, 0, 0.9);
//   --black-a12: rgba(0, 0, 0, 0.95);
// }

// const cyanDark = {
//   cyan1: '#0b161a',
//   cyan2: '#101b20',
//   cyan3: '#082c36',
//   cyan4: '#003848',
//   cyan5: '#004558',
//   cyan6: '#045468',
//   cyan7: '#12677e',
//   cyan8: '#11809c',
//   cyan9: '#00a2c7',
//   cyan10: '#23afd0',
//   cyan11: '#4ccce6',
//   cyan12: '#b6ecf7',
// }

// const indigoDark = {
//   indigo1: '#11131f',
//   indigo2: '#141726',
//   indigo3: '#182449',
//   indigo4: '#1d2e62',
//   indigo5: '#253974',
//   indigo6: '#304384',
//   indigo7: '#3a4f97',
//   indigo8: '#435db1',
//   indigo9: '#3e63dd',
//   indigo10: '#5472e4',
//   indigo11: '#9eb1ff',
//   indigo12: '#d6e1ff',
// }



// const mauveDark = {
//   mauve1: '#121113',
//   mauve2: '#1a191b',
//   mauve3: '#232225',
//   mauve4: '#2b292d',
//   mauve5: '#323035',
//   mauve6: '#3c393f',
//   mauve7: '#49474e',
//   mauve8: '#625f69',
//   mauve9: '#6f6d78',
//   mauve10: '#7c7a85',
//   mauve11: '#b5b2bc',
//   mauve12: '#eeeef0',
// }

// const grayDark = {
//   gray1: '#111111',
//   gray2: '#191919',
//   gray3: '#222222',
//   gray4: '#2a2a2a',
//   gray5: '#313131',
//   gray6: '#3a3a3a',
//   gray7: '#484848',
//   gray8: '#606060',
//   gray9: '#6e6e6e',
//   gray10: '#7b7b7b',
//   gray11: '#b4b4b4',
//   gray12: '#eeeeee',
// }


// const blueDark = {
//   blue1: '#0d1520',
//   blue2: '#111927',
//   blue3: '#0d2847',
//   blue4: '#003362',
//   blue5: '#004074',
//   blue6: '#104d87',
//   blue7: '#205d9e',
//   blue8: '#2870bd',
//   blue9: '#0090ff',
//   blue10: '#3b9eff',
//   blue11: '#70b8ff',
//   blue12: '#c2e6ff',
// }
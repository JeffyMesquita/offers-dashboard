import { ButtonStyle } from './components/button';
import { InputStyle } from './components/input';

export const components = {
  Tooltip: {
    baseStyle: {
      borderRadius: '4px',
      padding: '8px',
    },
  },
  Button: ButtonStyle,
  Input: InputStyle,
  Modal: {
    size: {
      '2xl': '720px',
    },
  },
};

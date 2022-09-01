const ButtonStyle = {
  variants: {
    default: {
      background: '#448b6c',
      border: 'none',
      color: '#FFFFFFE6',
      _hover: {
        _disabled: {
          background: '#2e5f49',
        },
        background: '#2e5f49',
      },
    },
    line: {
      background: 'transparent',
      border: '1px solid #f8f8f8',
      color: '#f8f8f8',
      _hover: {
        _disabled: {
          color: '#f8f8f8',
          background: 'transparent',
        },
        background: '#f8f8f8',
        color: '#373737',
      },
    },
    lineLight: {
      background: 'transparent',
      border: '1px solid #ced4da',
      color: '#495057',
      _hover: {
        _disabled: {
          color: '#495057',
          background: 'transparent',
        },
        background: '#d8dfe6',
        color: '#373737',
      },
    },
    secondary: {
      background: '#f8f8f8',
      border: 'none',
      color: '#373737',
      _hover: {
        _disabled: {
          color: '#373737',
          background: '#f8f8f8',
        },
        background: '#f0f0f060',
        color: '#f8f8f8',
      },
    },
    black: {
      background: '#00000060',
      border: 'none',
      color: '#f8f8f8',
      _hover: {
        _disabled: {
          color: '#f8f8f8',
          background: '#00000060',
        },
        background: '#000000',
        color: '#f8f8f899',
      },
    },
  },
};

export { ButtonStyle };

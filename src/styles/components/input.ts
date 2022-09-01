const InputStyle = {
  baseStyle: ({ colorMode }: { colorMode: string }) => ({
    field: {
      '&::-webkit-calendar-picker-indicator': {
        filter: colorMode === 'dark' ? 'invert(0)' : 'invert(1)',
      },
    },
  }),
  sizes: {},
  defaultProps: {},
  variants: {},
};

export { InputStyle };

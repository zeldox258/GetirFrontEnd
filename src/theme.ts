const theme = {
  colors: {
    primary: '#1EA4CE',
    primaryDark: '#147594',
    white: '#fff',
    primaryLight: '#F2F0FD',
    radioBorder: '#DFDEE2', 
    searchBarBorder: '#E0E0E0',
    inputPlaceholder: '#A8A8A8',
    filterTitle: '#697488',
    filterText: '#525252',
    itemName: '#191919',
    background: '#FAFAFA',
    headline: '#6F6F6F',
    imageBorder: '#F3F0FE',
    shoppingCartSeparator: '#f4f4f4',
  },
  effects: {
    checkboxShadow: '0px 1px 7px rgba(93, 56, 192, 0.4);',
    filterFrameShadow: '0px 6px 24px rgba(93, 62, 188, 0.04);',
  },
  dimensions: {
    borderRadius: '2px',
  },
} as const;

export default theme;

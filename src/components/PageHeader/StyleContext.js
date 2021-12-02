import { createContext } from 'react';

const StyleContext = createContext({
    style: 'dark',
    setStyle: () => {},
});

export default StyleContext;

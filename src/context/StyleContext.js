import { createContext, useState } from 'react';

const StyleContext = createContext({
    style: 'light',
    setStyle: () => {},
});

const StyleProvider = ({ children }) => {
    const [ state, setState ] = useState({});

    return (
        <StyleContext.Provider value={[ state, setState ]}>
            {children}
        </StyleContext.Provider>
    );
};

export { StyleContext, StyleProvider };

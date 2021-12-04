import { createContext, useState } from 'react';

export const StyleContext = createContext();

export function withStyleContext(Component) {
    return function WrapperComponent(props) {
        const [ style, setStyle ] = useState('light');

        return (
            <StyleContext.Provider value={{ style, setStyle }}>
                <Component {...props} />
            </StyleContext.Provider>
        );
    };
}

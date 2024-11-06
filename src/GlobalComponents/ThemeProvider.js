import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

const ThemeProvider = (props) => {
    // Set initial state based on localStorage or a default value
    const savedTheme = localStorage.getItem('theme');
    // Check if the savedTheme is valid JSON or not
    const initialTheme = savedTheme ? (savedTheme === 'dark' || savedTheme === 'light' ? savedTheme : 'light') : 'light';
    
    const [theme, setTheme] = useState(initialTheme);
    
    useEffect(() => {
        // Store the theme as a string (no need to JSON.stringify if we're just storing 'dark' or 'light')
        localStorage.setItem('theme', theme);
    }, [theme]);

    const setThemeMode = (mode) => setTheme(mode);

    return (
        <ThemeContext.Provider value={{ theme, setThemeMode }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

const useThemeHook = () => {
    const { theme } = useContext(ThemeContext);
    return [theme];
}

export { ThemeProvider, ThemeContext, useThemeHook };

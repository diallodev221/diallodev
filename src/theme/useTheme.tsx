import { createContext,useEffect, useContext, useState, ReactNode, useMemo } from 'react';

interface ThemeContextType {
    isDarkMode: boolean;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isDarkMode, setIsDarkMode] = useState(true);

    useEffect(() => {
      const body = document.body;
      if (isDarkMode) {
          body.classList.remove("light-mode");
    } else{
          body.classList.add("light-mode");
      }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
    };

    const value = useMemo(() => ({ isDarkMode, toggleTheme }), [isDarkMode]);

    return (
    <ThemeContext.Provider value={value}>
        {children}
    </ThemeContext.Provider>
    );
}

export const useTheme = (): ThemeContextType => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};
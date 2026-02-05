import { useTheme } from '../contexts/ThemeContext';
import './ThemeToggle.css';

const ThemeToggle = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="theme-toggle-wrapper">
            <span className="theme-label">{theme === 'light' ? '☀️' : '🌙'}</span>
            <label className="theme-toggle">
                <input
                    type="checkbox"
                    checked={theme === 'dark'}
                    onChange={toggleTheme}
                    aria-label="Toggle dark mode"
                />
                <span className="toggle-slider"></span>
            </label>
        </div>
    );
};

export default ThemeToggle;

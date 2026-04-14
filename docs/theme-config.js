/**
 * Theme switcher configuration
 *
 * Enables interactive theme switching in documentation
 * with live preview of component color schemes.
 */

// Available themes for live preview
const THEME_OPTIONS = {
    'default': {
        'name': 'Default Blue',
        'colors': {
            'accent': '#2980b9',
            'success': '#27ae60',
            'warning': '#e67e22',
            'danger': '#c0392b',
            'bg': '#ffffff',
            'surface': '#f8f8f8',
            'text': '#222222',
        }
    },
    'purple': {
        'name': 'Purple',
        'colors': {
            'accent': '#6366f1',
            'success': '#10b981',
            'warning': '#f59e0b',
            'danger': '#ef4444',
            'bg': '#faf5ff',
            'surface': '#f5f5ff',
            'text': '#1a1a2e',
        }
    },
    'green': {
        'name': 'Green',
        'colors': {
            'accent': '#10b981',
            'success': '#059669',
            'warning': '#f59e0b',
            'danger': '#dc2626',
            'bg': '#f0fdf4',
            'surface': '#dcfce7',
            'text': '#14532d',
        }
    },
    'orange': {
        'name': 'Orange',
        'colors': {
            'accent': '#f59e0b',
            'success': '#10b981',
            'warning': '#d97706',
            'danger': '#dc2626',
            'bg': '#fffbeb',
            'surface': '#ffedd5',
            'text': '#451a03',
        }
    },
    'pink': {
        'name': 'Pink',
        'colors': {
            'accent': '#ec4899',
            'success': '#10b981',
            'warning': '#f59e0b',
            'danger': '#dc2626',
            'bg': '#fdf2f8',
            'surface': '#fce7f3',
            'text': '#831843',
        }
    },
    'dark': {
        'name': 'Dark',
        'colors': {
            'accent': '#5dade2',
            'success': '#34d399',
            'warning': '#fbbf24',
            'danger': '#f87171',
            'bg': '#1a1a1a',
            'surface': '#242424',
            'text': '#e0e0e0',
        }
    },
};

// Get current theme colors for component examples
function getThemeColors(themeName = 'default') {
    return THEME_OPTIONS[themeName]?.colors || THEME_OPTIONS['default'].colors;
}

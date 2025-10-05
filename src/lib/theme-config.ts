export const themeConfig = {
  colors: {
    // Primary colors
    primary: {
      50: 'hsl(214, 100%, 97%)',
      100: 'hsl(214, 95%, 93%)',
      200: 'hsl(213, 97%, 87%)',
      300: 'hsl(212, 96%, 78%)',
      400: 'hsl(213, 94%, 68%)',
      500: 'hsl(217, 91%, 60%)',
      600: 'hsl(221, 83%, 53%)',
      700: 'hsl(224, 76%, 48%)',
      800: 'hsl(226, 71%, 40%)',
      900: 'hsl(224, 64%, 33%)',
      950: 'hsl(226, 57%, 21%)',
    },
    
    // Secondary colors
    secondary: {
      50: 'hsl(210, 40%, 98%)',
      100: 'hsl(210, 40%, 96%)',
      200: 'hsl(214, 32%, 91%)',
      300: 'hsl(213, 27%, 84%)',
      400: 'hsl(215, 20%, 65%)',
      500: 'hsl(215, 16%, 47%)',
      600: 'hsl(215, 19%, 35%)',
      700: 'hsl(215, 25%, 27%)',
      800: 'hsl(217, 33%, 17%)',
      900: 'hsl(222, 84%, 5%)',
      950: 'hsl(229, 84%, 5%)',
    },
    
    // Accent colors (orange)
    accent: {
      50: 'hsl(33, 100%, 96%)',
      100: 'hsl(33, 100%, 90%)',
      200: 'hsl(32, 100%, 80%)',
      300: 'hsl(31, 100%, 68%)',
      400: 'hsl(28, 100%, 55%)',
      500: 'hsl(25, 95%, 53%)',
      600: 'hsl(22, 90%, 50%)',
      700: 'hsl(20, 90%, 48%)',
      800: 'hsl(18, 85%, 40%)',
      900: 'hsl(16, 80%, 33%)',
      950: 'hsl(14, 85%, 18%)',
    },
    
    // Success colors
    success: {
      50: 'hsl(138, 76%, 97%)',
      100: 'hsl(141, 84%, 93%)',
      200: 'hsl(141, 79%, 85%)',
      300: 'hsl(142, 76%, 73%)',
      400: 'hsl(142, 69%, 58%)',
      500: 'hsl(142, 71%, 45%)',
      600: 'hsl(142, 76%, 36%)',
      700: 'hsl(142, 72%, 29%)',
      800: 'hsl(143, 64%, 24%)',
      900: 'hsl(144, 61%, 20%)',
      950: 'hsl(145, 80%, 10%)',
    },
    
    // Warning colors
    warning: {
      50: 'hsl(48, 100%, 96%)',
      100: 'hsl(48, 100%, 88%)',
      200: 'hsl(48, 96%, 77%)',
      300: 'hsl(46, 95%, 61%)',
      400: 'hsl(43, 96%, 56%)',
      500: 'hsl(38, 92%, 50%)',
      600: 'hsl(32, 95%, 44%)',
      700: 'hsl(26, 90%, 37%)',
      800: 'hsl(23, 83%, 31%)',
      900: 'hsl(22, 78%, 26%)',
      950: 'hsl(20, 92%, 14%)',
    },
    
    // Error colors
    error: {
      50: 'hsl(0, 86%, 97%)',
      100: 'hsl(0, 93%, 94%)',
      200: 'hsl(0, 96%, 89%)',
      300: 'hsl(0, 94%, 82%)',
      400: 'hsl(0, 91%, 71%)',
      500: 'hsl(0, 84%, 60%)',
      600: 'hsl(0, 72%, 51%)',
      700: 'hsl(0, 74%, 42%)',
      800: 'hsl(0, 70%, 35%)',
      900: 'hsl(0, 63%, 31%)',
      950: 'hsl(0, 75%, 15%)',
    },
    
    // Neutral colors
    neutral: {
      50: 'hsl(0, 0%, 100%)',
      100: 'hsl(0, 0%, 96%)',
      200: 'hsl(0, 0%, 90%)',
      300: 'hsl(0, 0%, 83%)',
      400: 'hsl(0, 0%, 64%)',
      500: 'hsl(0, 0%, 45%)',
      600: 'hsl(0, 0%, 32%)',
      700: 'hsl(0, 0%, 25%)',
      800: 'hsl(0, 0%, 15%)',
      900: 'hsl(0, 0%, 9%)',
      950: 'hsl(0, 0%, 4%)',
    },
  },
  
  // Semantic color mappings
  semantic: {
    background: {
      primary: 'var(--color-background-primary)',
      secondary: 'var(--color-background-secondary)',
      tertiary: 'var(--color-background-tertiary)',
    },
    foreground: {
      primary: 'var(--color-foreground-primary)',
      secondary: 'var(--color-foreground-secondary)',
      tertiary: 'var(--color-foreground-tertiary)',
    },
    border: {
      primary: 'var(--color-border-primary)',
      secondary: 'var(--color-border-secondary)',
    },
    ring: 'var(--color-ring)',
  },
  
  // Spacing scale
  spacing: {
    xs: '0.25rem',    // 4px
    sm: '0.5rem',     // 8px
    md: '1rem',       // 16px
    lg: '1.5rem',     // 24px
    xl: '2rem',       // 32px
    '2xl': '3rem',    // 48px
    '3xl': '4rem',    // 64px
    '4xl': '6rem',    // 96px
  },
  
  // Border radius
  radius: {
    none: '0',
    sm: '0.125rem',   // 2px
    md: '0.375rem',   // 6px
    lg: '0.5rem',     // 8px
    xl: '0.75rem',    // 12px
    '2xl': '1rem',    // 16px
    full: '9999px',
  },
  
  // Shadows
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
    xl: '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
  },
} as const;

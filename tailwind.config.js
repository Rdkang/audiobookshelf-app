const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ['components/**/*.vue', 'layouts/**/*.vue', 'pages/**/*.vue', 'mixins/**/*.js', 'plugins/**/*.js'],
  theme: {
    extend: {
      screens: {
        short: { raw: '(max-height: 500px)' }
      },
      colors: {
        // Material You color system
        'md-sys-color-primary': 'rgb(var(--md-sys-color-primary) / <alpha-value>)',
        'md-sys-color-on-primary': 'rgb(var(--md-sys-color-on-primary) / <alpha-value>)',
        'md-sys-color-primary-container': 'rgb(var(--md-sys-color-primary-container) / <alpha-value>)',
        'md-sys-color-on-primary-container': 'rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)',
        'md-sys-color-secondary': 'rgb(var(--md-sys-color-secondary) / <alpha-value>)',
        'md-sys-color-on-secondary': 'rgb(var(--md-sys-color-on-secondary) / <alpha-value>)',
        'md-sys-color-secondary-container': 'rgb(var(--md-sys-color-secondary-container) / <alpha-value>)',
        'md-sys-color-on-secondary-container': 'rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)',
        'md-sys-color-tertiary': 'rgb(var(--md-sys-color-tertiary) / <alpha-value>)',
        'md-sys-color-on-tertiary': 'rgb(var(--md-sys-color-on-tertiary) / <alpha-value>)',
        'md-sys-color-tertiary-container': 'rgb(var(--md-sys-color-tertiary-container) / <alpha-value>)',
        'md-sys-color-on-tertiary-container': 'rgb(var(--md-sys-color-on-tertiary-container) / <alpha-value>)',
        'md-sys-color-error': 'rgb(var(--md-sys-color-error) / <alpha-value>)',
        'md-sys-color-on-error': 'rgb(var(--md-sys-color-on-error) / <alpha-value>)',
        'md-sys-color-error-container': 'rgb(var(--md-sys-color-error-container) / <alpha-value>)',
        'md-sys-color-on-error-container': 'rgb(var(--md-sys-color-on-error-container) / <alpha-value>)',
        'md-sys-color-surface': 'rgb(var(--md-sys-color-surface) / <alpha-value>)',
        'md-sys-color-on-surface': 'rgb(var(--md-sys-color-on-surface) / <alpha-value>)',
        'md-sys-color-surface-variant': 'rgb(var(--md-sys-color-surface-variant) / <alpha-value>)',
        'md-sys-color-on-surface-variant': 'rgb(var(--md-sys-color-on-surface-variant) / <alpha-value>)',
        'md-sys-color-surface-container': 'rgb(var(--md-sys-color-surface-container) / <alpha-value>)',
        'md-sys-color-surface-container-high': 'rgb(var(--md-sys-color-surface-container-high) / <alpha-value>)',
        'md-sys-color-surface-container-highest': 'rgb(var(--md-sys-color-surface-container-highest) / <alpha-value>)',
        'md-sys-color-surface-container-low': 'rgb(var(--md-sys-color-surface-container-low) / <alpha-value>)',
        'md-sys-color-surface-container-lowest': 'rgb(var(--md-sys-color-surface-container-lowest) / <alpha-value>)',
        'md-sys-color-outline': 'rgb(var(--md-sys-color-outline) / <alpha-value>)',
        'md-sys-color-outline-variant': 'rgb(var(--md-sys-color-outline-variant) / <alpha-value>)',
        'md-sys-color-inverse-surface': 'rgb(var(--md-sys-color-inverse-surface) / <alpha-value>)',
        'md-sys-color-inverse-on-surface': 'rgb(var(--md-sys-color-inverse-on-surface) / <alpha-value>)',
        'md-sys-color-inverse-primary': 'rgb(var(--md-sys-color-inverse-primary) / <alpha-value>)',
        'md-sys-color-shadow': 'rgb(var(--md-sys-color-shadow) / <alpha-value>)',
        'md-sys-color-scrim': 'rgb(var(--md-sys-color-scrim) / <alpha-value>)',

        // Legacy color mappings for backward compatibility
        bg: 'rgb(var(--md-sys-color-surface) / <alpha-value>)',
        'bg-hover': 'rgb(var(--md-sys-color-surface-container-high) / <alpha-value>)',
        fg: 'rgb(var(--md-sys-color-on-surface) / <alpha-value>)',
        'fg-muted': 'rgb(var(--md-sys-color-on-surface-variant) / <alpha-value>)',
        secondary: 'rgb(var(--md-sys-color-secondary) / <alpha-value>)',
        primary: 'rgb(var(--md-sys-color-primary) / <alpha-value>)',
        border: 'rgb(var(--md-sys-color-outline-variant) / <alpha-value>)',
        'bg-toggle': 'rgb(var(--md-sys-color-surface-variant) / <alpha-value>)',
        'bg-toggle-selected': 'rgb(var(--md-sys-color-secondary-container) / <alpha-value>)',
        'track-cursor': 'rgb(var(--md-sys-color-primary) / <alpha-value>)',
        track: 'rgb(var(--md-sys-color-outline-variant) / <alpha-value>)',
        'track-buffered': 'rgb(var(--md-sys-color-surface-container-high) / <alpha-value>)',
        accent: 'rgb(var(--md-sys-color-tertiary) / <alpha-value>)',
        error: 'rgb(var(--md-sys-color-error) / <alpha-value>)',
        info: 'rgb(var(--md-sys-color-primary) / <alpha-value>)',
        success: 'rgb(var(--md-sys-color-tertiary) / <alpha-value>)',
        successDark: 'rgb(var(--md-sys-color-tertiary-container) / <alpha-value>)',
        warning: 'rgb(var(--md-sys-color-error) / <alpha-value>)'
      },
      cursor: {
        none: 'none'
      },
      borderRadius: {
        none: '0px',
        xs: '4px',
        sm: '8px',
        md: '12px',
        lg: '16px',
        xl: '28px',
        full: '9999px',
        // Material You shape tokens
        'shape-corner-none': '0px',
        'shape-corner-extra-small': '4px',
        'shape-corner-small': '8px',
        'shape-corner-medium': '12px',
        'shape-corner-large': '16px',
        'shape-corner-extra-large': '28px',
        'shape-corner-full': '9999px'
      },
      boxShadow: {
        // Material You elevation system
        'elevation-0': 'none',
        'elevation-1': '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        'elevation-2': '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
        'elevation-3': '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
        'elevation-4': '0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
        'elevation-5': '0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)'
      },
      fontFamily: {
        sans: ['Source Sans Pro', ...defaultTheme.fontFamily.sans],
        mono: ['Ubuntu Mono', ...defaultTheme.fontFamily.mono]
      },
      fontSize: {
        xxs: '0.625rem',
        // Material You typography scale
        'display-large': ['57px', { lineHeight: '64px', fontWeight: '400' }],
        'display-medium': ['45px', { lineHeight: '52px', fontWeight: '400' }],
        'display-small': ['36px', { lineHeight: '44px', fontWeight: '400' }],
        'headline-large': ['32px', { lineHeight: '40px', fontWeight: '400' }],
        'headline-medium': ['28px', { lineHeight: '36px', fontWeight: '400' }],
        'headline-small': ['24px', { lineHeight: '32px', fontWeight: '400' }],
        'title-large': ['22px', { lineHeight: '28px', fontWeight: '400' }],
        'title-medium': ['16px', { lineHeight: '24px', fontWeight: '500' }],
        'title-small': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'body-large': ['16px', { lineHeight: '24px', fontWeight: '400' }],
        'body-medium': ['14px', { lineHeight: '20px', fontWeight: '400' }],
        'body-small': ['12px', { lineHeight: '16px', fontWeight: '400' }],
        'label-large': ['14px', { lineHeight: '20px', fontWeight: '500' }],
        'label-medium': ['12px', { lineHeight: '16px', fontWeight: '500' }],
        'label-small': ['11px', { lineHeight: '16px', fontWeight: '500' }]
      },
      spacing: {
        18: '4.5rem'
      },
      height: {
        18: '4.5rem'
      },
      maxWidth: {
        24: '6rem'
      },
      minWidth: {
        4: '1rem',
        8: '2rem',
        10: '2.5rem',
        12: '3rem',
        16: '4rem'
      },
      minHeight: {
        12: '3rem'
      }
    }
  },
  plugins: []
}

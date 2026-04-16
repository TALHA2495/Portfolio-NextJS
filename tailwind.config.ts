import type { Config } from "tailwindcss";

const config: Config = {
  // ─── Dark mode is class-based (toggled via <html class="dark">) ───────────
  darkMode: "class",

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    extend: {
      // ─── Color Tokens ───────────────────────────────────────────────────────
      colors: {
        primary:                    "#00daf3",
        "primary-fixed":            "#9cf0ff",
        "primary-fixed-dim":        "#00daf3",
        "primary-container":        "#009fb2",
        "on-primary":               "#00363d",
        "on-primary-fixed":         "#001f24",
        "on-primary-fixed-variant": "#004f58",
        "on-primary-container":     "#002f35",
        "inverse-primary":          "#006875",

        secondary:                    "#cdbdff",
        "secondary-fixed":            "#e8deff",
        "secondary-fixed-dim":        "#cdbdff",
        "secondary-container":        "#5203d5",
        "on-secondary":               "#370096",
        "on-secondary-fixed":         "#20005f",
        "on-secondary-fixed-variant": "#4f00d0",
        "on-secondary-container":     "#c0acff",

        tertiary:                    "#adc7ff",
        "tertiary-fixed":            "#d8e2ff",
        "tertiary-fixed-dim":        "#adc7ff",
        "tertiary-container":        "#4a8eff",
        "on-tertiary":               "#002e68",
        "on-tertiary-fixed":         "#001a41",
        "on-tertiary-fixed-variant": "#004493",
        "on-tertiary-container":     "#00285b",

        error:                "#ffb4ab",
        "error-container":    "#93000a",
        "on-error":           "#690005",
        "on-error-container": "#ffdad6",

        background:                   "#111316",
        "surface":                    "#111316",
        "surface-dim":                "#111316",
        "surface-bright":             "#37393d",
        "surface-container-lowest":   "#0c0e11",
        "surface-container-low":      "#1a1c1f",
        "surface-container":          "#1e2023",
        "surface-container-high":     "#282a2d",
        "surface-container-highest":  "#333538",
        "surface-tint":               "#00daf3",
        "surface-variant":            "#333538",
        "inverse-surface":            "#e2e2e6",
        "inverse-on-surface":         "#2f3034",

        "on-background":       "#e2e2e6",
        "on-surface":          "#e2e2e6",
        "on-surface-variant":  "#c1c6d7",

        outline:         "#8b90a0",
        "outline-variant": "#414754",
      },

      borderRadius: {
        DEFAULT: "0.25rem",
        sm:      "0.375rem",
        md:      "0.5rem",
        lg:      "0.5rem",
        xl:      "0.75rem",
        "2xl":   "1rem",
        "3xl":   "1.5rem",
        full:    "9999px",
      },

      fontFamily: {
        headline: ["Inter", "sans-serif"],
        body:     ["Manrope", "sans-serif"],
        label:    ["Space Grotesk", "sans-serif"],
        serif:    ["Playfair Display", "serif"],
      },

      fontSize: {
        "display-lg":  ["3.5rem",   { lineHeight: "1",    letterSpacing: "-0.02em", fontWeight: "900" }],
        "headline-md": ["1.75rem",  { lineHeight: "1.2",  letterSpacing: "-0.01em", fontWeight: "500" }],
        "title-lg":    ["1.375rem", { lineHeight: "1.4",  letterSpacing: "0",       fontWeight: "600" }],
        "body-lg":     ["1rem",     { lineHeight: "1.6",  letterSpacing: "0"                          }],
        "label-md":    ["0.75rem",  { lineHeight: "1",    letterSpacing: "0.05em",  fontWeight: "500" }],
      },

      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
        "26": "6.5rem",
        "30": "7.5rem",
        "34": "8.5rem",
        "36": "9rem",
        "38": "9.5rem",
      },

      boxShadow: {
        "ambient":    "0 20px 40px rgba(0,0,0,0.25)",
        "glow-primary": "0 0 20px rgba(0,218,243,0.10)",
        "glass":      "0 8px 32px rgba(0,0,0,0.30)",
      },

      backdropBlur: {
        xs:  "4px",
        sm:  "8px",
        md:  "12px",
        lg:  "16px",
        xl:  "20px",
        "2xl": "24px",
      },

      keyframes: {
        blink: {
          "0%, 100%": { borderColor: "transparent" },
          "50%":      { borderColor: "#00daf3" },
        },
        "fade-up": {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
      },

      animation: {
        blink:    "blink 0.75s step-end infinite",
        "fade-up":  "fade-up 0.5s ease-out both",
        float:    "float 6s ease-in-out infinite",
      },

      backgroundImage: {
        "dot-grid": "radial-gradient(#414754 0.5px, transparent 0.5px)",
        "cta-gradient": "linear-gradient(135deg, #00daf3, #009fb2)",
        "cta-gradient-r": "linear-gradient(to right, #00daf3, #009fb2)",
        "skew-primary": "linear-gradient(to right, rgba(0,218,243,0.05), transparent)",
      },

      backgroundSize: {
        "dot-grid": "24px 24px",
      },
    },
  },

  plugins: [],
};

export default config;

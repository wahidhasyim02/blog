/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./themes/mykios/**/*.html",
    "./themes/mykios/content/**/*.{html,md}",
    "./themes/mykios/layouts/**/*.html",
    "./content/**/*.{html,md}",
    "./layouts/**/*.html",
  ],
  important: true,
  theme: {
    extend: {
      animation: {
        blob: "blob 7s infinite",
      },
      animationDelay: {
        1: "1s", // ini menambahkan delay 1 detik
        2: "2s",
        3: "3s",
        4: "4s",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "33%": {
            transform: "translate(120px, 100px) scale(1.1)",
          },
          "66%": {
            transform: "translate(-20px, 200px) scale(0.9)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
      },

      aspectRatio: {
        auto: "auto",
        square: "1 / 1",
        video: "16 / 9",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        // tambahkan ukuran blur lainnya sesuai kebutuhan
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        dosis: ["Dosis"],
        serif: ["Noto Serif", "ui-serif", "serif"],
      },
      backgroundImage: {
        heroLight: "url('/images/bg.png')",
        heroDark: "url('/images/bg.png')",
      },

      spacing: {
        1.5: "7px",
        15: "60px",
        17: "68px",
        17.5: "72px",
        18: "74px",
        "2%": "2%",
        "8%": "8%",
        22.5: "5.625rem",
        175: "43.75rem",
        "30%": "30%",
        "50%": "50%",
        "65%": "65%",
        "75%": "75%",
        "85%": "85%",
        "95%": "95%",
        "96%": "96%",
        "98%": "98%",
      },
      zIndex: {
        1000: "1000",
        1100: "1100",
        1200: "1200",
      },
      colors: {
        purdark: {
          50: "#F9F9FB",
          100: "#F4F3F6",
          200: "#E7E5EB",
          300: "#D3D1DB",
          400: "#A19CAF",
          500: "#6E6B80",
          600: "#514B63",
          700: "#3B3751",
          800: "#221F37",
          900: "#141127",
          950: "#060312",
        },
        bluev3: {
          50: "#EEF6FF",
          100: "#DCEDFF",
          200: "#B6DAFF",
          300: "#8BC5FF",
          400: "#54A9FF",
          500: "#1479DE",
          600: "#0D64BA",
          700: "#0B59A7",
          800: "#115395",
          900: "#044281",
        },
        grayv3: {
          50: "#EFEFEF",
          100: "#E2E2E2",
          200: "#DDDBDB",
          300: "#B6B5B5",
          400: "#858585",
          500: "#626262",
          600: "#4F4E4E",
          700: "#313131",
          800: "#292929",
          900: "#171717",
          950: "#0B0B0B",
        },
        xai: {
          50: "#F4F6F7",
          100: "#EAF1F4",
          200: "#DCE6EB",
          300: "#BCCCD3",
          400: "#86949B",
          500: "#64767E",
          600: "#4C5F6B",
          700: "#3D4E5A",
          800: "#202A31",
          900: "#151C22",
          950: "#020911",
        },
        lightblue: {
          50: "#F0F9FF",
          100: "#E0F2FE",
          200: "#BAE6FD",
          300: "#7DD3FC",
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
          800: "#075985",
          900: "#0C4A6E",
          950: "#033450",
        },
        woodsmoke: {
          50: "#f7f6f9",
          100: "#efedf1",
          200: "#d9d6e1",
          300: "#b8b3c6",
          400: "#908aa6",
          500: "#736b8c",
          600: "#5e5673",
          700: "#4d465e",
          800: "#423d4f",
          900: "#3a3644",
          950: "#0c0b0e",
        },
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const delays = theme("animationDelay", {});
      const utilities = Object.entries(delays).map(([key, value]) => {
        return {
          [`.${e(`delay-${key}`)}`]: {
            "animation-delay": value,
          },
        };
      });

      addUtilities(utilities, ["responsive"]);
    },
  ],
  darkMode: "class",
};

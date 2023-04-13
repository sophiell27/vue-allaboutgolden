/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.{vue,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    container: {
      center: true,
      padding: '12px',
    },
    extend: {
      colors: {
        'primary': "#E8C300",
        "secondary": "#907910",
        "highlight": "#ED8408",
        "dark": "#181818",
        fog: {
          "500": "#666666",
          "400": "#9F9F9F",
          "300": "#D4D4D4",
          "200": "#E9E9E9",
          "100": "#F7F7F7",

        }
      },
      spacing: {
        "4.5": "18px",
        "13": "54px",
        "15": "60px",
        "21": "84px"
      },
      backgroundImage: {
        'hero-pattern-sm': "url('/src/assets/images/layout/mainBanner-sm.svg')",
        'hero-pattern-lg': "url('/src/assets/images/layout/mainBanner-lg.svg')",
        'footerCtaBg-sm': "url('/src/assets/images/layout/joinMemberImg-sm.svg')",
        'footerCtaBg-lg': "url('/src/assets/images/layout/dogAndHumanImg-lg.jpg')",
        'banner-lg': "url('/src/assets/images/layout/banner-lg.svg')"
      },
      fontSize: {
        "h1": ["48px", "1.2"],  // 57.6pc
        "h2": ["32px", "1.2"], // 38.4px
        "h3": ["28px", "1.2"], //33.6px
        "h4": ["24px", "1.2"], //28.8px
        "h5": ["20px", "1.2"], //24px
        "h6": ["16px", "1.2"],  // 19px
        "4.5": ["18px", "27px"]
      },
      backgroundSize: {
        '100': '100%'
      },
      borderRadius: {
        "lg2": "10px",
        "2.5xl": "20px",
      },
      boxShadow: {
        'lg2': '0 8px 16px 0 rgba(0, 0, 0, 0.16)',
      },
      fontFamily: {
        "primary": "cwTeXYen",
        "inter": "Inter",
      }

    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

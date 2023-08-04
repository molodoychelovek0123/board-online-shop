/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {

      center: true,
      padding: '1rem',
      screens: {
        sm: "90%",
        md: "90%",
        lg: "1310px", // max-width for lg and xl screens
        xl: "1310px", // max-width for lg and xl screens
      },
    },
    extend: {
      // Shades for each color from 50 to 900 (in increments of 100)
      colors: () => ({
        'white': '#fff',
        'white-50': '#fafafa',
        'white-100': '#f5f5f5',
        'white-200': '#f0f0f0',
        'white-300': '#ebebeb',
        'white-400': '#e0e0e0',
        'white-500': '#d5d5d5',
        'white-600': '#c0c0c0',
        'white-700': '#aaaaaa',
        'white-800': '#959595',
        'white-900': '#808080',
        'black': '#454451',
        'black-50': '#8c8c88',
        'black-100': '#80807c',
        'black-200': '#73736f',
        'black-300': '#676765',
        'black-400': '#595856',
        'black-500': '#454451',
        'black-600': '#3d3d3b',
        'black-700': '#323239',
        'black-800': '#26262e',
        'black-900': '#1b1b20',
        'gray': '#454450',
        'gray-50': '#484847',
        'gray-100': '#5a5958',
        'gray-200': '#6c6c6b',
        'gray-300': '#7f7f7e',
        'gray-400': '#c7c7c7', // for bg-cards
        'gray-500': '#454450',
        'gray-600': '#a3a3a3',
        'gray-700': '#a2a2a8',
        'gray-800': '#ccc',
        'gray-900': '#dbdbdb',
        'solid-color': '#76b1f6',
        'solid-color-50': '#b3c0e6',
        'solid-color-100': '#a0b1e8',
        'solid-color-200': '#8da2e9',
        'solid-color-300': '#7993eb',
        'solid-color-400': '#6685ed',
        'solid-color-500': '#90abf2',
        'solid-color-600': '#4d76ee',
        'solid-color-700': '#3b69ef',
        'solid-color-800': '#285aef',
        'solid-color-900': '#174bef',
      }),
      fontSize: {
        '4.5xl': '40px',
        '5.5xl': '60px',
      },

      borderRadius: {
        '20': '20px',
      },
      height: {
        '645': '645px',
        '600': '600px',
        '414': '414px',
        '256': '256px',
        '900': '900px',
        'i': 'inherit',
      },
      minHeight:{
        '645': '645px',
        '600': '600px',
        '550': '550px',
        '500': '500px',
        '414': '414px',
        '340': '340px',
        '256': '256px',
        '208': '208px',
        '176': '176px',
        '144': '144px',

      },
      minWidth:{
        '550': '550px',
        '200': '200px',
        '120': '120px',
      },
      maxWidth:{
        '1xl': "37.25rem",
        '256': "256px",
        '352': "22rem",
        '944': '59rem'
      },
      padding:{
        '9' : '2.25rem'
      },
      margin:{
        '13': "3.25rem",
        '15': "3.75rem"
      },

      lineHeight:{
        "title": ".908 !important",
        "text": "1.0833 !important"
      },
      flexBasis:{
        "custom": "22.129%"
      }
    },
  },
  plugins: [],
}

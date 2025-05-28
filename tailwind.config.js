/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}', // src 폴더 내부의 모든 JSX/TSX 파일
    './pages/**/*.{js,ts,jsx,tsx}', // pages 폴더 내부의 모든 JSX/TSX 파일 (Next.js 기본 구조 지원)
    './components/**/*.{js,ts,jsx,tsx}', // components 폴더 내부의 모든 JSX/TSX 파일
  ],
  theme: {
    extend: {}, // 원하는 테마 수정 시 사용
  },
  plugins: [], // 추가 플러그인이 있을 경우 여기 추가
};
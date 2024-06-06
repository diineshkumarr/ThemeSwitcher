
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './Context/theme'
import Card from './Components/Card'
import ThemeBtn from './Components/ThemeBtn'

function App() {
  const [themeMode, setThemeMode] = useState('light')

  const lightTheme = () => {
    setThemeMode('light')
  }
  const darkTheme = () => {
    setThemeMode('dark')
  }

  useEffect(() => {
    document.querySelector('html').classList.remove('light', 'dark')
    document.querySelector('html').classList.add(themeMode)
  },[themeMode])


  return (
    <ThemeProvider value = {{themeMode, lightTheme, darkTheme}}>
    <div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
        <div className="w-full px-5 mx-auto flex justify-end mb-4">
            <ThemeBtn />
        </div>

        <div className="flex justify-evenly w-full">
            <Card user={'DINESH KUMAR (Frontend & Backend Developer)'} development={'React Developer'} butn={'Like'} src={'./src/image/20230606130752_IMG_2858.JPG'}/>
            <Card user={'SHIVAM RANA (Full Stack Developer)'} development={'React Developer'} butn={'Comment'} src={'./src/image/Screenshot 2024-05-14 155031.png'}/>
            <Card hight={'h-60'} user={'ABHISHEK BALOURIA (Web Developer)'} development={'Adobe Photoshop'} butn={'Share'} src={"./src/image/WIN_20240328_09_34_26_Pro.jpg"}/>
            
        </div>
    </div>
</div>
</ThemeProvider>
  )
}

export default App

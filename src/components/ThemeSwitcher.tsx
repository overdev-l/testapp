"use client";

import {useTheme} from "next-themes";
import { useEffect, useState } from "react";
import { FiSun, FiMoon } from "react-icons/fi";
export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if(!mounted || !theme) return null
  if (theme === 'light') return <div className="w-8 h-8 rounded-md hover:bg-foreground flex items-center justify-center hover:cursor-pointer">
    <FiMoon onClick={() => setTheme('dark')} size={20}/>
  </div>

  return <div className="w-8 h-8 rounded-md hover:bg-foreground flex items-center justify-center hover:cursor-pointer">
    <FiSun onClick={() => setTheme('light')} color="white" size={20} />
  </div>
};
import { toggleDocumentAttribute } from '@/utils/layout'
import { createContext, useContext, useMemo, useState, useEffect } from 'react'
const LayoutContext = createContext(undefined)
function useLayoutContext() {
  const context = useContext(LayoutContext)
  if (context === undefined) {
    throw new Error('useLayoutContext must be used within an LayoutProvider')
  }
  return context
}
const storageThemeKey = 'MIZZLE_THEME_KEY'
const themeKey = 'data-bs-theme'
const LayoutProvider = ({ children }) => {
  // Always use dark theme, no switching
  const settings = { theme: 'dark' }
  // Set dark mode attribute on mount
  useEffect(() => {
    toggleDocumentAttribute(themeKey, 'dark')
    localStorage.setItem(storageThemeKey, 'dark')
  }, [])
  return <LayoutContext.Provider value={settings}>{children}</LayoutContext.Provider>
}
export { useLayoutContext, LayoutProvider }

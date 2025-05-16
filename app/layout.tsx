import type { Metadata } from 'next'
import './globals.css'
import { Montserrat, Fira_Code } from 'next/font/google'
import Navigation from './components/layout/Navigation'
import WaterBackground from './components/ui/WaterBackground'
import { ThemeProvider } from './context/ThemeContext'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abdirahman Moualem - Software Engineer & ML Enthusiast',
  description: 'Personal portfolio of Abdirahman Moualem, a Computer Science and Engineering student at Ohio State University specializing in software engineering and machine learning.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${montserrat.variable} ${firaCode.variable} font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300`}>
        <ThemeProvider>
          <WaterBackground />
          <Navigation />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 
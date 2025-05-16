'use client';

import { useTheme } from '../../context/ThemeContext'

export default function NatureBackground() {
  const { theme } = useTheme()
  const variant = theme === 'dark' ? 'dark' : 'light'

  return (
    <div className="fixed inset-0 -z-10">
      <div 
        className={`absolute inset-0 ${
          variant === 'light' 
            ? 'bg-gradient-to-br from-green-50 to-blue-50' 
            : 'bg-gradient-to-br from-gray-900 to-blue-900'
        } opacity-40`}
      />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
    </div>
  )
}

// Add this to your globals.css
/*
@keyframes float {
  0%, 100% { transform: translateY(0) rotate(0deg); }
  25% { transform: translateY(-20px) rotate(5deg); }
  75% { transform: translateY(20px) rotate(-5deg); }
}

.leaf-animation {
  position: absolute;
  width: 20px;
  height: 20px;
  background: linear-gradient(45deg, #4CAF50, #2E7D32);
  clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
  animation: float 15s ease-in-out infinite;
  opacity: 0.1;
}

.animation-delay-1 {
  animation-delay: -5s;
  left: 25%;
  top: 30%;
}

.animation-delay-2 {
  animation-delay: -10s;
  left: 75%;
  top: 60%;
}
*/ 
import { motion, HTMLMotionProps } from 'framer-motion'
import Link from 'next/link'

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "className" | "children"> {
  variant?: 'primary' | 'secondary' | 'outline' | 'glass'
  size?: 'sm' | 'md' | 'lg'
  loading?: boolean
  className?: string
  children: React.ReactNode
  withGlow?: boolean
  href?: string
}

const variants = {
  primary: 'bg-primary text-white hover:bg-white hover:text-primary border-2 border-transparent hover:border-primary shadow-lg hover:shadow-gold',
  secondary: 'bg-mint text-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg',
  outline: 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white',
  glass: 'glass-effect text-primary hover:bg-white/30'
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
}

const ButtonContent = ({
  loading,
  children
}: {
  loading?: boolean
  children: React.ReactNode
}) => (
  <div className="flex items-center justify-center gap-2">
    {loading && (
      <svg
        className="animate-spin h-5 w-5"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    )}
    {children}
  </div>
)

export default function Button({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  loading = false,
  disabled,
  withGlow = false,
  href,
  ...props
}: ButtonProps) {
  const buttonClasses = `
    ${variants[variant]}
    ${sizes[size]}
    rounded-xl font-semibold
    transition-all duration-300 ease-in-out
    disabled:opacity-50 disabled:cursor-not-allowed
    ${withGlow ? 'animate-pulse-gold' : ''}
    ${className}
  `

  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        <ButtonContent loading={loading}>
          {children}
        </ButtonContent>
      </Link>
    )
  }

  return (
    <motion.button
      className={buttonClasses}
      disabled={disabled || loading}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      {...props}
    >
      <ButtonContent loading={loading}>
        {children}
      </ButtonContent>
    </motion.button>
  )
} 
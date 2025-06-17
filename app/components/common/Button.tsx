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
  primary: 'btn-primary',
  secondary: 'btn-secondary',
  outline: 'btn-outline',
  glass: 'glass-effect text-primary hover:bg-white/30 px-6 py-3 rounded-2xl border border-primary-100/30'
}

const sizes = {
  sm: 'px-6 py-2 text-sm',
  md: 'px-8 py-3 text-base',
  lg: 'px-10 py-4 text-lg'
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
      <div className="loading-spinner w-5 h-5" />
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
    ${variant !== 'glass' ? sizes[size] : ''}
    font-semibold
    transition-all duration-300 ease-in-out
    disabled:opacity-50 disabled:cursor-not-allowed
    ${withGlow ? 'animate-pulse-glow' : ''}
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
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      {...props}
    >
      <ButtonContent loading={loading}>
        {children}
      </ButtonContent>
    </motion.button>
  )
} 
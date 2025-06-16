import AnimatedSection from './AnimatedSection'

interface SectionTitleProps {
  title: string
  subtitle?: string
  center?: boolean
  withGlow?: boolean
  variant?: 'light' | 'dark'
}

export default function SectionTitle({
  title,
  subtitle,
  center = true,
  withGlow = false,
  variant = 'dark'
}: SectionTitleProps) {
  return (
    <AnimatedSection
      animation="slide-up"
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      <h2 className={`
        text-4xl md:text-5xl font-bold mb-6
        ${variant === 'dark' ? 'text-primary' : 'text-white'}
        ${withGlow ? 'drop-shadow-gold' : ''}
      `}>
        {title}
      </h2>
      {subtitle && (
        <p className={`
          text-lg md:text-xl max-w-3xl mx-auto
          ${variant === 'dark' ? 'text-gray-600' : 'text-white/80'}
        `}>
          {subtitle}
        </p>
      )}
    </AnimatedSection>
  )
} 
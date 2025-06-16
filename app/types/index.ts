export interface Instructor {
  id: number
  name: string
  role: string
  image: string
  education: string
  experience: string
  description: string
  expertise: string[]
}

export interface Course {
  id: number
  title: string
  description: string
  level: string
  duration: string
  features: string[]
}

export interface Review {
  id: number
  name: string
  course: string
  content: string
  image: string
  rating: number
}

export interface FAQ {
  id: number
  question: string
  answer: string
}

export interface ContactForm {
  name: string
  phone: string
  course: string
  message?: string
} 
import { motion } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

const testimonials = [
  {
    name: '김민준',
    course: '웹 개발 과정',
    content:
      '처음에는 코딩이 어려웠지만, 선생님들의 친절한 설명과 실습 위주의 수업 덕분에 이제는 자신감을 가지고 개발할 수 있게 되었습니다.',
    image: '/images/testimonial-1.jpg',
  },
  {
    name: '이서연',
    course: '코딩 기초 과정',
    content:
      '기초부터 차근차근 배울 수 있어서 좋았습니다. 특히 실무에서 사용되는 실제 예제들로 학습하여 더욱 효과적이었습니다.',
    image: '/images/testimonial-2.jpg',
  },
  {
    name: '박지훈',
    course: 'AI/데이터 사이언스 과정',
    content:
      '최신 트렌드를 반영한 커리큘럼과 실무 경험이 풍부한 강사진 덕분에 실제 프로젝트에 바로 적용할 수 있는 실력을 갖추게 되었습니다.',
    image: '/images/testimonial-3.jpg',
  },
  {
    name: '최유진',
    course: '앱 개발 과정',
    content:
      '체계적인 커리큘럼과 실습 환경이 매우 만족스러웠습니다. 현업에서 일하면서도 이곳에서 배운 내용들이 많은 도움이 되고 있습니다.',
    image: '/images/testimonial-4.jpg',
  },
]

export default function TestimonialsSection() {
  return (
    <section className="py-16 bg-mint">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            수강생 후기
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            엔게이지 아카데미와 함께 성장한 수강생들의 생생한 후기를 들어보세요
          </p>
        </motion.div>

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 h-full"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-primary">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500">{testimonial.course}</p>
                  </div>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {testimonial.content}
                </p>
                <div className="mt-4 flex justify-end">
                  <svg
                    className="w-8 h-8 text-mint"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
} 
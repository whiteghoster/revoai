"use client";
import { Star } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";

interface Testimonial {
  quote: string;
  highlight?: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

const testimonialKeys = [
  "jennifer", "lisa", "mike", "robert", "tom", "amanda",
  "james", "maria", "rachel", "carlos", "sarah", "david"
];

const testimonialImages: Record<string, string> = {
  jennifer: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150",
  lisa: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150",
  mike: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150",
  robert: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150",
  tom: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150",
  amanda: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150",
  james: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150",
  maria: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150",
  rachel: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150",
  carlos: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150",
  sarah: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150",
  david: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150",
};

function StarRating({ count = 5 }: { count?: number }) {
  return (
    <div className="flex gap-0.5 mb-3" data-testid="star-rating">
      {[...Array(count)].map((_, i) => (
        <Star key={i} className="h-4 w-4" fill="#FF7300" style={{ color: "#FF7300" }} data-testid={`star-${i}`} />
      ))}
    </div>
  );
}

export function TestimonialsSection() {
  const { t } = useTranslation();
  const shouldReduceMotion = useReducedMotion();

  const getTestimonials = (): Testimonial[] =>
    testimonialKeys.map(key => ({
      quote: t(`landing.testimonials.quotes.${key}.quote`, { appName: "Diploy" }),
      highlight: t(`landing.testimonials.quotes.${key}.highlight`),
      author: t(`landing.testimonials.quotes.${key}.author`),
      role: t(`landing.testimonials.quotes.${key}.role`),
      company: t(`landing.testimonials.quotes.${key}.company`),
      image: testimonialImages[key],
      rating: 5,
    }));

  const allTestimonials = getTestimonials();

  return (
    <section id="testimonials" className="py-20 md:py-28" style={{ background: "#ffffff" }} data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground"
            data-testid="testimonials-headline"
          >
            {t('landing.testimonials.title')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('landing.testimonials.subtitle', { appName: "Diploy" })}
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8" data-testid="testimonials-grid">
          {allTestimonials.slice(0, 6).map((testimonial, idx) => (
            <motion.div
              key={idx}
              initial={shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
              whileInView={shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-200"
              data-testid={`testimonial-card-${idx}`}
            >
              <StarRating count={testimonial.rating} />
              <p className="text-sm text-black mb-5 leading-relaxed italic" style={{ color: "#000000" }} data-testid={`testimonial-quote-${idx}`}>
                "{testimonial.quote}{testimonial.highlight ? ` ${testimonial.highlight}` : ""}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
                  <AvatarImage src={testimonial.image} alt={testimonial.author} className="object-cover" />
                  <AvatarFallback className="text-xs font-semibold" style={{ background: "#fff3ed", color: "#FF7300" }}>
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="font-semibold text-sm text-gray-900" data-testid={`testimonial-author-${idx}`}>
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-muted-foreground" style={{ color: "#000000" }} data-testid={`testimonial-role-${idx}`}>
                    {testimonial.role}, {testimonial.company}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;

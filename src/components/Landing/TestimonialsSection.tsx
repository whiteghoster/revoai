"use client";
import { Star } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useTranslation } from "react-i18next";

interface Testimonial {
  quote: string;
  highlight?: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}

const testimonialKeys = [
  "jennifer", "lisa", "mike", "robert", "tom", "amanda",
  "james", "maria", "rachel", "carlos", "sarah", "david"
];

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

  const getTestimonials = (): Testimonial[] =>
    testimonialKeys.map(key => ({
      quote: t(`landing.testimonials.quotes.${key}.quote`, { appName: "RevoAI" }),
      highlight: t(`landing.testimonials.quotes.${key}.highlight`),
      author: t(`landing.testimonials.quotes.${key}.author`),
      role: t(`landing.testimonials.quotes.${key}.role`),
      company: t(`landing.testimonials.quotes.${key}.company`),
      rating: 5,
    }));

  const allTestimonials = getTestimonials();

  return (
    <section id="testimonials" className="premium-overlap-section relative z-[70] -mt-6 md:-mt-12 py-20 md:py-28 overflow-hidden" style={{ background: "#f6f6ef" }} data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-foreground"
            data-testid="testimonials-headline"
          >
            {t('landing.testimonials.title')}
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('landing.testimonials.subtitle', { appName: "RevoAI" })}
          </p>
        </div>

        {/* 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8" data-testid="testimonials-grid">
          {allTestimonials.slice(0, 6).map((testimonial, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md hover:border-orange-200 transition-all duration-200"
              data-testid={`testimonial-card-${idx}`}
            >
              <StarRating count={testimonial.rating} />
              <p className="text-sm text-black mb-5 leading-relaxed italic" style={{ color: "#000000" }} data-testid={`testimonial-quote-${idx}`}>
                "{testimonial.quote}{testimonial.highlight ? ` ${testimonial.highlight}` : ""}"
              </p>
              <div className="flex items-center gap-3">
                <Avatar className="h-10 w-10">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
"use client";

import Image from "next/image";
import { useState } from "react";

const TESTIMONIALS = [
  {
    name: "Brooke Alexander",
    image: "/images/testimonial-brooke.jpg",
    text: "Michael Bernal is a rare kind of human and facilitator! One who effortlessly invites in a deep return to the body, while also invoking the wisdom of play, connection, and collaboration. In his contact improv series, the Art of Living, Michael holds a space for both physical and emotional contact to be explored. His skill as a teacher lies not only in his deep knowledge of contact improv and embodiment, but also in his capacity to hold a space where vulnerability and joy can co-exist. Every class with Michael feels like a return to what matters: presence, connection, and curiosity. He weaves technical guidance with intuitive emergence, creating openings for both beginners and seasoned movers to explore their own edges with care and courage. This work reminds us that being in true & meaningful contact with one another is one of the most natural and necessary acts of being alive. What emerges in his sessions is more than just movement - it's community, it's trust, it's the art of living!",
  },
  {
    name: "Amy Longe",
    image: "/images/testimonial-amy.jpg",
    text: "Michael is a gifted human with a passion for contact improvisation that is palpable. He is extremely present & attentive creating a safe space to explore CI. I always look forward and feel energized after class. I am so grateful to Michael for sharing contact improv with Denver.",
  },
  {
    name: "Gabrielle Hillis",
    image: "/images/testimonial-gabrielle.jpg",
    text: "For me, what is so enthralling and addictive about Michael's CI series is that they feel like laboratory spaces—places where we get to be true students of this sport, students of this art form. I was a highly competitive athlete for most of my life, and when I retired, I experienced an identity and purpose crisis. I deeply missed the mind-body connection required to excel in sport. Michael's classes have become that place for me again. I feel nourished, accomplished, fulfilled, and grounded when I am a student of contact improv, a student of my own body and mind, and a student of others. It is a brilliant and safe space curated for curiosity—where questions are welcomed, experiments unfold, and new concepts are continuously uncovered. Thank you, thank you, thank you for creating and holding this recurring space where mind meets body and body meets mind and we all learn together!",
  },
  {
    name: "Heidi Fredere",
    image: "/images/testimonial-heidi.jpg",
    text: "Michael's presence and ability to instruct and lead us as a group as well as hold the container was paramount. I left class every time feeling more connected to a community, more grounded, and with a much more regulated nervous system.",
  },
  {
    name: "Anastasia Hill",
    image: "/images/testimonial-anastasia.jpg",
    text: "I had no idea what I was getting into when I took Michael's Art of Living series, and was honestly hesitant bc not all dance spaces are as safe as they seem, but the container Michael creates is truly life changing. Michael has an almost therapeutic approach, focusing on somatic experience and self-awareness through platonic connection. This practice has softened my spirit to deeper connection and deepened my listening to both my own body and others'. Not only do I feel more embodied than I ever have, but I feel more regulated and full of love. 10/10 highly recommend his transformational teachings!",
  },
  {
    name: "Nick",
    image: "/images/testimonial-nick.jpg",
    text: "Michael's Art of Living series has been one of the most unique and special experiences of my life. I am so grateful for the connection, awareness, joy, laughter, and tears I have found here, and for the beautiful souls who co-create this truly magical and supportive space!",
  },
  {
    name: "Ashley Stenger",
    image: "/images/testimonial-ashley.jpg",
    text: "I have been in the dance world for many years, but just recently got introduced to contact improv. I was so nervous my first class, but the community and Michael made me feel so welcome. Emotions are talked about, there is support in every class if needed, and autonomy is first priority. I was pleasantly surprised at how I was able to do 'edgy' things for the first time in a while, like contact dancing with a partner. Most of my dance experience is solo, in community, but not partners. I have explored new edges of creativity, trust, surrender, and some pretty cool things my body can do, even more cool with the help from others! I highly recommend signing up for and being in the same room as Michael, such a special and beautifully grounded facilitator in a space that can be so ungrounding and intimidating.",
  },
  {
    name: "Ryan Greenhalgh",
    image: "/images/testimonial-ryan.jpg",
    text: "I would like to vouch for Michael's classes. They are a beautiful container to explore what it means to be human and feel safe and have fun. One of the greatest gifts in life is to learn from people who love what they teach and I can vouch that Michael loves contact improv.",
  },
  {
    name: "Adam Samuel Escobar",
    image: "/images/testimonial-adam.jpg",
    text: "Perfection is impossible and it stands in the way of authentic expression. Michael's Contact Improv courses helped me understand this in my core. The Art of Living has given me practices that allow me to experience authentic expression in ways I have never been able to.",
  },
  {
    name: "Matt Koch",
    image: "/images/testimonial-matt.jpg",
    text: "Finding Contact Improv through Michael's teaching has made an incredible impact on my life. I find myself feeling more confident and easy going in my daily social interactions. Michael's approach challenges students to recognize their boundaries and contemplate the invitation to push them.",
  },
  {
    name: "Austin Hammer",
    image: "/images/testimonial-austin.jpg",
    text: "For some time, I have been curious how dance might help me feel more grounded. I'm happy to have dipped my toe into that exploration in the supportive, accepting space that Michael cultivates. I know that they have left me feeling lighter than I have felt in a long time.",
  },
  {
    name: "Karina Okoren",
    image: "/images/testimonial-karina.jpg",
    text: "I'm a dance teacher and dancer and was amazed by Michael's wealth of knowledge paired with passion and kindness. It is rare in the dance community to find such a great blend of freedom and structure in a class. His series was seriously a highlight of my year last year and recommend it anyone and everyone! The community is so welcoming and warm and truly a no pressure learning environment where it feels safe and fun. I felt like it was a dose of therapy each week and practice life principles in a physical and relational way. Truly recommend!!!! Can't wait to do it again!!",
  },
] as const;

export function Testimonials() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    setCurrent(
      ((index % TESTIMONIALS.length) + TESTIMONIALS.length) %
        TESTIMONIALS.length
    );
  };

  const testimonial = TESTIMONIALS[current];

  return (
    <section className="py-24 px-6 bg-card/50">
      <div className="mx-auto max-w-4xl">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-16 text-foreground"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          Testimonials
        </h2>

        <div className="relative">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-20 h-20 rounded-full overflow-hidden mb-6 ring-2 ring-warm/30">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>

            <blockquote className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mb-8 min-h-[120px]">
              &ldquo;{testimonial.text}&rdquo;
            </blockquote>

            <p className="text-sm font-semibold text-warm tracking-wide uppercase">
              {testimonial.name}
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={() => goTo(current - 1)}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-warm/50 transition-all"
              aria-label="Previous testimonial"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M10 3L5 8L10 13" />
              </svg>
            </button>

            <div className="flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "bg-warm w-6"
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={() => goTo(current + 1)}
              className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-warm/50 transition-all"
              aria-label="Next testimonial"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                <path d="M6 3L11 8L6 13" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

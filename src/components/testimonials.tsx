"use client";

import Image from "next/image";
import { useState } from "react";
import { imagePath } from "@/lib/paths";

const TESTIMONIALS = [
  {
    name: "Amy Longe",
    image: imagePath("/images/testimonial-amy.jpg"),
    text: "Michael is a gifted human with a passion for contact improvisation that is palpable. He is extremely present & attentive creating a safe space to explore CI. The classes and community are nothing short of amazing. He layers many different exercises to build up a skill and walks around as we practice, sharing tips and tricks. I am relatively new to CI and feel it's the start of a new chapter filled with play, connection, co-regulation, body awareness, expression and most importantly, safety to explore touch with other humans. I always look forward and feel energized after class. I wish we could go for hours more! I am so grateful to Michael for sharing contact improv with Denver & I can't wait to keep learning and dancing with him, wherever CI takes him",
  },
  {
    name: "Brooke Alexander",
    image: imagePath("/images/testimonial-brooke.jpg"),
    text: "Michael Bernal is a rare kind of human and facilitator! One who effortlessly invites in a deep return to the body, while also invoking the wisdom of play, connection, and collaboration. In his contact improv series, the Art of Living, Michael holds a space for both physical and emotional contact to be explored. His skill as a teacher lies not only in his deep knowledge of contact improv and embodiment, but also in his capacity to hold a space where vulnerability and joy can co-exist. Every class with Michael feels like a return to what matters: presence, connection, and curiosity. He weaves technical guidance with intuitive emergence, creating openings for both beginners and seasoned movers to explore their own edges with care and courage. This work reminds us that being in true & meaningful contact with one another is one of the most natural and necessary acts of being alive. What emerges in his sessions is more than just movement - it's community, it's trust, it's the art of living!",
  },
  {
    name: "Gabrielle Hillis",
    image: imagePath("/images/testimonial-gabrielle.jpg"),
    text: "For me, what is so enthralling and addictive about Michael's CI series is that they feel like laboratory spaces—places where we get to be true students of this sport, students of this art form. I was a highly competitive athlete for most of my life, and when I retired, I experienced an identity and purpose crisis. I deeply missed the mind-body connection required to excel in sport. Michael's classes have become that place for me again. I feel nourished, accomplished, fulfilled, and grounded when I am a student of contact improv, a student of my own body and mind, and a student of others. It is a brilliant and safe space curated for curiosity—where questions are welcomed, experiments unfold, and new concepts are continuously uncovered. Thank you, thank you, thank you for creating and holding this recurring space where mind meets body and body meets mind and we all learn together!",
  },
  {
    name: "Heidi Fredere",
    image: imagePath("/images/testimonial-heidi.jpg"),
    text: "Michael's presence and ability to instruct and lead us as a group as well as hold the container was paramount. I left class every time feeling more connected to a community, more grounded, and with a much more regulated nervous system than when I would show up. He took the time to notice each students level and was supportive and accommodating for all. I highly recommend this class to anyone wanting to connect into their body and grow with others. I will be participating in future classes moving forward. With much Gratitude",
  },
  {
    name: "Nick",
    image: imagePath("/images/testimonial-nick.jpg"),
    text: "Michael's Art of Living series has been one of the most unique and special experiences of my life. I am so grateful for the connection, awareness, joy, laughter, and tears I have found here, and for the beautiful souls who co-create this truly magical and supportive space!",
  },
  {
    name: "Ashley Stenger",
    image: imagePath("/images/testimonial-ashley.jpg"),
    text: "I have been in the dance world for many years, but just recently got introduced to contact improv. I was so nervous my first class, but the community and Michael made me feel so welcome. Emotions are talked about, there is support in every class if needed, and autonomy is first priority. I was pleasantly surprised at how I was able to do 'edgy' things for the first time in a while, like contact dancing with a partner. Most of my dance experience is solo, in community, but not partners. I have explored new edges of creativity, trust, surrender, and some pretty cool things my body can do, even more cool with the help from others! I highly recommend signing up for and being in the same room as Michael, such a special and beautifully grounded facilitator in a space that can be so ungrounding and intimidating.",
  },
  {
    name: "Ryan Greenhalgh",
    image: imagePath("/images/testimonial-ryan.jpg"),
    text: "I would like to vouch for Michael's classes. They are a beautiful container to explore what it means to be human and feel safe and have fun. It is much like ecstatic dance but also quite different. And I have learned many things about myself from it that I would have never learned any other way. Could not recommend more highly. Jacob (a student) has slowly been coaxing people into Michael's classes and everyone who has gone has loved it and I have seen them become more of themself and shine brighter. In the first class that I went to with Michael, he said to all of us that he loves contact improv more than anything in life. He said that in front of his partner who was sitting in the circle with us. At first I thought she would have been profoundly offended at that but I have come to assume that the exact opposite is true. One of the greatest gifts in life is to learn from people who love what they teach and I can vouch that Michael loves contact improv.",
  },
  {
    name: "Adam Samuel Escobar",
    image: imagePath("/images/testimonial-adam.jpg"),
    text: "I have put off writing this testimonial because Michael is my closest and one of my oldest friends. I wanted my testimonial to be powerful and perfect.\nPerfection is impossible and it stands in the way of authentic expression. Michael's Contact Improv courses helped me understand this in my core.\nIt's one thing to understand a concept intellectually, but it is entirely different to feel a concept in your body and nervous system.\n\nThe Art of Living has given me practices that allow me to experience authentic expression in ways I have never been able to. Beyond how fun it is to dance and move with a wonderful community, Contact Improv has countless parallels to a healthy and joyful life.\n\nSome of my favorite highlights:\nMoving at the speed of trust. Not just trust in ourselves, but trust in our partners\nWe are dancing our own dance with another person that is dancing their own dance. We must not get lost in the other person's dance, and we should be aware if they are getting lost in our dance.\nWhen you learn how to fall safely, you're no longer afraid of doing so. In fact, falling becomes part of the dance.\nSharing weight is necessary in order to truly feel where your partner is, and for them to feel where you are.\nWitnessing is just as important as experiencing\nTrust allows you to move in ways that are impossible to do alone\nAll of these enriching ideas were taught while doing something incredibly fun. From simple weight sharing on the floor to lifting a partner on our shoulders, honing our attention to a single point in our body to taking in the whole room of dancers at once.\nMichael has a gift for walking the class through processes that build up over the day and weeks. One moment you have no idea what you are doing and the next you are moving in ways you have never moved before. All with grace, patience, and a lot of fun. There is a lot of laughing in the classes. There are the occasional tears. Engaging with this practice can bring up a lot of emotions, but it's all part of the dance. The community that has come up around Michael's classes dives into all of it with sincere support. It's beautiful.\nMichael is also a student himself. He often travels abroad to study under different teachers. He is so lit up when he comes back and talks about what he has learned and how excited he is to implement the lessons into his next series. He is adamant about his students going off and learning under as many different teachers as they can.\nI'm bias, given that I have known this man since we were 12 years old. But I feel confident in saying that Michael has a gift for learning and teaching this practice. If you have the opportunity to do so, I strongly recommend that you give yourself the chance to experience one of his classes.",
  },
  {
    name: "Matt Koch",
    image: imagePath("/images/testimonial-matt.jpg"),
    text: "Finding Contact Improv through Michael's teaching has made an incredible impact on my life. I find myself feeling more confident and easy going in my daily social interactions with other people, as well as finding joy in Contact Improv itself as I have progressed through the art. The classes can be intimidating both emotionally and physically at first as it is a vast departure from typical American life. Michael's approach challenges students to recognize their boundaries and contemplate the invitation to push them, while remaining patient with humans learning to traverse new experience. I'm deeply appreciative of Michael's kindness and compassion. His \"Art of Living\" series is a worthy endeavor for movers, dancers, and anyone who wants to be more comfortable with their fellow human beings.",
  },
  {
    name: "Austin Hammer",
    image: imagePath("/images/testimonial-austin.jpg"),
    text: "For some time, I have been curious how dance might help me feel more grounded and how it might help me to process different patterns, themes, feelings in my life…I'm happy to have dipped my toe into that exploration in the supportive, accepting space that Michael cultivates in his classes…I still don't fully understand what's happening in me during and after the classes I've taken with Michael, but I know that they have left me feeling lighter than I have felt in a long time 🌱 and I am trying to trust that\n\nI am grateful for the vulnerability of the people with whom I've shared classes (just the simple act of being there/showing up and trying this art form/practice is so courageous)…I'm grateful for the gentle, enthusiastic guidance and encouragement Michael has given us all in experimenting and learning more about moving together like this…both my classmates and Michael have helped me feel more comfortable and safe exploring this new piece of life\nwholeheartedly…all of us being ourselves makes space for all of us to be ourselves more freely (I don't know if that makes sense, but there it is)…\n\nFor anyone new to contact improv (speaking as someone who is very new to contact improv and any organized dance), I would highly recommend taking a course with Michael 🌙 it has been fun, silly, serious, heart opening, informative, and resonant…\nThank you, Michael !🍃 thank you, classmates 🌱",
  },
  {
    name: "Karina Okoren",
    image: imagePath("/images/testimonial-karina.jpg"),
    text: "Hello! Just wanted to get on and share about my experience in the CI series with Michael. I'm a dance teacher and dancer and was amazed by Michael's wealth of knowledge paired with passion and kindness. It is rare in the dance community to find such a great blend of freedom and structure in a class. His series was seriously a highlight of my year last year and recommend it anyone and everyone! The community is so welcoming and warm and truly a no pressure learning environment where it feels safe and fun. I felt like it was a dose of therapy each week and practice life principles in a physical and relational way. Truly recommend!!!! Can't wait to do it again!!",
  },
  {
    name: "Courtney Cauthon",
    image: imagePath("/images/courtney-cauthon.jpg"),
    text: "Michael's Art of Living class is transformative. While learning a movement practice you also are invited to step into a life practice that is about being more awake, more alive, and open to the present moment.\n\nTechnically, the class builds real movement skills: sharing weight, rolling points of contact, counterbalance, using momentum, and listening through the body. Beyond that, it expands your capacity to move through life with more ease and flexibility\u2014physically, emotionally, and relationally.\n\nMichael facilitates with a blend of compassion, curiosity, respect, and playfulness. He creates an environment that feels both grounded and expansive. His classes are a fun sandbox for learning and exploring what it means to move and be moved. I leave Michael's classes a more capable mover and a more attuned and responsive human.\n\nI wholeheartedly recommend this class to anyone curious about embodiment, connection and what it means to embrace your aliveness.",
  },
  {
    name: "Linda",
    image: "",
    text: "Thanks so much for leading me to do things I thought impossible.\nMagical! Contact Improv dance with Michael hits all aspects of the perfect activity. Classes are structured to learn new dance moves, build community and friendships, expand self awareness and confidence in a safe environment as well as provide great exercise. Thank you Michael for a truly magical experience!",
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
              {testimonial.image ? (
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  fill
                  className="object-cover"
                  sizes="80px"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-warm/15 text-warm text-2xl font-semibold">
                  {testimonial.name.charAt(0)}
                </div>
              )}
            </div>

            <blockquote className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl mb-8 min-h-[120px] whitespace-pre-line">
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

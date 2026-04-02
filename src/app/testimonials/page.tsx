import type { Metadata } from "next";
import Image from "next/image";
import { imagePath } from "@/lib/paths";

const TESTIMONIALS = [
  {
    name: "Brooke Alexander",
    image: imagePath("/images/testimonial-brooke.jpg"),
    text: "Michael Bernal is a rare kind of human and facilitator! One who effortlessly invites in a deep return to the body, while also invoking the wisdom of play, connection, and collaboration. In his contact improv series, the Art of Living, Michael holds a space for both physical and emotional contact to be explored. His skill as a teacher lies not only in his deep knowledge of contact improv and embodiment, but also in his capacity to hold a space where vulnerability and joy can co-exist.\nEvery class with Michael feels like a return to what matters: presence, connection, and curiosity. He weaves technical guidance with intuitive emergence, creating openings for both beginners and seasoned movers to explore their own edges with care and courage. This work reminds us that being in true & meaningful contact with one another is one of the most natural and necessary acts of being alive. What emerges in his sessions is more than just movement - it's community, it's trust, it's the art of living!",
  },
  {
    name: "Amy Longe",
    image: imagePath("/images/testimonial-amy.jpg"),
    text: "Michael is a gifted human with a passion for contact improvisation that is palpable. He is extremely present & attentive creating a safe space to explore CI. The classes and community are nothing short of amazing. He layers many different exercises to build up a skill and walks around as we practice, sharing tips and tricks. I am relatively new to CI and feel it's the start of a new chapter filled with play, connection, co-regulation, body awareness, expression and most importantly, safety to explore touch with other humans. I always look forward and feel energized after class. I wish we could go for hours more! I am so grateful to Michael for sharing contact improv with Denver & I can't wait to keep learning and dancing with him, wherever CI takes him",
  },
  {
    name: "Linda",
    image: imagePath("/images/testimonial-linda.jpg"),
    text: "Thanks so much for leading me to do things I thought impossible.\nMagical! Contact Improv dance with Michael hits all aspects of the perfect activity. Classes are structured to learn new dance moves, build community and friendships, expand self awareness and confidence in a safe environment as well as provide great exercise. Thank you Michael for a truly magical experience!",
  },
  {
    name: "Gabrielle Hillis",
    image: imagePath("/images/testimonial-gabrielle.jpg"),
    text: "For me, what is so enthralling and addictive about Michael's CI series is that they feel like laboratory spaces—places where we get to be true students of this sport, students of this art form. I was a highly competitive athlete for most of my life, and when I retired, I experienced an identity and purpose crisis. I deeply missed the mind-body connection required to excel in sport.\nMichael's classes have become that place for me again. I feel nourished, accomplished, fulfilled, and grounded when I am a student of contact improv, a student of my own body and mind, and a student of others. It is a brilliant and safe space curated for curiosity—where questions are welcomed, experiments unfold, and new concepts are continuously uncovered.\nThank you, thank you, thank you for creating and holding this recurring space where mind meets body and body meets mind and we all learn together!",
  },
  {
    name: "Heidi Fredere",
    image: imagePath("/images/testimonial-heidi.jpg"),
    text: "Michael's presence and ability to instruct and lead us as a group as well as hold the container was paramount. I left class every time feeling more connected to a community, more grounded, and with a much more regulated nervous system than when I would show up.\nHe took the time to notice each students level and was supportive and accommodating for all.\nI highly recommend this class to anyone wanting to connect into their body and grow with others. I will be participating in future classes moving forward.\nWith much Gratitude",
  },
  {
    name: "Anastasia Hill",
    image: imagePath("/images/testimonial-anastasia.jpg"),
    text: "I had no idea what I was getting into when I took Michael's Art of Living series, and was honestly hesitant bc not all dance spaces are as safe as they seem, but the container Michael creates is truly life changing. Michael has an almost therapeutic approach, focusing on somatic experience and self-awareness through platonic connection. This practice has softened my spirit to deeper connection and deepened my listening to both my own body and others'. Not only do I feel more embodied than I ever have, but I feel more regulated and full of love. 10/10 highly recommend his transformational teachings!",
  },
  {
    name: "Nick",
    image: imagePath("/images/testimonial-nick.jpg"),
    text: "Michael's Art of Living series has been one of the most unique and special experiences of my life. I am so grateful for the connection, awareness, joy, laughter, and tears I have found here, and for the beautiful souls who co-create this truly magical and supportive space!",
  },
  {
    name: "Ashley Stenger",
    image: imagePath("/images/testimonial-ashley.jpg"),
    text: "I have been in the dance world for many years, but just recently got introduced to contact improv. I was so nervous my first class, but the community and Michael made me feel so welcome. Emotions are talked about, there is support in every class if needed, and autonomy is first priority. I was pleasantly surprised at how I was able to do \"edgy\" things for the first time in a while, like contact dancing with a partner. Most of my dance experience is solo, in community, but not partners. I have explored new edges of creativity, trust, surrender, and some pretty cool things my body can do, even more cool with the help from others!\nI highly recommend signing up for and being in the same room as Michael, such a special and beautifully grounded facilitator in a space that can be so ungrounding and intimidating",
  },
  {
    name: "Ryan Greenhalgh",
    image: imagePath("/images/testimonial-ryan.jpg"),
    text: "I would like to vouch for Michael's classes. They are a beautiful container to explore what it means to be human and feel safe and have fun. It is much like ecstatic dance but also quite different. And I have learned many things about myself from it that I would have never learned any other way. Could not recommend more highly. Jacob (a student) has slowly been coaxing people into Michael's classes and everyone who has gone has loved it and I have seen them become more of themself and shine brighter.\nIn the first class that I went to with Michael, he said to all of us that he loves contact improv more than anything in life. He said that in front of his partner who was sitting in the circle with us. At first I thought she would have been profoundly offended at that but I have come to assume that the exact opposite is true.\nOne of the greatest gifts in life is to learn from people who love what they teach and I can vouch that Michael loves contact improv.",
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
    text: "Hello! Just wanted to get on and share about my experience in the CI series with Michael. I'm a dance teacher and dancer and was amazed by Michael's wealth of knowledge paired with passion and kindness. It is rare in the dance community to find such a great blend of freedom and structure in a class. His series was seriously a highlight of my year last year and recommend it anyone and everyone! The community is so welcoming and warm and truly a no pressure learning environment where it feels safe and fun. I felt like it was a dose of therapy each week and practice life principles in a physical and relational way. Truly recommend!!!!\nCan't wait to do it again!!",
  },
] as const;

export const metadata: Metadata = {
  title: "Testimonials :: Denver Contact Improv",
  description:
    "Read testimonials from dancers and community members sharing their experiences with Denver Contact Improv classes, jams, and events.",
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="px-6 pb-16 pt-32">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-warm">
            Testimonials
          </p>
          <h1
            className="text-4xl font-bold text-foreground md:text-6xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            What people are saying.
          </h1>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 xl:grid-cols-3">
          {TESTIMONIALS.map((testimonial) => (
            <article
              key={testimonial.name}
              className="rounded-[1.75rem] border border-border/50 bg-card/70 p-7"
            >
              <div className="flex items-center gap-4">
                <div className="relative h-14 w-14 overflow-hidden rounded-full ring-1 ring-warm/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                    sizes="56px"
                  />
                </div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-warm">
                  {testimonial.name}
                </p>
              </div>
              <p className="mt-6 leading-relaxed text-muted-foreground whitespace-pre-line">
                &ldquo;{testimonial.text}&rdquo;
              </p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}

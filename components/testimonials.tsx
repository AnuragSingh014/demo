import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardContent } from '@/components/ui/card'

type Testimonial = {
    name: string
    role: string
    image: string
    quote: string
}

const testimonials: Testimonial[] = [
    {
        name: 'Jonathan Yombo',
        role: 'Software Engineer',
        image: 'https://randomuser.me/api/portraits/men/1.jpg',
        quote: 'Leadseeder is really extraordinary and very practical, no need to break your head. A real gold mine.',
    },
    {
        name: 'Yves Kalume',
        role: 'GDE - Android',
        image: 'https://randomuser.me/api/portraits/men/6.jpg',
        quote: 'With no experience in automaion just in a few minutes with Leadseeder.',
    },
    {
        name: 'Yucel Faruksahan',
        role: 'Tailkits Creator',
        image: 'https://randomuser.me/api/portraits/men/7.jpg',
        quote: 'Leadseeder has transformed the way I approach to generate leads and networking on Professional platform. It has improved my outreach efforts and expanded my professional network.',
    },
    {
        name: 'Anonymous author',
        role: 'Doing something',
        image: 'https://randomuser.me/api/portraits/men/8.jpg',
        quote: 'Leadseeder has transformed the way I approach to generate leads and networking on Professional platform. It has improved my outreach efforts and expanded my professional network.',
    },
    {
        name: 'Shekinah Tshiokufila',
        role: 'Senior Software Engineer',
        image: 'https://randomuser.me/api/portraits/men/4.jpg',
        quote: 'Using Leadseeder has been a great Linked Helper for our sales team.',
    },
    {
        name: 'Oketa Fred',
        role: 'Fullstack Developer',
        image: 'https://randomuser.me/api/portraits/men/2.jpg',
        quote: 'Leadseeders  features have greatly enhanced our recruiting efforts, enabling us to connect with top talent and foster meaningful relations.',
    },
    {
        name: 'Zeki',
        role: 'Founder of ChatExtend',
        image: 'https://randomuser.me/api/portraits/men/5.jpg',
        quote: "Leadseeder's  features have greatly enhanced our recruiting efforts, enabling us to connect with top talent and foster meaningful relations.",
    },
    {
        name: 'Joseph Kitheka',
        role: 'Fullstack Developer',
        image: 'https://randomuser.me/api/portraits/men/9.jpg',
        quote: 'Leadseeder has transformed the way I approach to generate leads and networking on Professional platform. It has improved my outreach efforts and expanded my professional network.!',
    },
    {
        name: 'Khatab Wedaa',
        role: 'MerakiUI Creator',
        image: 'https://randomuser.me/api/portraits/men/10.jpg',
        quote: "Leadseeder has transformed the way I approach to generate leads and networking on Professional platform. It has improved my outreach efforts and expanded my professional network.",
    },
    {
        name: 'Rodrigo Aguilar',
        role: 'TailwindAwesome Creator',
        image: 'https://randomuser.me/api/portraits/men/11.jpg',
        quote: 'I love Leadseed ❤️.Leadseeder is really extraordinary and very practical, no need to break your head. A real gold mine.',
    },
    {
        name: 'Eric Ampire',
        role: 'Mobile Engineer at @BRPNews • @GoogleDevExpert for Android',
        image: 'https://randomuser.me/api/portraits/men/12.jpg',
        quote: 'Leadseeder has transformed the way I approach to generate leads and networking on Professional platform. It has improved my outreach efforts and expanded my professional network.',
    },
    {
        name: 'Roland Tubonge',
        role: 'Software Engineer',
        image: 'https://randomuser.me/api/portraits/men/13.jpg',
        quote: 'Leadseeder has transformed the way I approach to generate leads and networking on Professional platform. It has improved my outreach efforts and expanded my professional network.',
    },
]

const chunkArray = (array: Testimonial[], chunkSize: number): Testimonial[][] => {
    const result: Testimonial[][] = []
    for (let i = 0; i < array.length; i += chunkSize) {
        result.push(array.slice(i, i + chunkSize))
    }
    return result
}

const testimonialChunks = chunkArray(testimonials, Math.ceil(testimonials.length / 3))

export default function WallOfLoveSection() {
    return (
        <section>
            <div className="py-16 md:py-32">
                <div className="mx-auto max-w-6xl px-6">
                    <div className="text-center">
                        <h2 className="text-title text-3xl font-semibold">Loved by the Community</h2>
                        <p className="text-body mt-6">See how Leadseeder helps other increase revenue</p>
                    </div>
                    <div className="mt-8 grid gap-3 sm:grid-cols-2 md:mt-12 lg:grid-cols-3 auto-rows-fr">
                        {testimonialChunks.map((chunk, chunkIndex) => (
                            <div
                                key={chunkIndex}
                                className="flex flex-col space-y-3 h-full">
                                {chunk.map(({ name, role, quote, image }, index) => (
                                    <Card key={index} className="flex-1 h-full flex flex-col">
                                        <CardContent className="grid grid-cols-[auto_1fr] gap-3 flex-1">
                                            <Avatar className="size-9">
                                                <AvatarImage
                                                    alt={name}
                                                    src={image}
                                                    loading="lazy"
                                                    width="120"
                                                    height="120"
                                                />
                                                <AvatarFallback>ST</AvatarFallback>
                                            </Avatar>

                                            <div className="flex flex-col min-h-0 flex-1">
                                                <h3 className="font-medium">{name}</h3>

                                                <span className="text-muted-foreground block text-sm tracking-wide">{role}</span>

                                                <blockquote className="mt-3 flex-1">
                                                    <p className="text-gray-700 dark:text-gray-300">{quote}</p>
                                                </blockquote>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

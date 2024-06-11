import React from 'react'
import Topic from '../components/Topic'
import OurSocials from '../components/OurSocials'
import twitter from "../assets/twitter.webp"
import github from "../assets/github.webp"
import whatsapp from "../assets/whatsapp.webp"


const JoinOurCommunity = () => {
    return (
        <section className='w-full mt-10'>
            <main className='px-4 md:px-20 pt-10 md:pt-14 md:pb-20 pb-16'>
                <div className='text-center'>
                    <Topic
                        mainHeading="Join our community"
                        aboutHeading="Visit our communities to see the latest updates and news regarding our product. Whether you have questions, ideas to contribute, or simply want to connect with like-minded individuals, our communities provide a vibrant and supportive environment for your."
                    />
                </div>

                <div className='flex justify-between gap-4 mt-20'>
                    <OurSocials
                        socialsImage={whatsapp}
                        smallHeading="WhatsApp"
                        aboutHeading="Get a chance of collaborating and exchanging knowledge among each other."
                        buttonText="Join"
                        socialBackground="bg-green-200"
                        socialLink="/"
                    />
                    <OurSocials
                        socialsImage={github}
                        smallHeading="Github"
                        aboutHeading="Get it free on Github and please help us spread the news with a Star."
                        buttonText="Visit"
                        socialBackground="bg-slate-200"
                        socialLink="/"
                    />

                    <OurSocials
                        socialsImage={twitter}
                        smallHeading="Twitter"
                        aboutHeading="For announcements, articles, and other valuable resources."
                        buttonText="Join"
                        socialBackground="bg-blue-200"
                        socialLink="/"
                    />
                </div>
            </main>
        </section>
    )
}

export default JoinOurCommunity
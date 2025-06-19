import Head from "next/head";
import TitleBar from "@/components/TitleBar";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowUpRight,
  Menu,
  Umbrella,
  HeartPulse,
  Rocket,
  ArrowRight,
  ArrowLeft,
  MapPin,
  PhoneCall,
  AtSign,
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuContent,
  NavigationMenuTrigger,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import ClientCard from "@/components/client-card";
import WhatWeBringItem from "@/components/what-we-bring-item";
import Star from "@/components/svgs/star";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import EmblaCarousel from "@/components/Carousel";
import ToolCard from "@/components/tool-card";
import GoogleRating from "@/components/google-box";

export default function Home() {
  return (
    <>
      <Head>
        <title>Recognise Demo</title>
        <meta name="description" content="Demo website for Recognise Design" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen w-full overflow-x-hidden">
        {/* copied background from the figma but seems to be a bit off */}
        <section className="bg-[url(/bg.png)] bg-cover bg-center">
          <TitleBar
            leftContent={
              <div className="relative h-full w-auto px-2 sm:px-4">
                {/* TODO: fix logo resizing issue */}
                <Image
                  src="/logo.png"
                  alt="Logo"
                  width={100}
                  height={60}
                  className="h-15 w-auto object-contain"
                  priority
                />
              </div>
            }
            centerContent={
              <div className="hidden items-center gap-2 px-2 sm:px-4 md:flex md:px-8 lg:px-24">
                <NavigationMenu
                  className="rounded-full bg-white p-2"
                  viewport={false}
                >
                  <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href="/">Home</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>Services</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Industries</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <NavigationMenuLink>Industries</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href="/about-us">About Us</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      {/* aschild makes the link component look like a navigation menu trigger */}
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href="/Work">Work</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuLink
                        asChild
                        className={navigationMenuTriggerStyle()}
                      >
                        <Link href="/blog">Blog</Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            }
            rightContent={
              <div className="flex items-center gap-2 px-4 md:px-8 lg:px-24">
                <Link href="/contact" className="hidden md:block">
                  <Button className="h-8 w-24 cursor-pointer items-center rounded-full bg-orange-400 text-sm text-white hover:bg-orange-500 md:h-9 md:w-28 md:text-base lg:w-32">
                    Contact
                    <ArrowUpRight className="h-3 w-3 md:h-4 md:w-4" />
                  </Button>
                </Link>
                <Link href="/contact">
                  <Button className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-white text-[#1c526f] hover:bg-slate-700 md:h-9 md:w-9 md:bg-slate-600 md:text-white">
                    <Menu className="h-6 w-6 md:h-4 md:w-4" />
                  </Button>
                </Link>
              </div>
            }
          />
          <div className="container mx-auto w-full px-2 py-4 md:py-12 lg:py-32">
            {/* Mobile Heading */}
            <h1 className="text-center text-3xl font-semibold text-white uppercase sm:hidden">
              Web & App Development Specialists in{" "}
              <span className="text-orange-400">Hertfordshire</span>
            </h1>
            {/* Desktop Heading */}
            <h1 className="hidden text-center text-3xl font-semibold text-white uppercase sm:block md:text-5xl lg:text-[64px] xl:text-[80px] 2xl:text-[92px]">
              High-Performance Web <br className="hidden sm:block" />
              Platforms for <br className="hidden sm:block" />
              <span className="text-orange-400">Regulated Businesses</span>
            </h1>
            <p className="pt-[5%] text-center text-lg font-normal text-gray-200 sm:text-xl md:text-2xl lg:text-3xl">
              We build secure digital products for companies where compliance,
              speed, and results <br className="hidden sm:block" /> matter. Our
              clients include leading insurance providers, medical brands, and
              technical <br className="hidden sm:block" /> teams across the UK
              and Europe.
            </p>
            <div className="flex justify-center pt-8">
              <Link href="/contact">
                <Button className="flex h-12 w-36 cursor-pointer rounded-full bg-orange-400 text-sm text-white uppercase hover:bg-orange-600 md:h-12 md:w-48 md:text-base lg:h-16 lg:w-72 lg:text-3xl">
                  Let&apos;s Talk
                  <ArrowUpRight className="size-10" strokeWidth={1} />
                </Button>
              </Link>
            </div>
          </div>
        </section>
        <div className="mx-auto px-4 py-4 md:py-6 lg:py-8">
          <div className="w-[320px] overflow-x-auto sm:w-full sm:overflow-x-visible">
            <Image
              src="/clients.png"
              alt="Clients"
              width={2000}
              height={500}
              className="h-auto w-[600px] sm:w-full"
              style={{ minWidth: 600 }}
            />
          </div>
        </div>
        <div className="container mx-auto w-full px-4 py-4 md:py-6 lg:py-8">
          <div className="flex flex-col items-center justify-center">
            <h2 className="text-center text-2xl font-semibold text-[#17526f] capitalize md:text-3xl lg:text-5xl">
              You need systems that scale and teams
              <br />
              <span className="text-orange-400">that understand risk</span>
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center pt-8">
            <p className="text-center text-xl font-light md:text-2xl lg:text-3xl">
              We work with:
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-8 md:gap-8 md:pt-24">
            <div className="relative my-6 h-[224px] w-full rounded-2xl border-2 border-gray-200 md:w-[437px] lg:my-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2">
                <div className="rounded-full bg-orange-400 p-4">
                  <Umbrella className="h-20 w-20 text-white" />
                </div>
              </div>
              <div className="flex h-full items-center justify-center">
                <span className="text-center text-lg font-medium text-teal-800 md:text-xl lg:text-2xl">
                  Insurance companies
                </span>
              </div>
            </div>
            <div className="relative my-6 h-[224px] w-full rounded-2xl border-2 border-gray-200 md:w-[437px] lg:my-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2">
                <div className="rounded-full bg-orange-400 p-4">
                  <HeartPulse className="h-20 w-20 text-white" />
                </div>
              </div>
              <div className="flex h-full items-center justify-center">
                <span className="text-center text-lg font-medium text-teal-800 md:text-xl lg:text-2xl">
                  Healthcare providers
                </span>
              </div>
            </div>
            <div className="relative my-6 h-[224px] w-full rounded-2xl border-2 border-gray-200 md:w-[437px] lg:my-0">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white p-2">
                <div className="rounded-full bg-orange-400 p-4">
                  <Rocket className="h-20 w-20 text-white" />
                </div>
              </div>
              <div className="flex h-full items-center justify-center">
                <span className="text-center text-lg font-medium text-teal-800 md:text-xl lg:text-2xl">
                  Operations teams in <br />
                  regulated markets
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center pt-8">
            <p className="text-center text-lg font-light md:text-xl">
              We help you launch fast, track performance, and reduce review
              cycles.
            </p>
          </div>
        </div>
        <div className="mx-auto mb-12 w-full bg-[url(/rd-background.png)] bg-cover bg-center px-8 py-4 md:py-6 lg:py-8">
          <h2 className="mx-8 py-4 text-center text-2xl font-medium text-white capitalize md:text-3xl lg:text-5xl">
            What We Do
          </h2>
          <h3 className="mb-6 text-center text-xl font-light text-white md:text-2xl">
            We build and manage
          </h3>
          <EmblaCarousel
            slides={[
              <div
                className="min-h-[100px] rounded-xl bg-white p-4 sm:p-10 lg:min-h-[200px]"
                key="slide-1"
              >
                <span className="text-lg font-semibold text-[#1c526f] uppercase md:text-xl lg:text-2xl">
                  Websites using <br />
                  <span className="text-orange-400">umbraco cms</span>
                  <span>
                    <br />
                    <br />
                  </span>
                </span>
              </div>,
              <div
                className="min-h-[100px] rounded-xl bg-white p-4 sm:p-10 lg:min-h-[200px]"
                key="slide-2"
              >
                <span className="text-lg font-semibold text-[#1c526f] uppercase md:text-xl lg:text-2xl">
                  Secure hosting and architechure with <br />
                  <span className="text-orange-400">microsoft azure</span>
                </span>
              </div>,
              <div
                className="min-h-[100px] rounded-xl bg-white p-4 sm:p-10 lg:min-h-[200px]"
                key="slide-3"
              >
                <span className="text-lg font-semibold text-[#1c526f] uppercase md:text-xl lg:text-2xl">
                  <span className="text-orange-400">high-conversion</span>
                  <br />
                  journeys for customer aquisition
                </span>
              </div>,
              <div
                className="min-h-[100px] rounded-xl bg-white p-4 sm:p-10 lg:min-h-[200px]"
                key="slide-4"
              >
                <span className="text-lg font-semibold text-[#1c526f] uppercase md:text-xl lg:text-2xl">
                  Automated testing with <br />
                  <span className="text-orange-400">cypress</span>
                </span>
              </div>,
              <div
                className="min-h-[100px] rounded-xl bg-white p-4 sm:p-10 lg:min-h-[200px]"
                key="slide-5"
              >
                <span className="text-lg font-semibold text-[#1c526f] uppercase md:text-xl lg:text-2xl">
                  example slide 5 <br />
                  <br />
                  <span className="text-orange-400">####</span>
                </span>
              </div>,
              <div
                className="min-h-[100px] rounded-xl bg-white p-4 sm:p-10 lg:min-h-[200px]"
                key="slide-6"
              >
                <span className="text-lg font-semibold text-[#1c526f] uppercase md:text-xl lg:text-2xl">
                  example slide 6 <br />
                  <br />
                  <span className="text-orange-400">####</span>
                </span>
              </div>,
              <div
                className="min-h-[100px] rounded-xl bg-white p-4 sm:p-10 lg:min-h-[200px]"
                key="slide-7"
              >
                <span className="text-lg font-semibold text-[#1c526f] uppercase md:text-xl lg:text-2xl">
                  example slide 7 <br />
                  <br />
                  <span className="text-orange-400">####</span>
                </span>
              </div>,
              <div
                className="min-h-[100px] rounded-xl bg-white p-4 sm:p-10 lg:min-h-[200px]"
                key="slide-8"
              >
                <span className="text-lg font-semibold text-[#1c526f] uppercase md:text-xl lg:text-2xl">
                  example slide 8 <br />
                  <br />
                  <span className="text-orange-400">####</span>
                </span>
              </div>,
              <div
                className="min-h-[100px] rounded-xl bg-white p-4 sm:p-10 lg:min-h-[200px]"
                key="slide-9"
              >
                <span className="text-lg font-semibold text-[#1c526f] uppercase md:text-xl lg:text-2xl">
                  example slide 9 <br />
                  <br />
                  <span className="text-orange-400">####</span>
                </span>
              </div>,
              <div
                className="min-h-[100px] rounded-xl bg-white p-4 sm:p-10 lg:min-h-[200px]"
                key="slide-10"
              >
                <span className="text-lg font-semibold text-[#1c526f] uppercase md:text-xl lg:text-2xl">
                  example slide 10 <br />
                  <br />
                  <span className="text-orange-400">####</span>
                </span>
              </div>,
            ]}
            options={{
              slidesToScroll: 1,
              loop: false,
              align: "start",
            }}
          />
          <div className="my-8 flex items-center justify-between gap-4">
            <span className="text-center text-sm font-light text-white lg:text-lg xl:text-2xl">
              We help you launch fast, track performance, and reduce review
              cycles.
            </span>

            <Button className="h-16 w-40 cursor-pointer rounded-full bg-orange-400 text-sm text-white hover:bg-orange-600 md:h-12 md:w-48 md:text-base lg:h-16 lg:w-96 lg:text-3xl">
              View all services
              <ArrowUpRight className="size-6 md:size-10" strokeWidth={1} />
            </Button>
          </div>
        </div>

        <div className="px-8">
          <h2 className="text-2xl font-medium text-[#175070] capitalize md:text-3xl lg:text-5xl">
            Tools Built In-House
          </h2>
          <div className="mt-8 flex flex-col gap-8 xl:flex-row xl:justify-evenly">
            <ToolCard
              imageSrc="/optiloom.png"
              imageAlt="Optiloom logo"
              title="Opti Loom"
              description={[
                "Run AB tests directly on your live site. Track results. Make confident changes backed by data.",
              ]}
            />
            <ToolCard
              imageSrc="/change-detection.png"
              imageAlt="Change Detection"
              title="Observe IQ"
              mobileTitle="Change Detection"
              description={[
                "Automatically log and compare page changes. See full before-and-after screenshots. Cut the back-and-forth between marketing and compliance.",
              ]}
            />
          </div>
        </div>
        <div className="mx-auto w-full px-8 py-4 md:py-6 lg:py-8">
          <h2 className="text-2xl font-medium text-[#175070] capitalize md:text-3xl lg:text-5xl">
            Our Work In Action
          </h2>
          <div className="mt-8 grid grid-cols-1 justify-items-center gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <ClientCard
              name="Columbus Assicurazioni"
              image="/columbus-italy.png"
              bp1="Adapted the platform for the Italian market."
              bp2="Full Umbraco build with Azure hosting."
              bp3="Supports thousands of users daily."
            />
            <ClientCard
              name="ECC"
              image="/ecc.png"
              bp1="Designed and developed a web and mobile app."
              bp2="Helped their teams handle installations, customer data, and scheduling."
              bp3="Cut time spent on admin."
            />
            <ClientCard
              name="Berkeley Square Medical "
              image="/berkeley-medical.png"
              bp1="Upgraded the site for private surgery in Harley Street."
              bp2="Improved booking experience."
              bp3="Met strict design and compliance standards."
            />
            <ClientCard
              name="Columbus Direct "
              image="/columbus-direct.png"
              bp1="We rebuilt the insurance site."
              bp2="Improved performance and conversion."
              bp3="Connected marketing, compliance, and customer service."
            />
          </div>
        </div>
        <div className="mx-auto w-full px-8 py-4 md:py-6 lg:py-8">
          <h2 className="py-4 text-2xl font-medium text-[#175070] capitalize md:text-3xl lg:text-5xl">
            Why RD Digital?
          </h2>
          <h3 className="text-xl font-medium text-orange-400 md:text-2xl lg:text-3xl">
            Trusted by digital leaders
          </h3>
          <hr className="my-8 hidden border-1 border-gray-300 md:block" />
          <div className="relative my-6 h-30 flex-col justify-between rounded-3xl bg-gray-200 p-4 md:hidden">
            <div className="flex flex-col pt-4 pb-12 text-[#175070]">
              <span className="text-4xl font-bold md:text-5xl">+15</span>
              <span className="text-md md:text-xl">Years of Experience</span>
            </div>
            <div className="absolute right-0 bottom-0">
              <Image
                src="/clock.png"
                alt="clock"
                width={200}
                height={200}
                className="h-25 w-25"
              />
            </div>
          </div>
          <div>
            <span className="text-md hidden font-normal text-gray-700 md:block md:text-xl lg:text-2xl">
              Based in Hertfordshire, serving London and beyond. We work with
              CTOs, CMOs, and Directors who need reliable delivery. They come to
              us when internal teams are stretched or tools are falling short.
            </span>
            <span className="text-md block font-normal text-gray-700 md:hidden md:text-xl lg:text-2xl">
              We work with CTOs, CMOs, and Directors who need reliable delivery.
              They come to us when internal teams are stretched or tools are
              falling short.
            </span>
            <div className="text-md flex justify-between py-8 font-normal text-gray-700 md:text-xl lg:text-2xl">
              <div>
                We bring:
                <ul className="py-4">
                  <li>
                    <WhatWeBringItem text="Fast onboarding and planning" />
                    <WhatWeBringItem text="Direct access to technical leads" />
                    <WhatWeBringItem text="Clear updates, outcomes, and data" />
                    <WhatWeBringItem text="Long-term support and improvements" />
                  </li>
                </ul>
              </div>
              <div className="relative hidden h-56 w-[35%] flex-col justify-between rounded-3xl bg-gray-200 p-4 md:block">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-black md:text-5xl">
                    +15
                  </span>
                  <span className="text-md text-gray-600 md:text-xl">
                    Years of Experience
                  </span>
                </div>
                <div className="absolute right-0 bottom-0">
                  <Image
                    src="/clock.png"
                    alt="clock"
                    width={200}
                    height={200}
                    className="h-40 w-40"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mb-12 w-full bg-[url(/rd-background.png)] bg-cover bg-center px-8 py-4 md:py-12 lg:py-24">
          <h2 className="mx-8 pt-16 pb-8 text-center text-2xl font-medium text-white capitalize md:text-3xl lg:text-5xl">
            Want to reduce time spent chasing fixes?
          </h2>
          <h3 className="pb-8 text-center text-lg font-light text-white md:text-xl lg:text-2xl">
            Need a partner that works across tech and compliance?
          </h3>
          <Button className="mx-auto mb-20 flex h-16 w-48 cursor-pointer rounded-full bg-orange-400 text-sm text-white hover:bg-orange-600 md:h-12 md:w-64 md:text-base lg:h-16 lg:w-96 lg:text-3xl">
            Let&apos;s Talk
            <ArrowUpRight className="size-10" strokeWidth={1} />
          </Button>
        </div>

        <div className="mb-12 px-8 py-4 md:py-6 lg:py-8">
          <div className="flex flex-col justify-between sm:flex-row">
            <div>
              <h2 className="text-2xl font-medium text-[#175070] md:text-3xl lg:text-5xl">
                <div className="flex flex-col">
                  <span className="pb-3">What our clients say</span>
                  <span className="pb-3">about our services</span>
                </div>
                <div className="hidden gap-4 pt-16 sm:pt-32 md:flex">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border-2 border-gray-500 text-gray-500 hover:cursor-pointer hover:border-gray-400 hover:text-gray-400">
                    <ArrowLeft className="h-6 w-6" />
                  </div>
                  <div className="flex h-16 w-16 items-center justify-center rounded-full border bg-[#175070] text-white hover:cursor-pointer hover:bg-[#1E5C82]">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                </div>
              </h2>
            </div>
            <div className="w-full p-4 sm:w-[50%]">
              <span className="text-lg font-[330] text-gray-900 md:text-xl lg:text-2xl">
                Lorem ipsum dolor sit amet consectetur. Praesent ac massa morbi
                viverra at laoreet urna elementum. Lorem ipsum dolor sit amet
                consectetur. Praesent ac massa morbi viverra at laoreet urna
                elementum. Lorem ipsum
              </span>
              <div className="flex py-8">
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </div>
              <div className="flex">
                <Image
                  src="/alex-matrix.png"
                  alt="Alex matrix"
                  width={100}
                  height={100}
                  className="h-20 w-20"
                />
                <div className="flex flex-col pl-4">
                  <span className="text-xl font-normal text-gray-900">
                    Alex matrix
                  </span>
                  <span className="text-lg font-light text-gray-700">
                    Matrix
                  </span>
                </div>
              </div>
              <div className="flex gap-3 py-8">
                <div className="h-4 w-4 rounded-full bg-[#DFEAF2]" />
                <div className="h-4 w-4 rounded-full bg-[#DFEAF2]" />
                <div className="h-4 w-12 rounded-full bg-[#175070]" />
                <div className="h-4 w-4 rounded-full bg-[#DFEAF2]" />
                <div className="h-4 w-4 rounded-full bg-[#DFEAF2]" />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto w-full px-8 py-4 md:py-6 lg:py-8">
          <h2 className="text-5xl font-medium text-orange-400 md:text-5xl md:text-[#175070]">
            FAQ
          </h2>
          <div className="mt-8">
            <Accordion type="single" collapsible className="w-full">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                <AccordionItem value="item-1" className="border-none">
                  <hr className="mb-4 border-1 border-gray-300" />
                  <AccordionTrigger className="text-3xl font-normal text-[#0C0E0E] capitalize">
                    What services does your app development company offer?
                  </AccordionTrigger>
                  <AccordionContent>answer here</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border-none">
                  <hr className="mb-4 border-1 border-gray-300" />
                  <AccordionTrigger className="text-3xl font-normal text-[#0C0E0E] capitalize">
                    What are the benefits of A/B testing?
                  </AccordionTrigger>
                  <AccordionContent>answer here</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border-none">
                  <hr className="mb-4 border-1 border-gray-300" />
                  <AccordionTrigger className="text-3xl font-normal text-[#0C0E0E] capitalize">
                    How long does it take to create an app?
                  </AccordionTrigger>
                  <AccordionContent>answer here</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border-none">
                  <hr className="mb-4 border-1 border-gray-300" />
                  <AccordionTrigger className="text-3xl font-normal text-[#0C0E0E] capitalize">
                    How many visitors do I need, and how long should I run an
                    A/B test?
                  </AccordionTrigger>
                  <AccordionContent>answer here</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border-none">
                  <hr className="mb-4 border-1 border-gray-300" />
                  <AccordionTrigger className="text-3xl font-normal text-[#0C0E0E] capitalize">
                    Do you offer ongoing support and maintenance?
                  </AccordionTrigger>
                  <AccordionContent>answer here</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border-none">
                  <hr className="mb-4 border-1 border-gray-300" />
                  <AccordionTrigger className="text-3xl font-normal text-[#0C0E0E] capitalize">
                    What technologies do you specialise in?
                  </AccordionTrigger>
                  <AccordionContent>answer here</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-7" className="border-none">
                  <hr className="mb-4 border-1 border-gray-300" />
                  <AccordionTrigger className="text-3xl font-normal text-[#0C0E0E] capitalize">
                    What do web designers near me offer?
                  </AccordionTrigger>
                  <AccordionContent>answer here</AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-8" className="border-none">
                  <hr className="mb-4 border-1 border-gray-300" />
                  <AccordionTrigger className="text-3xl font-normal text-[#0C0E0E] capitalize">
                    What industries do you specialise in for web design?
                  </AccordionTrigger>
                  <AccordionContent>answer here</AccordionContent>
                </AccordionItem>
              </div>
            </Accordion>
          </div>
        </div>
        <footer className="w-full bg-[#175070] pt-16" role="contentinfo">
          <div className="mx-auto max-w-[90%] rounded-3xl bg-white p-8 px-4 py-8 shadow-lg sm:px-8 sm:py-12">
            <div className="mx-8 grid grid-cols-1 gap-8 md:grid-cols-5">
              <Image
                src="/logo-blue.png"
                alt="RD Digitals"
                width={200}
                height={200}
                className="mx-auto"
              />

              <div className="flex flex-col items-start">
                <h3 className="mb-4 text-xl font-semibold text-gray-500 uppercase">
                  Services
                </h3>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/web-development"
                    className="text-gray-700 hover:text-orange-400"
                  >
                    Web Development
                  </Link>
                  <Link
                    href="/mobile-app-development"
                    className="text-gray-700 hover:text-orange-400"
                  >
                    Mobile App Development
                  </Link>
                  <Link
                    href="/email-development"
                    className="text-gray-700 hover:text-orange-400"
                  >
                    Email Development
                  </Link>
                  <Link
                    href="/seo-services"
                    className="text-gray-700 hover:text-orange-400"
                  >
                    SEO Services
                  </Link>
                  <Link
                    href="/a-b-testing"
                    className="text-gray-700 hover:text-orange-400"
                  >
                    A/B Testing
                  </Link>
                  <Link
                    href="/cloud-development"
                    className="text-gray-700 hover:text-orange-400"
                  >
                    Cloud Development
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <h3 className="mb-4 text-xl font-semibold text-gray-500 uppercase">
                  Industries
                </h3>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/travel-insurance"
                    className="text-gray-600 hover:text-orange-400"
                  >
                    Travel Insurance
                  </Link>
                  <Link
                    href="/electric-vehicle-charging"
                    className="text-gray-600 hover:text-orange-400"
                  >
                    Electric Vehicle Charging
                  </Link>
                  <Link
                    href="/healthcare-surgeries"
                    className="text-gray-600 hover:text-orange-400"
                  >
                    Healthcare & Surgeries
                  </Link>
                </div>
              </div>

              <div className="flex flex-col items-start">
                <h3 className="mb-4 text-xl font-semibold text-gray-500 uppercase">
                  Company
                </h3>
                <div className="flex flex-col gap-4">
                  <Link
                    href="/about-us"
                    className="text-gray-600 hover:text-orange-400"
                  >
                    About Us
                  </Link>
                  <Link
                    href="/our-work"
                    className="text-gray-600 hover:text-orange-400"
                  >
                    Our Work
                  </Link>
                  <Link
                    href="/insights"
                    className="text-gray-600 hover:text-orange-400"
                  >
                    Insights
                  </Link>
                  <Link
                    href="/contact"
                    className="text-gray-600 hover:text-orange-400"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              <div className="flex flex-col items-start">
                <h3 className="mb-4 text-xl font-semibold text-gray-500 uppercase">
                  Contact
                </h3>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="size-5" />
                    <span className="text-gray-600">Hertfordshire, UK</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneCall className="size-5" />
                    <span className="text-gray-600">+44 1234 567890</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <AtSign className="size-5" />
                    <span className="text-gray-600">
                      info@recognisedesign.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 flex flex-col items-center gap-4 md:mt-0 md:flex-row md:justify-between">
              <div className="flex gap-2">
                <div className="rounded-full bg-[#175070] p-4">
                  <svg
                    width="18"
                    height="15"
                    viewBox="0 0 18 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.23741 6.46691C6.06923 4.4912 9.29121 3.18869 10.9033 2.55938C15.5063 0.762581 16.4627 0.450458 17.0861 0.440041C17.2232 0.437884 17.5298 0.469775 17.7284 0.621004C17.8961 0.748699 17.9422 0.921196 17.9643 1.04226C17.9864 1.16333 18.0139 1.43913 17.992 1.65463C17.7426 4.11431 16.6633 10.0833 16.1142 12.8382C15.8818 14.0039 15.4244 14.3948 14.9815 14.433C14.0189 14.5161 13.288 13.836 12.3558 13.2625C10.897 12.365 10.0729 11.8064 8.65691 10.9306C7.02048 9.91856 8.08131 9.3623 9.0139 8.45323C9.25797 8.21532 13.4988 4.5951 13.5809 4.26669C13.5912 4.22562 13.6007 4.07252 13.5038 3.99167C13.4069 3.91083 13.2639 3.93848 13.1606 3.96046C13.0143 3.99163 10.6839 5.43724 6.16938 8.29729C5.5079 8.72358 4.90875 8.93129 4.37193 8.9204C3.78013 8.90841 2.64175 8.60637 1.79548 8.34819C0.757494 8.03153 -0.0674757 7.86411 0.00436067 7.32632C0.0417775 7.04621 0.452793 6.75974 1.23741 6.46691Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <div className="rounded-full bg-[#175070] p-4">
                  <svg
                    width="16"
                    height="17"
                    viewBox="0 0 16 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M13.6 2.73994C12.1 1.23994 10.1 0.439941 8 0.439941C3.6 0.439941 0 4.03994 0 8.43994C0 9.83994 0.400006 11.2399 1.10001 12.4399L0 16.4399L4.20001 15.3399C5.40001 15.9399 6.7 16.3399 8 16.3399C12.4 16.3399 16 12.7399 16 8.33994C16 6.23994 15.1 4.23994 13.6 2.73994ZM8 15.0399C6.8 15.0399 5.60001 14.7399 4.60001 14.1399L4.39999 14.0399L1.89999 14.7399L2.60001 12.3399L2.39999 12.0399C1.69999 10.9399 1.39999 9.73994 1.39999 8.53994C1.39999 4.93994 4.4 1.93994 8 1.93994C9.8 1.93994 11.4 2.63994 12.7 3.83994C14 5.13994 14.6 6.73994 14.6 8.53994C14.6 12.0399 11.7 15.0399 8 15.0399ZM11.6 10.0399C11.4 9.93994 10.4 9.43994 10.2 9.43994C10 9.33994 9.89999 9.33994 9.79999 9.53994C9.69999 9.73994 9.30001 10.1399 9.20001 10.3399C9.10001 10.4399 8.99999 10.4399 8.79999 10.4399C8.59999 10.3399 8.00001 10.1399 7.20001 9.43994C6.60001 8.93994 6.20001 8.23994 6.10001 8.03994C6.00001 7.83994 6.10001 7.73994 6.20001 7.63994C6.30001 7.53994 6.4 7.43994 6.5 7.33994C6.6 7.23994 6.60001 7.13994 6.70001 7.03994C6.80001 6.93994 6.70001 6.83994 6.70001 6.73994C6.70001 6.63994 6.30001 5.63994 6.10001 5.23994C6.00001 4.93994 5.80001 4.93994 5.70001 4.93994C5.60001 4.93994 5.49999 4.93994 5.29999 4.93994C5.19999 4.93994 4.99999 4.93994 4.79999 5.13994C4.59999 5.33994 4.10001 5.83994 4.10001 6.83994C4.10001 7.83994 4.79999 8.73994 4.89999 8.93994C4.99999 9.03994 6.29999 11.1399 8.29999 11.9399C9.99999 12.6399 10.3 12.4399 10.7 12.4399C11.1 12.4399 11.9 11.9399 12 11.5399C12.2 11.0399 12.2 10.6399 12.1 10.6399C12 10.1399 11.8 10.1399 11.6 10.0399Z"
                      fill="white"
                    />
                  </svg>
                </div>
              </div>
              <GoogleRating
                rating={5.0}
                maxRating={5}
                reviewText="See all our reviews"
              />
            </div>
          </div>
          {/* copyright section */}
          <div className="flex justify-center py-8 md:justify-between md:px-[5%]">
            <span className="text-lg text-white">
              &copy; {new Date().getFullYear()} RD Digitals. All rights
              reserved.
            </span>
            <span className="hidden text-lg text-white md:block">
              <span className="px-4 hover:cursor-pointer hover:text-gray-200">
                Sitemap
              </span>
              <span className="px-4 hover:cursor-pointer hover:text-gray-200">
                Terms & Conditions
              </span>
              <span className="px-4 hover:cursor-pointer hover:text-gray-200">
                Privacy
              </span>
            </span>
          </div>
        </footer>
      </main>
    </>
  );
}

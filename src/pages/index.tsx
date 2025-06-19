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
import { cn } from "@/lib/utils";
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
                  height={100}
                  className="h-full w-auto object-contain"
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
            <div className="flex max-w-4xl flex-col items-center gap-8 rounded-3xl border-2 border-gray-200 bg-gray-50 p-4 sm:p-8 md:flex-row md:items-center">
              <div className="flex h-full items-center">
                <Image
                  src="/optiloom.png"
                  alt="Optiloom logo"
                  width={250}
                  height={250}
                />
              </div>

              <div className="md:text-lef flex items-center space-y-4 rounded-3xl bg-white p-2">
                <div>
                  <h2 className="text-3xl font-semibold text-[#0d5173]">
                    Opti Loom
                  </h2>
                  <div className="text-sm font-light text-gray-700 md:text-xl">
                    <p>Run AB tests directly on your live site.</p>
                    <p>Track results.</p>
                    <p>Make confident changes backed by data.</p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300 md:h-20 md:w-20"
                    aria-label="Learn more"
                  >
                    <ArrowUpRight className="size-9 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex max-w-4xl flex-col items-center gap-8 rounded-3xl border-2 border-gray-200 bg-gray-50 p-4 md:flex-row md:items-center">
              <div className="flex h-full items-center">
                <Image
                  src="/change-detection.png"
                  alt="Change Detection"
                  width={250}
                  height={250}
                />
              </div>

              <div className="flex flex-grow items-center space-y-4 rounded-3xl bg-white p-8 md:text-left">
                <div className="flex-grow">
                  <h2 className="hidden text-3xl font-semibold text-[#0d5173] md:block">
                    Observe IQ
                  </h2>
                  <h2 className="block text-3xl font-semibold text-[#0d5173] md:hidden">
                    Change Detection
                  </h2>
                  <div className="text-sm font-light text-gray-700 md:text-xl">
                    <p>Automatically log and compare page changes.</p>
                    <p> See full before-and-after screenshots.</p>
                    <p>
                      Cut the back-and-forth between marketing and compliance.
                    </p>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <button
                    className="flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 transition-colors hover:bg-gray-300 md:h-20 md:w-20"
                    aria-label="Learn more"
                  >
                    <ArrowUpRight className="size-9 text-gray-700" />
                  </button>
                </div>
              </div>
            </div>
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
          <Button className="mx-auto flex h-16 w-48 cursor-pointer rounded-full bg-orange-400 text-sm text-white hover:bg-orange-600 md:h-12 md:w-64 md:text-base lg:h-16 lg:w-96 lg:text-3xl">
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
                <div className="flex gap-4 pt-16 sm:pt-32">
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
          <h2 className="text-2xl font-medium text-[#175070] md:text-3xl lg:text-5xl">
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
        <footer className="w-full bg-[#175070] pt-16 pb-0" role="contentinfo">
          <div className="mx-auto max-w-[90%] rounded-3xl bg-white p-8 px-4 py-16 shadow-lg sm:px-8 sm:py-24">
            {/* Mobile Layout */}
            <div className="grid grid-cols-1 gap-12 md:hidden">
              {/* Logo Section */}
              <div>
                <img
                  src="/logo-blue.png"
                  alt="RD Digital Logo"
                  className="h-12 w-auto"
                  width={200}
                  height={48}
                />
              </div>

              {/* Navigation Sections */}
              <nav
                className="grid grid-cols-2 gap-8"
                aria-label="Footer Navigation"
              >
                <div>
                  <h2 className="mb-4 text-lg font-semibold text-gray-500">
                    Services
                  </h2>
                  <ul className="space-y-2 text-base text-[#1B1819]">
                    {[
                      "Web Development",
                      "Mobile App Development",
                      "Email Development",
                      "SEO Services",
                      "A/B Testing",
                      "Cloud Development",
                    ].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="hover:text-orange-400 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="mb-4 text-lg font-semibold text-gray-500">
                    Industries
                  </h2>
                  <ul className="space-y-2 text-base text-[#1B1819]">
                    {[
                      "Travel Insurance",
                      "Electric Vehicle Charging",
                      "Healthcare & Surgeries",
                    ].map((item) => (
                      <li key={item}>
                        <a
                          href="#"
                          className="hover:text-orange-400 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none"
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h2 className="mb-4 text-lg font-semibold text-gray-500">
                    Company
                  </h2>
                  <ul className="space-y-2 text-base text-[#1B1819]">
                    {["About Us", "Our Work", "Insights", "Contact"].map(
                      (item) => (
                        <li key={item}>
                          <a
                            href="#"
                            className="hover:text-orange-400 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none"
                          >
                            {item}
                          </a>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                <div>
                  <h2 className="mb-4 text-lg font-semibold text-gray-500">
                    Contact
                  </h2>
                  <ul className="space-y-2 text-base text-[#1B1819]">
                    <li>
                      <a
                        href="https://maps.google.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 hover:text-orange-400 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none"
                      >
                        <MapPin className="h-5 w-5" aria-hidden="true" />
                        <span>Hertfordshire, UK</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="tel:+441234567890"
                        className="flex items-center gap-2 hover:text-orange-400 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none"
                      >
                        <PhoneCall className="h-5 w-5" aria-hidden="true" />
                        <span>+44 1234 567890</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@recognisedesign.com"
                        className="flex items-center gap-2 hover:text-orange-400 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none"
                      >
                        <AtSign className="h-5 w-5" aria-hidden="true" />
                        <span>info@recognisedesign.com</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>

            {/* Desktop Layout */}
            <div className="hidden md:flex md:flex-col md:items-start md:justify-between md:gap-8">
              <div className="flex min-w-[180px] flex-col items-start gap-8">
                <img
                  src="/logo-blue.png"
                  alt="RD Digital Logo"
                  className="mb-2 w-50"
                />
              </div>
              <div className="grid w-full flex-1 grid-cols-1 justify-items-center gap-8 lg:grid-cols-4">
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-500 lg:text-2xl">
                    SERVICES
                  </h3>
                  <ul className="text-md space-y-1 text-[#1B1819] xl:text-xl">
                    <li>Web Development</li>
                    <li>Mobile App Development</li>
                    <li>Email Development</li>
                    <li>SEO Services</li>
                    <li>A/B Testing</li>
                    <li>Cloud Development</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-500 lg:text-2xl">
                    INDUSTRIES
                  </h3>
                  <ul className="text-md space-y-1 text-[#1B1819] xl:text-xl">
                    <li>Travel Insurance</li>
                    <li>Electric Vehicle Charging</li>
                    <li>Healthcare & Surgeries</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-500 lg:text-2xl">
                    COMPANY
                  </h3>
                  <ul className="text-md space-y-1 text-[#1B1819] xl:text-xl">
                    <li>About Us</li>
                    <li>Our Work</li>
                    <li>Insights</li>
                    <li>Contact</li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-500 lg:text-2xl">
                    CONTACT
                  </h3>
                  <ul className="text-md space-y-1 text-[#1B1819] xl:text-xl">
                    <li className="flex items-center gap-2">
                      <span>
                        <MapPin />
                      </span>
                      Hertfordshire, UK
                    </li>
                    <li className="flex items-center gap-2">
                      <span>
                        <PhoneCall />
                      </span>
                      +44 1234 567890
                    </li>
                    <li className="flex items-center gap-2">
                      <span>
                        <AtSign />
                      </span>
                      info@recognisedesign.com
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright Section */}
          <div className="mx-auto max-w-[90%] border-t border-white/10 px-4 py-8 sm:px-8">
            <div className="flex flex-col items-center justify-between gap-4 text-sm text-white sm:flex-row">
              <p>
                © {new Date().getFullYear()} RD Digital. All rights reserved.
              </p>
              <nav className="flex gap-8" aria-label="Footer Legal Links">
                {["Sitemap", "Terms & Conditions", "Privacy"].map((item) => (
                  <a
                    key={item}
                    href="#"
                    className="hover:text-orange-400 focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:outline-none"
                  >
                    {item}
                  </a>
                ))}
              </nav>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

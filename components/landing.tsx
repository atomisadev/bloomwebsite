import Link from "next/link";
import { CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Landing() {
  return (
    <div key="1" className="flex flex-col min-h-[100vh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <SchoolIcon className="h-6 w-6" />
          <span className="ml-2 text-lg font-semibold">Bloom Institute</span>
          <span className="sr-only">Bloom Institute</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            Events
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#"
          >
            HQ
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full pt-12 md:pt-24 lg:pt-32 border-y">
          <div className="px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
              <div>
                <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem]">
                  Building Bright Futures for High School Students
                </h1>
              </div>
              <div className="flex flex-col items-start space-y-4">
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Bloom Institute is dedicated to empowering high school
                  students with the skills and opportunities to kickstart their
                  careers. Join us in making a difference.
                </p>
                <div className="space-x-4">
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Get Involved
                  </Link>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md border border-gray-200 border-gray-200 bg-white px-4 py-2 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:border-gray-800 dark:border-gray-800 dark:bg-gray-950 dark:hover:bg-gray-800 dark:hover:text-gray-50 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
            <img
              alt="Career Development"
              className="mx-auto aspect-[3/1] overflow-hidden rounded-t-xl object-cover"
              height="300"
              src="/career-development.jpg"
              width="1270"
            />
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Our Mission
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Empowering Students, Building Careers
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  At Bloom Institute, we believe in the potential of every high
                  school student. Our programs are designed to provide students
                  with the skills, resources, and opportunities they need to
                  build successful careers.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Career Guidance</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our career guidance program helps students explore different
                  career paths and make informed decisions about their future.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Skill Development</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  We offer a range of skill development programs to equip
                  students with the skills they need to succeed in their chosen
                  careers.
                </p>
              </div>
              <div className="grid gap-1">
                <h3 className="text-lg font-bold">Internship Opportunities</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Our partnerships with local businesses provide students with
                  valuable internship opportunities to gain practical
                  experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Meet Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Dedicated Team
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  Meet the dedicated team behind Bloom Institute. Each member
                  brings their unique skills and passion to our mission of
                  empowering students.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-4 sm:max-w-4xl sm:grid-cols-2 md:gap-6 lg:max-w-5xl lg:grid-cols-4">
              <Card className="h-full">
                <CardContent className="grid gap-1">
                  <img
                    alt="Team Member 1"
                    className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
                    height="140"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <h3 className="text-lg font-bold">Jane Doe</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    CEO
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="grid gap-1">
                  <img
                    alt="Team Member 2"
                    className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
                    height="140"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <h3 className="text-lg font-bold">John Smith</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Career Counselor
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="grid gap-1">
                  <img
                    alt="Team Member 3"
                    className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
                    height="140"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <h3 className="text-lg font-bold">Mary Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Skill Development Coordinator
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="grid gap-1">
                  <img
                    alt="Team Member 4"
                    className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
                    height="140"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <h3 className="text-lg font-bold">James Brown</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Internship Coordinator
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="grid gap-1">
                  <img
                    alt="Team Member 5"
                    className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
                    height="140"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <h3 className="text-lg font-bold">Patricia Davis</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Program Coordinator
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="grid gap-1">
                  <img
                    alt="Team Member 6"
                    className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
                    height="140"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <h3 className="text-lg font-bold">Robert Miller</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Career Guidance Counselor
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="grid gap-1">
                  <img
                    alt="Team Member 7"
                    className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
                    height="140"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <h3 className="text-lg font-bold">Alice Williams</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Outreach Coordinator
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
              <Card className="h-full">
                <CardContent className="grid gap-1">
                  <img
                    alt="Team Member 8"
                    className="mx-auto aspect-[1/1] overflow-hidden rounded-full object-cover"
                    height="140"
                    src="/placeholder.svg"
                    width="140"
                  />
                  <h3 className="text-lg font-bold">David Johnson</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Program Director
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container space-y-12 px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">
                  Upcoming Events
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Join Our Events
                </h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                  We host a variety of events throughout the year. Join us to
                  learn more about our programs and meet our team.
                </p>
              </div>
            </div>
            <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
              <Card className="h-full">
                <CardContent className="grid gap-1">
                  <img
                    alt="Event Image"
                    className="aspect-square object-cover border border-gray-200 w-full rounded-lg overflow-hidden dark:border-gray-800"
                    height={140}
                    src="/placeholder.svg"
                    width={140}
                  />
                  <h3 className="text-lg font-bold">Career Fair 2024</h3>
                  <div className="flex gap-2">
                    <Badge variant="secondary">Feb 18, 2024</Badge>
                    <Badge variant="secondary">Bloom Institute HQ</Badge>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    Join us for our annual career fair. Meet representatives
                    from various industries and explore potential career paths.
                  </p>
                  <Link
                    className="inline-flex h-9 items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                    href="#"
                  >
                    Register Now
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © Bloom Institute. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Contact
            </Link>
          </nav>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input placeholder="Email" type="email" />
            <Button type="submit">Subscribe</Button>
          </div>
        </footer>
      </main>
    </div>
  );
}

function SchoolIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m4 6 8-4 8 4" />
      <path d="m18 10 4 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2v-8l4-2" />
      <path d="M14 22v-4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4" />
      <path d="M18 5v17" />
      <path d="M6 5v17" />
      <circle cx="12" cy="9" r="2" />
    </svg>
  );
}

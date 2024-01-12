import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export function AboutC() {
  return (
    <>
      <Head>
        <title>BRHS Bloom Institute</title>
      </Head>
      <div key="1" className="flex flex-col min-h-[100vh]">
        <header className="px-4 lg:px-6 h-14 flex items-center">
          <Link className="flex items-center justify-center" href="#">
            <Image
              src="/logo.png"
              unoptimized
              alt="Logo"
              width={50}
              height={50}
            />
            <Link href="/" className="ml-2 text-lg font-semibold">
              Bloom Institute
            </Link>
          </Link>
          <nav className="ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#events"
            >
              Events
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="/about"
            >
              About Us
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              href="//bloominst.org"
            >
              HQ
            </Link>
          </nav>
        </header>
        <main className="flex flex-col gap-12 p-6 md:p-12 md:mx-[3rem] lg:mx-[9rem]">
          <h1 className="text-5xl font-bold tracking-lighter">About Us</h1>
          <section className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tighter">
              Why were we created?
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We, Saketh Bongu and Amulya Bisaria, liked the idea of organizing
              events especially after seeing sucessful events such as the club
              fair and International Night.
            </p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tighter">
              Why did we pick Bloom Institute?
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              We discovered the organization through a competition they hosted
              over the previous summer. They encouraged the winners to apply as
              character directors, which led to us subsequently starting the
              club at BR.
            </p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tighter">
              Why join our club?
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              Joining our club will allow you to gain awareness on
              underrepresented career paths. You can gain volunteer hours for
              coming to full club meetings and having a leadership position or
              taking part in one of the committees. Being on the event teams
              will allow you to foster leadership and team bonding.
            </p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tighter">
              What is the Career Fair?
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              The fair intends to introduce students to unconventional career
              paths that aren&apos;t typically emphasized in schools.
              That&apos;s why we plan on inviting artists, musicians,
              restaurant-owners and others to present at our event.
            </p>
          </section>
          <section className="flex flex-col gap-4">
            <h2 className="text-3xl font-bold tracking-tighter">
              Future Community Involvement Plans
            </h2>
            <p className="text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
              In the future, we plan on hosting a science fair at the middle
              school for our next project. An event like this truly inspires
              students to go beyond what they are taught in school, and we think
              this perfectly aligns with Bloom Institute&apos;s mission.
            </p>
          </section>
        </main>
        <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            © Bloom Institute. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-4 sm:gap-6">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="//instagram.com/bloominstitute_brhs"
            >
              Instagram
            </Link>
          </nav>
        </footer>
      </div>
    </>
  );
}

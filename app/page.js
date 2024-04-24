import Link from "next/link";
import Image from "next/image";
export const metadata = {
  // para sa title sa route nga /
  title: "JunkFree | Home",
  description: "JunkFree Home Page",
};

export default function Page() {
  return (
    <main className="bg-white">
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-16">
          <div className="text-center">
            <div className="flex items-center justify-center mb-5">
              <Image
                alt="JunkFree Logo"
                src="https://i.ibb.co/McXTyH1/junkfree-circle.png"
                width={100}
                height={100}
                style={{ width: "auto", height: "auto" }}
                priority
              />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-junkfree sm:text-6xl">
              JunkFree
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#1E374D]">
              JunkFree is a platform designed to promote sustainable living by
              facilitating the exchange of unused items, reducing waste, and
              building a sense of community.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/auth/login"
                className="rounded-md bg-[#04AF70] px-10 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#1E374D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E374D]"
              >
                Sign in
              </Link>
              <Link
                href="/auth/register"
                className="text-sm font-semibold leading-6 text-junkfree"
              >
                Create an Account <span aria-hidden="true">&rarr;</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

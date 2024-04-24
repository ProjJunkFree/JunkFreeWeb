"use client";

export default function NotFound() {
  const devEmail = "jieclarkm@gmail.com";
  const handleSupportLink = () => {
    window.location.href = `mailto:${devEmail}`;
  };
  return (
    <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-green-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-6 text-base leading-7 text-gray-600">
          Sorry, we couldn&apos;t find the page you&apos;re looking for.
          <span className="text-green-600 leading-3 font-medium">
            -JunkFree
          </span>
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <a
            href="/"
            className="rounded-md bg-[#04AF70] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1E374D] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1E374D]"
          >
            Go back home
          </a>
          <a
            href={`mailto:${devEmail}`}
            onClick={handleSupportLink}
            className="text-sm font-semibold text-gray-900 cursor-pointer hover:text-green-600 "
          >
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>
    </main>
  );
}

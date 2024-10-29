import Header from "@/components/Header";

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold mb-8 text-gray-900">About Birds Eye</h1>
            <p className="text-gray-600 text-xl leading-relaxed mb-12">
              Welcome to Birds Eye, an <a href="https://github.com/timothyylim/birdseye" className="text-blue-600 hover:text-blue-800 hover:underline">open source</a> explorer for the <a href="https://community-archive.org" className="text-blue-600 hover:text-blue-800 hover:underline">Community Archive</a> built by <a href="https://x.com/DefenderOfBasic" className="text-blue-600 hover:text-blue-800 hover:underline">@DefenderOfBasic</a> and <a href="https://x.com/wayfaring_tim" className="text-blue-600 hover:text-blue-800 hover:underline">@wayfaring_tim</a>.
            </p>

            <div className="bg-white rounded-xl shadow-md p-8 mb-10">
              <p className="text-gray-700 text-lg mb-6">Don&apos;t see your profile here? Check out this short video on how to request it from X and upload it to the <a href="https://community-archive.org" className="text-blue-600 hover:text-blue-800 hover:underline">Community Archive</a>:</p>

              <div className="relative overflow-hidden pt-[56.25%] rounded-lg">
                <iframe 
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/S9BSfu2M1_I?si=1jC0EvkCCSdhAMu8" 
                  title="YouTube video player" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                />
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-3xl font-bold mb-6 text-gray-900">Join Our Community</h2>
              <p className="text-gray-600 text-xl leading-relaxed mb-8">
                Have feature requests or found a bug? Join our Discord community to discuss, share feedback, and connect with other users.
              </p>
              <a 
                href="https://discord.gg/VRvYGvrk8Z"
                className="inline-flex items-center px-8 py-4 bg-indigo-600 text-white text-lg font-semibold rounded-lg hover:bg-indigo-700 transition-all duration-200 shadow-sm hover:shadow-lg hover:translate-y-[-2px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Discord Server
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
const projects = [
  {
    title: "AI Survival Guide Wikipedia",
    // Replace this with your first video's regular YouTube URL.
    youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
  },
  {
    title: "AI Foodie Consultant",
    // Replace this with your second project's regular YouTube URL.
    youtubeUrl: "https://www.youtube.com/watch?v=M7lc1UVf-VE",
  },
];

const clippedCorners = {
  clipPath:
    "polygon(12px 0, calc(100% - 12px) 0, 100% 12px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 12px 100%, 0 calc(100% - 12px), 0 12px)",
};

function getYouTubeEmbedUrl(youtubeUrl) {
  try {
    const url = new URL(youtubeUrl);
    const isShortUrl = url.hostname === "youtu.be";
    const pathParts = url.pathname.split("/").filter(Boolean);
    const videoId = isShortUrl
      ? pathParts[0]
      : url.searchParams.get("v") ||
        (pathParts[0] === "shorts" || pathParts[0] === "embed"
          ? pathParts[1]
          : "");

    return videoId
      ? `https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?rel=0`
      : "";
  } catch {
    return "";
  }
}

function ProjectCard({ title, youtubeUrl }) {
  const embedUrl = getYouTubeEmbedUrl(youtubeUrl);

  return (
    <article className="group relative rounded-sm drop-shadow-[0_0_14px_rgba(255,255,255,0.16)] transition duration-500 hover:drop-shadow-[0_0_24px_rgba(255,255,255,0.32)]">
      <div
        className="bg-white/70 p-px transition-colors duration-500 group-hover:bg-white"
        style={clippedCorners}
      >
        <div
          className="relative flex min-h-44 flex-col items-center justify-center overflow-hidden bg-[#15171b]/95 px-6 py-10 text-center sm:min-h-52 sm:px-10 sm:py-12 lg:min-h-56"
          style={clippedCorners}
        >
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white to-transparent opacity-40 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="pointer-events-none absolute -left-10 -top-10 h-24 w-24 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:bg-white/20" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-24 w-24 rounded-full bg-white/10 blur-2xl transition-all duration-500 group-hover:bg-white/20" />

          <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
            {title}
          </h2>

          <iframe
            className="mt-5 aspect-video w-full max-w-md border border-white/30 bg-black shadow-[0_0_18px_rgba(255,255,255,0.08)]"
            src={embedUrl}
            title={`${title} YouTube demo`}
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
      </div>
    </article>
  );
}

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top,_#292c31_0%,_#17191d_42%,_#090b0e_100%)] font-finlandica text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='112' height='98' viewBox='0 0 112 98'%3E%3Cpath d='M28 1h56l27 48-27 48H28L1 49 28 1Z' fill='none' stroke='%23fff' stroke-width='1'/%3E%3C/svg%3E\")",
          backgroundSize: "112px 98px",
          maskImage:
            "linear-gradient(to right, black 0%, transparent 35%, transparent 65%, black 100%)",
          WebkitMaskImage:
            "linear-gradient(to right, black 0%, transparent 35%, transparent 65%, black 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_rgba(5,7,9,0.18)_55%,_rgba(5,7,9,0.72)_100%)]"
      />

      <div className="relative mx-auto flex min-h-screen w-full max-w-4xl flex-col justify-center px-5 py-10 sm:px-8 sm:py-14 lg:py-16">
        <header className="mb-10 text-center sm:mb-12">
          <h1 className="text-4xl font-medium tracking-[-0.035em] text-white drop-shadow-[0_0_22px_rgba(255,255,255,0.12)] sm:text-6xl lg:text-[4rem]">
            Joshua&apos;s Portfolio
          </h1>
        </header>

        <section className="grid gap-6 sm:gap-8" aria-label="Featured projects">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </section>
      </div>
    </main>
  );
}

export default App;

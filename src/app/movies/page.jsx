import rawData from "../../data.json";

export default function MoviesPage() {
  const data = rawData.entries
    .filter(
      (entry) => entry.releaseYear >= 2010 && entry.programType === "movie"
    )
    .slice(0, 21)
    .sort((a, b) => a.title.localeCompare(b.title));
  console.log(data);

  return (
    <section className="grid gap-4">
      <article className="bg-slate-800 text-white text-xl py-4 shadow-md">
        <div className="m-auto max-w-screen-md px-4">Popular Movies</div>
      </article>
      <article className="m-auto max-w-screen-md p-4">
        <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(180px,1fr))]">
          {data.map((entry) => (
            <div key={entry.title} className="grid gap-2">
              <img
                src={entry.images["Poster Art"].url}
                width={entry.images["Poster Art"].width}
                height={entry.images["Poster Art"].height}
                alt={entry.title}
              />
              <p className="leading-5">{entry.title}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

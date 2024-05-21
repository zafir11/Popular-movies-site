import Movie from "./Movie";
export default async function Home() {
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.MOVIE_KEY}`
  );
  const res = await response.json();
  return (
    <main>
      <div className="grid gap-16 grid-cols-fluid">
        {res.results.map((m) => (
          <div key={m?.id}>
            <Movie
              title={m?.title}
              id={m?.id}
              posterPath={m?.poster_path}
              releaseDate={m?.release_date}
            />
          </div>
        ))}
      </div>
    </main>
  );
}

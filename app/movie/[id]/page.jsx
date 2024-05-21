import Image from "next/image";
export default async function MovieDetail({ params }) {
  const { id } = params;
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.MOVIE_KEY}`
  );

  const movie = await response.json();
  const imageBaseURL = "https://image.tmdb.org/t/p/original";

  return (
    <div>
      <div>
        <h2 className="text-2xl">{movie.title}</h2>
        <h2 className="text-lg">{movie.release_date}</h2>
        <h2>Runtime: {movie.runtime} minutes</h2>
        <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-2 rounded-md">
          {movie.status}
        </h2>
        <Image className="my-12 w-full" src={imageBaseURL + movie.backdrop_path}
        width={1000}
        height={1000}
        alt=""
        priority></Image>
        <p>{movie.overview}</p>
      </div>
    </div>
  );
}

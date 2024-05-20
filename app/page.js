import Movie from "./Movie";
export default async function Home() {
  const url = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_KEY}`, );
  const res = await url.json()
  return (
    <main >
      <div className="grid gap-16 grid-cols-fluid">
     {res.results.map((m)=>(
         <div>
          <Movie 
          title={m?.title}
          key= {m?.id}
          id={m?.id}
          posterPath={m?.poster_path}
          releaseDate={m?.release_date}
          />
       </div>
     ))
   }
   </div>
    </main>
  )
}

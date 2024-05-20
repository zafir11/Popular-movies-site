import Link from "next/link";
import Image from "next/image";

export default function Movie({title, id, posterPath,releaseDate }) {
    const image= "https://image.tmdb.org/t/p/original"
  return (
    <div>
         <Link href={`/movie/${id}`}>
            <Image src={image + posterPath} alt=""
            width={800}
            height={800}/>
        </Link>
        <h1>
            {title}
        </h1>
        <h2>{releaseDate}</h2>
       
    </div>
  )
}

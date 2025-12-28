import React from "react";
import { moviesStyles } from "../assets/dummyStyles";
import movies from "../assets/dummymoviedata";
import { Link } from "react-router-dom";
import { Ticket } from "lucide-react";

const Movies = () => {
	const visibleMovies = movies.slice(0, 6); // Show only first 6 movies
	return (
		<div className={moviesStyles.container}>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Pacifico&display=swap');
      `}</style>
			<h2
				style={{
					fontFamily: "'Dancing Script', cursive",
				}}
				className={moviesStyles.title}
			>
				Featured Movies
			</h2>
			<div className={moviesStyles.grid}>
				{visibleMovies.map((movie) => (
					<article key={movie.id} className={moviesStyles.movieArticle}>
						<Link to={`/movies/${movie.id}`} className={moviesStyles.movieLink}>
							<img
								src={movie.img}
								alt={movie.title}
								className={moviesStyles.movieImage}
								loading="lazy"
							/>
						</Link>
						<div className={moviesStyles.movieInfo}>
							<div className={moviesStyles.titleContainer}>
								<Ticket className={moviesStyles.ticketsIcon} />
								<span
									id={`movie-tile-${movie.id}`}
									className={moviesStyles.movieTitle}
									style={{ fontFamily: "'Pacifico', cursive" }}
								>
									{movie.title}
								</span>
							</div>
							<div className={moviesStyles.categoryContainer}>
								<span className={moviesStyles.categoryText}>{movie.category}</span>
							</div>
						</div>
					</article>
				))}
			</div>
		</div>
	);
};

export default Movies;

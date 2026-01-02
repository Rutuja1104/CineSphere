import React, { useEffect, useState } from 'react'
import { moviesPageStyles } from '../assets/dummyStyles';
import MOVIES from '../assets/dummymdata';

const MoviesPage = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [showAll, setShowAll] = useState(false);
  const movies = MOVIES;

  const filteredMovies = activeCategory === 'all'
    ? movies
    : movies.filter(movie => movie.category === activeCategory);
  const COLLAPSE_COUNT = 12;

  useEffect(() => {
    setShowAll(false);
  }, [activeCategory]);

  const visibleMovies = showAll ? filteredMovies : filteredMovies.slice(0, COLLAPSE_COUNT);

  const categories = [
    { id: 'all', name: 'All Movies' },
    { id: 'action', name: 'Action' },
    { id: 'horror', name: 'Horror' },
    { id: 'comedy', name: 'Comedy' },
    { id: 'adventure', name: 'Adventure' }
  ];
  return (
    <div className={moviesPageStyles.container}>
      <section className={moviesPageStyles.categories}>
        <div className={moviesPageStyles.categoriesContainer}>
          <div className={moviesPageStyles.categoriesFlex}>
            {categories.map(category => (
              <button
                key={category.id}
                className={`${moviesPageStyles.categoryButton.base} ${activeCategory === category.id ? moviesPageStyles.categoryButton.active : moviesPageStyles.categoryButton.Inactive}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
            
          </div>
        </div>
      </section>
    </div>
  )
}

export default MoviesPage
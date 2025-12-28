import React from 'react'
import { bannerStyles } from '../assets/dummyStyles'
import Video from '../assets/MovieBannerVideo.mp4';
import { Info, Star, Ticket } from 'lucide-react';

const Banner = () => {
  return (
    <div className={bannerStyles.container}>
      <div className={bannerStyles.videoContainer}>
        <video
          className={bannerStyles.video}
          // src="https://www.w3schools.com/html/mov_bbb.mp4"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={Video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={bannerStyles.overlay}></div>
      </div>
      <div className={bannerStyles.content}>
        <div className={bannerStyles.contentInner}>
          <h1 className={bannerStyles.title} style={{ fontFamily: "'Dancing Script', cursive" }}>Ocean's Legacy</h1>
          <p className={bannerStyles.description}>
            An epic adventure beneath the waves. Explore the mysteries of the deep ocean and discover treasure beyound imagination in this brethtaking cinematic experience.
          </p>
          <div className={bannerStyles.ratingGenreContainer}>
            <div className={bannerStyles.ratingContainer}>

              <div className={bannerStyles.starsContainer}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    className={bannerStyles.star}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <span className={bannerStyles.ratingText}>4.8/5</span>
            </div>
            <div className={bannerStyles.genreText}>
              Adventure • Fantasy • Drama
            </div>
            <div className={bannerStyles.buttonsContainer}>
              <a href='/movies' className={bannerStyles.bookButton}>
                <Ticket className={bannerStyles.icon} />
                Book Movies
              </a>
              <a href='/contact' className={bannerStyles.infoButton}>
                <Info className={bannerStyles.icon} />
                More Info
              </a>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{bannerStyles.customCSS}</style>
    </div>
  )
}

export default Banner
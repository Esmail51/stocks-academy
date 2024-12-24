import React, { useRef, useState } from 'react'
import video1 from '../../assets/vedios/Just video with audio.webm'

export default function VideoPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
    }
  };

  const handlePlay = () => setIsPlaying(true);

  const handlePause = () => setIsPlaying(false);

  return (
    <div
      className="video-container w-full h-full "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video */}
      <h1 className="md:hidden lg:text-[76px] md:text-5xl text-4xl font-medium leading-tight mb-6">
      Strictly Stocks <br />Academy
    </h1>
      <video
        ref={videoRef}
        controls={true} // Hide default controls
        width="100%"
        className="rounded-xl h-[480px] md:h-full object-cover "
        autoPlay={true}
        
        loop
        muted
        onPlay={handlePlay}
        onPause={handlePause}
        onClick={togglePlayPause} // Allow toggling on video click
      >
        <source src={video1} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Play/Pause Button */}
      {isHovered && (
        <button
          onClick={togglePlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-purple-500 text-white p-4 rounded-full shadow-lg focus:outline-none"
        >
          {isPlaying ? (
            // Pause Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 9v6m4-6v6"
              />
            </svg>
          ) : (
            // Play Icon
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14.752 11.168l-5.197-3.04A1 1 0 008 9.04v5.92a1 1 0 001.555.832l5.197-3.04a1 1 0 000-1.664z"
              />
            </svg>
          )}
        </button>
      )}
    </div>
  )
}

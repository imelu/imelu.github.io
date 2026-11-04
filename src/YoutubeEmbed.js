import React, { useState } from "react";
import PropTypes from "prop-types";

const YoutubeEmbed = ({ embedId }) => {
  const [playing, setPlaying] = useState(false);
  const videoId = embedId.split('?')[0];

  // Create a player only when requested, rather than ten players on page load.
  return (
    <div className="video-responsive">
      {playing ? (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Project video"
        />
      ) : (
        <button className="video-preview" onClick={() => setPlaying(true)} aria-label="Play project video">
          <img src={`https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`} alt="" loading="lazy" decoding="async" width="480" height="360" />
          <span className="video-play">▶ <span>Play video</span></span>
        </button>
      )}
    </div>
  );
};

YoutubeEmbed.propTypes = {
  embedId: PropTypes.string.isRequired
};

export default YoutubeEmbed;

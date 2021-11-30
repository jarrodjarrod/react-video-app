import react from 'react';
import Spinner from './Spinner.js';

const VideoDetail = ({ video }) => {
  if (!video) {
    return <Spinner />;
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div title="Video Player" className="ui embed">
        <iframe src={videoSrc} allow="fullscreen" />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;

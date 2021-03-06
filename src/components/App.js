import react, { useEffect, useState } from 'react';
import SearchBar from './SearchBar.js';
import youtube from '../apis/youtube.js';
import VideoList from './VideoList.js';
import VideoDetail from './VideoDetail.js';
import useVideos from '../hooks/useVideos.js';

const App = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const { videos, search } = useVideos('hot ones');

  useEffect(() => {
    setSelectedVideo(videos[0]);
  }, [videos]);

  return (
    <div className="ui container" style={{ marginTop: '10px' }}>
      <SearchBar onTermSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail video={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={setSelectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;

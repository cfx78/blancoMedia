import './BackgroundVideo.css';
import bgvid from '../../../src/assets/blancoBackGround.mp4';
const BackgroundVideo = () => {
	return (
		<video autoPlay loop muted id="video">
			<source src={bgvid} type="video/mp4" />
		</video>
	);
};

export default BackgroundVideo;

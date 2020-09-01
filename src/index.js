// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import VideoList from './components/VideoList.js';

ReactDOM.render(<App />, document.getElementById('app'));
ReactDOM.render(<VideoList />, document.getElementById('videoList'));
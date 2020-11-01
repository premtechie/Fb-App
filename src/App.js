import './App.css';
import 'antd/dist/antd.css';
import Header from './Components/Header/Header'
import ActionButtons from './Components/LeftSideContent/ActionButtons';
import ShortCuts from './Components/LeftSideContent/ShortCuts';
import Explore from './Components/LeftSideContent/Explore';
import SavedPages from './Components/RightSideContent/SavedPages';
import SuggestedGroup from './Components/RightSideContent/SuggestedGroup';
import Layout from './Components/Layout/Layout';
import CreatePost from './Components/CreatePost/CreatePost';
import Stories from './Components/Stories/Stories';
import Posts from './Components/Posts/Posts';



function App() {
  return (
      <div className="App" >
        <Header />
        {/* <ActionButtons />
        <ShortCuts />
        <Explore /> */}
        {/* <SavedPages /> */}
        {/* <SuggestedGroup /> */}
        <Layout />
        {/* <CreatePost /> */}
        {/* <Stories /> */}
        {/* <Posts /> */}
      </div>
  );
}

export default App;

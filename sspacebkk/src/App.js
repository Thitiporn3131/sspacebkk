import './App.css';
import BannerSection from './components/BannerSection/BannerSection';
import Navigation from './components/Navigation/Navigation';
import Category from './components/Sections/Categories/Category';
import JustIn from './components/Sections/JustIn';
import content from './data/content.json'
function App() {
  return (
    <div className="App">
      <Navigation />
      <BannerSection />
      <JustIn />
      {content?.categories && content?.categories?.map((item,index)=>
      <Category key={item?.title+index} {...item}/>)}
    </div>
  );
}

export default App;

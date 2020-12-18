import './App.css';
import ProfileCard from './components/ProfileCard'

const App = () => {

  const data = {
    pic: 'image-victor.jpg',
    fname: 'Victor',
    lname: 'Crest',
    age: 26,
    city: 'London',
    followers: '80K',
    likes: '803K',
    photos: '1.4K'
  }

  return (
    <div className="App">
      <ProfileCard data={data} />
    </div>
  );
}

export default App;

import Banner from '../Components/Banner/Banner';
import NavBar from '../Components/NavBar/NavBar';
import RowPost from '../Components/RowPost/RowPost';
import {originals,action} from '../urls'
import "../styles/App.css";

function Home() {
  return (
    <>
    <NavBar/>
    <Banner/>
    <RowPost url={originals} title='Netflix Originals'/>
    <RowPost url={action} title='Action ' isSmall/>
    
    </>

  )
}

export default Home
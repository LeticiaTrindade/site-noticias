import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import Notices from './Notices';




function App() {
  return (<>
    <Header />
    <section className='container  myContainer'>
      <Notices />
    </section>
    <Footer />

    

  </>
  );
}

export default App;

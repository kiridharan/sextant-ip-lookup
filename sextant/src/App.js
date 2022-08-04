import './App.css';
import Banner from './components/banner';
import Exhibit from './components/Exhibit';
import AddressDisplay from './components/Address'; 
function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name=" IPv4 Address">
          <AddressDisplay url='https://api.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name=" IPv6 Address">
          <AddressDisplay url='https://api64.ipify.org?format=json' />
      </Exhibit>
    </div>
  );
}

export default App;

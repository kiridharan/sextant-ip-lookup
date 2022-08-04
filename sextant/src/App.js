import './App.css';
import Banner from './components/banner';
import Exhibit from './components/Exhibit';
import Address from './components/Address'; 
import PylonConn from './components/PylonConn';
function App() {
  return (
    <div className="App">
      <Banner bannerText="Sextant" />
      <Exhibit name=" IPv4 Address">
          <Address url='https://api.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name=" IPv6 Address">
          <Address url='https://api64.ipify.org?format=json' />
      </Exhibit>
      <Exhibit name=" IPv4 Address">
        <PylonConn />
        </Exhibit>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import MyButton from './MyButton';
import MyStyles from './normal.module.css';
import MyStyles2 from './article.module.css';
import Header from './Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div><img src={process.env.PUBLIC_URL + './logo-koding-akademi.jpg'} style={{ width: '350px', height: '100px', margin: '10px'  }} /></div>
      <div style={{ marginRight: '900px' }}><button className={MyStyles.normal}>Login</button></div>
      </div>
      <div style={{ textAlign: 'left', margin: '20px' }}>
      <h2>{process.env.REACT_APP_WEBSITE_NAME}</h2>
      <h2 style={{ fontStyle: 'italic', color: 'blue' }}>Copyright 2023</h2>
      </div>
    </div>
  );
}

export default App;

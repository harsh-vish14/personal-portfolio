import Header from './components/header'
import Main from './components/main'
import { BrowserRouter as Router, Switch ,Link} from 'react-router-dom'
function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
      <Main />
        {/* <Switch> */}
          {/* <Link component={Header} /> */}
          {/* <Link component={Main}/> */}

        {/* </Switch> */}
      </Router>
    </div>
  );
}

export default App;

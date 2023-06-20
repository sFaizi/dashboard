import Sidebar from './components/sidebar/Sidebar';
import classes from './App.module.css';
import Header from './components/header/Header';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <div className={classes.app}>
      <Sidebar />
      <Header />
      <Dashboard />
    </div>
  );
}

export default App;

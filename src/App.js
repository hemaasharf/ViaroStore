import AllRoutes from './routes/AllRoutes';
import { Header, Footer, UpdateTitle } from './components'

function App() {
  return (
    <div className="App dark:bg-slate-800">
      <UpdateTitle title= "Viaro E-Book"/>
      <Header />
      <AllRoutes />
      <Footer />

    </div>
  );
}

export default App;

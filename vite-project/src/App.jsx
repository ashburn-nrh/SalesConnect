
import "@radix-ui/themes/styles.css";

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Onboarding from './pages/Onboarding';
import Explore from './pages/explore';
import Queue from './pages/Queue';
import Home from './pages/Home';
import People from "./pages/people";
import Companies from "./pages/companies";
import List from "./pages/list";
import Dataenrichment from "./pages/dataenrichment";
import Email from "./pages/email";
import { Theme } from "@radix-ui/themes";


function App() {
  return (
    <Router>
      <Theme>
    <Layout>
      <Routes>
        
      {/* <Route path="/" element={<Home />} />*/}
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/queue" element={<Queue />} />
        <Route path="/home" element={<Home />} />
        <Route path="/people" element={<People />}/>
        <Route path="/companies" element={<Companies />}/>
        <Route path='/lists' element={<List/>}/>
        <Route path='/dataenrichment' element={<Dataenrichment/>}/>
        <Route path='/email' element={<Email/>}/>
      </Routes>
    </Layout>
    </Theme>
  </Router>
  )
}

export default App

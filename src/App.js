import { Email } from './Component/Email'
import { Main } from './Component/Main'
import { Route, Routes} from "react-router-dom";
import { Contact } from './Component/Contact'

function App() {
  return (
    <>
      <Routes path='' element={<Contact />}>
         <Route path='/' index element={<Main />}/>
         <Route path='/email' element={<Email />}/>
      </Routes>

    </>
  );
}

export default App;

import { SignedIn, SignedOut, SignInButton, SignOutButton, User, UserProfile } from '@asgardeo/react';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import EmployeeMgmt from './pages/EmployeeMgmt';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {

  return (
    <>
  <Router>

    <Header />
    <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/employee-mgmt" element={<>
              <SignedIn>
                <EmployeeMgmt />
              </SignedIn>

              <SignedOut>
                <div style={{ textAlign: "center" }}>
                  <h1>Please sign in to continue</h1>
                  <SignInButton />
                </div>
              </SignedOut>
            </>} />
    </Routes>



    <SignedIn>
      <Header />
        <br />
        <User>
            {(user) => (
              <div>
                <p>Welcome back, {user.userName || user.username || user.sub}</p>
              </div>
            )}
        </User>
        <UserProfile />
    </SignedIn>
  

  </Router>

  </>
  );
}

export default App

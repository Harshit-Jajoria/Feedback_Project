// import React from 'react';

// const App = () => {
//   const firstName = 'Harshit';
//   const lastName = 'Jajoria';
//   const comments = [
//     {
//       id: 1,
//       text: 'hello 1 ',
//     },
//     {
//       id: 2,
//       text: 'hello 2 ',
//     },
//     {
//       id: 2,
//       text: 'hello 3',
//     },
//   ];
//   return (
//     <>
//       <h1> First Name - {firstName}</h1>
//       <h1> Last Name - {lastName}</h1>
//       <div className="comments">
//         <h3> Total Comments= {comments.length}</h3>
//         <ul>
//           {comments.map((c, i) => (
//             <li key={c.id}>{c.text}</li>
//           ))}
//         </ul>
//       </div>
//     </>
//   );
// };

// export default App;

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';
import { FeedbackProvider } from './context/FeedbackContext';
function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <FeedbackForm f />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>

            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
        <AboutIconLink />
      </Router>
    </FeedbackProvider>
  );
}
export default App;

// import { createContext, useEffect, useState } from 'react';
// // import { v4 as uuidv4 } from 'uuid';
// import FeedbackData from '../data/FeedbackData';
// const FeedbackContext = createContext();
// export const FeedbackProvider = ({ children }) => {
//   // const [feedback, setFeedback] = useState([ // this was for just testing
//   //   {
//   //     id: 1,
//   //     text: 'This is from context',
//   //     rating: 7,
//   //   },
//   //   {
//   //     id: 2,
//   //     text: 'This is also  from context',
//   //     rating: 9,
//   //   },
//   // ]);

//   const [feedback, setFeedback] = useState(FeedbackData);
//   const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });
//   const [isLoading, setIsLoading] = useState(true);
//   useEffect(() => {
//     fetchFeedback();
//   }, []);
//   //FETCH FEEDBACK FROM DB.JSON
//   const fetchFeedback = async () => {
//     // const response = await fetch(`/feedback?_sort=id&_order=desc`);
//     const response = await fetch(`/feedback`);
//     const data = await response.json();
//     //console.log(data)
//     setFeedback(data);
    
//     setIsLoading(false);
//   };
//   // DELETE FEEDBACK
//   const deleteFeedback = (id) => {
//     if (window.confirm('Are you sure you want to delete?')) {
//       setFeedback(feedback.filter((item) => item.id !== id));
//     }
//   };
//   // ADD FEEDBACK
//   const addFeedback = async (newFeedback) => {
//     const response = await fetch('/feedback/', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newFeedback),
//     });
//     const data = await response.json();
//     setFeedback([data, ...feedback]);
//   };

//   // SET EDIT TO FEEDBACK
//   const editFeedback = (item) => {
//     setFeedbackEdit({
//       item,
//       edit: true,
//     });
//   };
//   // UPDATE FEEDBACK
//   const updateFeedback = (id, upditem) => {
//     setFeedback(
//       feedback.map((item) => (item.id === id ? { ...item, ...upditem } : item))
//     );
//   };

//   return (
//     <FeedbackContext.Provider
//       value={{
//         feedback,
//         feedbackEdit,
//         isLoading,
//         deleteFeedback,
//         addFeedback,
//         editFeedback,
//         updateFeedback,
//       }}
//     >
//       {children}
//     </FeedbackContext.Provider>
//   );
// };
// export default FeedbackContext;




// copied
import { createContext, useState, useEffect } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true)
  const [feedback, setFeedback] = useState([])
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  })

  useEffect(() => {
    fetchFeedback()
  }, [])

  // Fetch feedback
  const fetchFeedback = async () => {
    const response = await fetch(`/feedback?_sort=id&_order=desc`)
    const data = await response.json()

    setFeedback(data)
    setIsLoading(false)
  }

  // Add feedback
  const addFeedback = async (newFeedback) => {
    const response = await fetch('/feedback', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newFeedback),
    })

    const data = await response.json()

    setFeedback([data, ...feedback])
  }

  // Delete feedback
  const deleteFeedback = async (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      await fetch(`/feedback/${id}`, { method: 'DELETE' })

      setFeedback(feedback.filter((item) => item.id !== id))
    }
  }

  // Update feedback item
  const updateFeedback = async (id, updItem) => {
    const response = await fetch(`/feedback/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updItem),
    })

    const data = await response.json()

    // NOTE: no need to spread data and item
    setFeedback(feedback.map((item) => (item.id === id ? data : item)))

    
    setFeedbackEdit({
      item: {},
      edit: false,
    })
  }

  // Set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    })
  }

  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        isLoading,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  )
}

export default FeedbackContext


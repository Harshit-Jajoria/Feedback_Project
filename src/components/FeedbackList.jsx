// import { motion, AnimatePresence } from 'framer-motion'
// import PropTypes from 'prop-types'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
import Spinner from '../shared/Spinner'
import FeedbackItem from './FeedbackItem'

function FeedbackList() {

  const {feedback,isLoading}=useContext(FeedbackContext)

  if (!isLoading && (!feedback || feedback.length === 0))
    return <p>No Feedback Yet</p>
  

  return isLoading ? (
    <Spinner />
  ) : (
    <div className='feedback-list'>
      {feedback.map((item) => (
        <FeedbackItem key={item.id} item={item} f />
      ))}
    </div>
  )
}


// FeedbackList.propTypes = {
//   feedback: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       text: PropTypes.string.isRequired,
//       rating: PropTypes.number.isRequired,
//     })
//   ),
// }
export default FeedbackList
import spinner from './/spinner.gif'

function Spinner() {
  return (
    <img
      src={spinner}
      alt='Loading...'
     style={{ width: '200px', margin: 'auto', display: 'block' }}
    />
    
  )
}

export default Spinner
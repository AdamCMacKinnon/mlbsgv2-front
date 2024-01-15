import {useState} from 'react';

const ResponseMessage = (props: any) => {
  const [message, setMessage] = useState('');

  const { display, response, successMessage } = props;

  let styles = {
    color: ''
  }

  if (response?.status) {
    if (response.status === 200) {
      setMessage(successMessage)
      styles.color = 'green';
    } else {
      setMessage(response.data.message)
      styles.color = 'red';
      
    }
  }


  return (
    <>
    {display ? (<p style={styles}>{message}</p>): null}
    </>
    
  )
}

export default ResponseMessage;
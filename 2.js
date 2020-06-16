 const fetch_cached = () => {
  if (!localStorage.getItem('myData')) {
    axios.get('http://www.exampl.com/data')
      .then(response => {
        localStorage.setItem('myData', response.data);
      })
      .catch(error => {
        console.log('Error');
      });
  }
}
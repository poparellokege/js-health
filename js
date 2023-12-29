function checkHealth(url) {
	return fetch(url)
	  .then(response => {
		if (response.ok) {
		  console.log('URL is healthy');
		} else {
		  console.error('URL is not healthy');
		}
	  })
	  .catch(error => {
		console.error('Error occurred while checking health:', error);
	  });
  }
  
  const url = 'https://www.google.ru'; 
  checkHealth(url);
  

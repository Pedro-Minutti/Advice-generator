const fetchAPI = () => {
    return fetch('https://api.adviceslip.com/advice')
      .then((response) => response.json())
      .then((data) => data.slip.advice);
}

export default fetchAPI;
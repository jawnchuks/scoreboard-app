
const current = new Date();
const date = `${current.getFullYear()}-${current.getMonth()+1}-${current.getDate()}`;

const instance = {
    method: 'GET',
    // url: `https://sportscore1.p.rapidapi.com/sports/1/events/date/2021-12-28`,
    url: `https://sportscore1.p.rapidapi.com/sports/1/events/date/${date}`,
    params: {page: '1'},
    headers: {
      'x-rapidapi-host': 'sportscore1.p.rapidapi.com',
      'x-rapidapi-key': '8ea8b66a56msh872e29b94a6e020p151b64jsn39f74de1c0cc'
    }
  };

  export default instance
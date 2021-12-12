let fetchData = async () => {
  try {
    const response = await fetch("https://swapi.dev/api/people");
    const data = await response.json();
    // console.log(data.results);
    let starsArr = [...data.results]
    console.log(starsArr);
  } catch (error) {
    console.log(error);
  }
};
fetchData();

const createTable = () =>{
    const container = document.createElement('div');
    const table = document.createElement('table');
    const tableRow = document.createElement('tr');
    const tableRow2 = document.createElement('td')
    

}
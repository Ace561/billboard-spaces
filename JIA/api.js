
export const getWeather = async (city) => {
    const API_KEY = '5f15632b20b2b6016eb772bb7b2e3970'; // Replace with your actual API key
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    return data;
  };
  
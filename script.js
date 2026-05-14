const form = document.getElementById("weatherForm")
const input = document.getElementById("cityInput")
const result = document.getElementById('result')

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const city = input.value.trim();
  if (!city) return;

  result.innerHTML = "Загрузка погоды..."

  try {
    const res = await fetch(`https://wttr.in/${city}?format=j1`);
      const data = await res.json();

      const current = data.current_condition[0];
      const temp = current.temp_C;
      const description = current.weatherDesc[0].value;
      const icon = current.weatherIconUrl[0].value;

      result.innerHTML = `<h2>${city}</h2>
      <img src ="${icon}" alt="Погода">
      <p><strong>${description}</strong>
      </p>
      <p>Температура: ${temp}C</p>
      `;
    }catch (err) {
      result.innerHTML = "Ошибка: не удалось получить данные.";
    }
});

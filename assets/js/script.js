const form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  //valores select
  const gender = getSelectedValue("gender");
  const activity_level = getSelectedValue("activity_level");

  //valores input
  const age = getInputNumberValue("age");
  const weight = getInputNumberValue("weight");
  const height = getInputNumberValue("height");

  //console.log(typeof age);
  const tmb = Math.round(
    gender === "female"
      ? 655 + 9.6 * weight + 1.8 * height - 4.7 * age
      : 66 + 13.7 * weight + 5 * height - 6.8 * age
  );

  const maintenance = Math.round(tmb * Number(activity_level));
  const loseWeight = maintenance - 450;
  const gainWeight = maintenance + 450;

  const layout = `
          <div class="result-content">
          <h2>Aquí está el resultado</h2>
          <ul>
              <li>Tu metabolismo basal es <strong>${tmb} calorías</strong>.</li>
              <li>
                Para mantener tu peso necesitas consumir en promedio
                <strong>${maintenance} calorías</strong>.
              </li>
              <li>
                Para perder peso necesitas consumir en promedio
                <strong>${loseWeight} calorías</strong>.
              </li>
              <li>
                Para subir de peso necesitas consumir en promedio
                <strong>${gainWeight} calorias</strong>
              </li>
            </ul>
          </div>`;

  //mostrar result-content
  const result = document.getElementById("result");
  result.innerHTML = layout;
}

function getSelectedValue(id) {
  const select = document.getElementById(id);
  return select.options[select.selectedIndex].value;
}

function getInputNumberValue(id) {
  return Number(document.getElementById(id).value);
}

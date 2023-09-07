document.getElementById('miFormulario').addEventListener('submit', function(event) {
  event.preventDefault();

  const nombre = document.getElementById('nombre').value;
  const apellido = document.getElementById('apellido').value;
  const fecha = document.getElementById('fecha').value;

  const URL = "https://jsonplaceholder.typicode.com/users";

  const info = {
      nombre: nombre,
      apellido: apellido,
      fecha: fecha
  };

  fetch(URL, {
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      body: JSON.stringify(info)
  })
  .then(responseData => responseData.json())
  .then(responseData => {
      console.log("Respuesta del servidor:", responseData);
  })
  .catch((error) => console.error("Error:", error));
});



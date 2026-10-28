
const API_URL = "https://www.themealdb.com/api/json/v1/1";

const formulario = document.getElementById("form-busqueda");
const buscador = document.getElementById("buscar-receta");
const contenedor = document.getElementById("contenedor-recetas");
const mensaje = document.getElementById("mensaje-estado");

function mostrarMensaje(texto) {
  mensaje.textContent = texto;
}

function crearTarjeta(receta) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta-receta";

  const imagen = document.createElement("img");
  imagen.src = receta.strMealThumb;
  imagen.alt = receta.strMeal;
  imagen.loading = "lazy";

  const titulo = document.createElement("h3");
  titulo.textContent = receta.strMeal;

  const categoria = document.createElement("p");
  categoria.textContent = receta.strCategory || "Sin categoría";

  const boton = document.createElement("button");
  boton.textContent = "Ver receta";
  boton.type = "button";

  boton.addEventListener("click", () => {
    const ingredientes = [];

    for (let i = 1; i <= 20; i++) {
      const ingrediente = receta[`strIngredient${i}`];
      const cantidad = receta[`strMeasure${i}`];

      if (ingrediente && ingrediente.trim()) {
        ingredientes.push(`${cantidad || ""} ${ingrediente}`.trim());
      }
    }

    alert(
      `${receta.strMeal}\n\n` +
      `INGREDIENTES:\n${ingredientes.join("\n")}\n\n` +
      `PREPARACIÓN:\n${receta.strInstructions || "No disponible"}`
    );
  });

  tarjeta.append(imagen, titulo, categoria, boton);
  return tarjeta;
}

async function buscarRecetas(nombre) {
  contenedor.replaceChildren();
  mostrarMensaje("Buscando recetas...");

  try {
    const respuesta = await fetch(
      `${API_URL}/search.php?s=${encodeURIComponent(nombre)}`,
      { signal: AbortSignal.timeout(10000) }
    );

    if (!respuesta.ok) {
      throw new Error(`Error HTTP ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    if (!datos.meals || datos.meals.length === 0) {
      mostrarMensaje("No encontramos recetas. Prueba otra búsqueda.");
      return;
    }

    mostrarMensaje(`Encontramos ${datos.meals.length} recetas.`);

    datos.meals.forEach((receta) => {
      contenedor.appendChild(crearTarjeta(receta));
    });

  } catch (error) {
    console.error("Error al consultar la API:", error);
    mostrarMensaje(
      "No pudimos cargar las recetas. Revisa tu conexión e inténtalo nuevamente."
    );
  }
}

formulario.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const nombre = buscador.value.trim();

  if (nombre) {
    buscarRecetas(nombre);
  }
});

buscarRecetas("chicken");

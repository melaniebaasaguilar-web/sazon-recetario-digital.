"use strict";

// CONFIGURACIÓN DE LA API
const API_URL = "https://www.themealdb.com/api/json/v1/1";
const CLAVE_FAVORITOS = "sazon_favoritos";

// ELEMENTOS DE LA PÁGINA
const formulario = document.getElementById("form-busqueda");
const buscador = document.getElementById("buscar-receta");
const contenedor = document.getElementById("contenedor-recetas");
const mensaje = document.getElementById("mensaje-estado");

const contenedorFavoritos = document.getElementById("contenedor-favoritos");
const mensajeFavoritos = document.getElementById("mensaje-favoritos");

const modal = document.getElementById("modal-receta");
const detalleReceta = document.getElementById("detalle-receta");
const cerrarModal = document.getElementById("cerrar-modal");

// DATOS DE LA APLICACIÓN
let favoritos = cargarFavoritos();
let ultimaBusqueda = [];
let controladorBusqueda = null;

// CARGAR FAVORITOS GUARDADOS
function cargarFavoritos() {
  try {
    const datos = JSON.parse(
      localStorage.getItem(CLAVE_FAVORITOS) || "[]"
    );

    return Array.isArray(datos) ? datos : [];
  } catch (error) {
    console.warn("No se pudieron leer los favoritos:", error);
    return [];
  }
}

// GUARDAR FAVORITOS
function guardarFavoritos() {
  try {
    localStorage.setItem(
      CLAVE_FAVORITOS,
      JSON.stringify(favoritos)
    );
    return true;
  } catch (error) {
    console.error("No se pudieron guardar los favoritos:", error);
    return false;
  }
}

// COMPROBAR SI UNA RECETA ES FAVORITA
function esFavorito(id) {
  return favoritos.some(
    receta => receta.idMeal === id
  );
}

// AGREGAR O QUITAR FAVORITO
function alternarFavorito(receta) {
  const anteriores = [...favoritos];

  if (esFavorito(receta.idMeal)) {
    favoritos = favoritos.filter(
      item => item.idMeal !== receta.idMeal
    );
  } else {
    favoritos.push(receta);
  }

  if (!guardarFavoritos()) {
    favoritos = anteriores;
    alert("No se pudieron guardar los favoritos en este navegador.");
    return;
  }

  mostrarRecetas(ultimaBusqueda);
  mostrarFavoritos();
}

// CREAR UNA TARJETA
function crearTarjeta(receta) {
  const tarjeta = document.createElement("article");
  tarjeta.className = "tarjeta-receta";

  const imagen = document.createElement("img");
  imagen.src = receta.strMealThumb;
  imagen.alt = `Fotografía de ${receta.strMeal}`;
  imagen.loading = "lazy";

  const contenido = document.createElement("div");
  contenido.className = "tarjeta-contenido";

  const categoria = document.createElement("span");
  categoria.className = "categoria";
  categoria.textContent = receta.strCategory || "Receta";

  const titulo = document.createElement("h3");
  titulo.textContent = receta.strMeal;

  const botones = document.createElement("div");
  botones.className = "tarjeta-botones";

  const botonDetalle = document.createElement("button");
  botonDetalle.className = "boton-detalle";
  botonDetalle.type = "button";
  botonDetalle.textContent = "Ver receta";

  botonDetalle.addEventListener("click", () => {
    abrirDetalle(receta);
  });

  const botonFavorito = document.createElement("button");
  botonFavorito.type = "button";
  botonFavorito.className = "boton-favorito";

  const actualizarBoton = () => {
    const activo = esFavorito(receta.idMeal);
    botonFavorito.textContent = activo
      ? "♥ Guardada"
      : "♡ Guardar";

    botonFavorito.classList.toggle("activo", activo);
    botonFavorito.setAttribute(
      "aria-pressed",
      String(activo)
    );
  };

  actualizarBoton();

  botonFavorito.addEventListener("click", () => {
    alternarFavorito(receta);
  });

  botones.append(botonDetalle, botonFavorito);
  contenido.append(categoria, titulo, botones);
  tarjeta.append(imagen, contenido);

  return tarjeta;
}

// MOSTRAR RECETAS
function mostrarRecetas(recetas) {
  contenedor.replaceChildren();

  recetas.forEach(receta => {
    contenedor.appendChild(crearTarjeta(receta));
  });
}

// MOSTRAR FAVORITOS
function mostrarFavoritos() {
  contenedorFavoritos.replaceChildren();

  if (favoritos.length === 0) {
    mensajeFavoritos.textContent =
      "Todavía no tienes recetas favoritas. ¡Guarda alguna!";
    return;
  }

  mensajeFavoritos.textContent =
    `Tienes ${favoritos.length} recetas guardadas.`;

  favoritos.forEach(receta => {
    contenedorFavoritos.appendChild(crearTarjeta(receta));
  });
}

// OBTENER INGREDIENTES
function obtenerIngredientes(receta) {
  const ingredientes = [];

  for (let i = 1; i <= 20; i++) {
    const ingrediente = receta[`strIngredient${i}`];
    const cantidad = receta[`strMeasure${i}`];

    if (ingrediente && ingrediente.trim()) {
      ingredientes.push(
        `${(cantidad || "").trim()} ${ingrediente.trim()}`.trim()
      );
    }
  }

  return ingredientes;
}

// ABRIR DETALLE DE RECETA
function abrirDetalle(receta) {
  detalleReceta.replaceChildren();

  const imagen = document.createElement("img");
  imagen.src = receta.strMealThumb;
  imagen.alt = receta.strMeal;
  imagen.className = "detalle-imagen";

  const titulo = document.createElement("h2");
  titulo.className = "detalle-titulo";
  titulo.textContent = receta.strMeal;

  const categoria = document.createElement("p");
  categoria.className = "categoria";
  categoria.textContent = receta.strCategory || "Receta";

  const tituloIngredientes = document.createElement("h3");
  tituloIngredientes.className = "detalle-subtitulo";
  tituloIngredientes.textContent = "Ingredientes";

  const lista = document.createElement("ul");
  lista.className = "lista-ingredientes";

  obtenerIngredientes(receta).forEach(ingrediente => {
    const elemento = document.createElement("li");
    elemento.textContent = ingrediente;
    lista.appendChild(elemento);
  });

  const tituloPreparacion = document.createElement("h3");
  tituloPreparacion.className = "detalle-subtitulo";
  tituloPreparacion.textContent = "Preparación";

  const instrucciones = document.createElement("p");
  instrucciones.className = "instrucciones";
  instrucciones.textContent =
    receta.strInstructions || "Instrucciones no disponibles.";

  detalleReceta.append(
    imagen,
    titulo,
    categoria,
    tituloIngredientes,
    lista,
    tituloPreparacion,
    instrucciones
  );

  modal.showModal();
}

// CERRAR VENTANA
cerrarModal.addEventListener("click", () => {
  modal.close();
});

modal.addEventListener("click", evento => {
  if (evento.target === modal) {
    modal.close();
  }
});

// CONSULTAR RECETAS EN THEMEALDB
async function buscarRecetas(nombre) {
  if (controladorBusqueda) {
    controladorBusqueda.abort();
  }

  const controlador = new AbortController();
  controladorBusqueda = controlador;

  let tiempoAgotado = false;

  const temporizador = setTimeout(() => {
    tiempoAgotado = true;
    controlador.abort();
  }, 10000);

  contenedor.replaceChildren();
  mensaje.textContent = "Buscando recetas deliciosas...";

  try {
    const url =
      `${API_URL}/search.php?s=${encodeURIComponent(nombre)}`;

    const respuesta = await fetch(url, {
      signal: controlador.signal
    });

    if (respuesta.status === 429) {
      throw new Error("LIMITE");
    }

    if (!respuesta.ok) {
      throw new Error(`HTTP ${respuesta.status}`);
    }

    const datos = await respuesta.json();

    const recetas = Array.isArray(datos.meals)
      ? datos.meals
      : [];

    ultimaBusqueda = recetas;

    if (recetas.length === 0) {
      mensaje.textContent =
        "No encontramos recetas. Prueba con otro nombre.";
      return;
    }

    mostrarRecetas(recetas);

    mensaje.textContent =
      `Encontramos ${recetas.length} recetas para ti.`;

  } catch (error) {
    if (error.name === "AbortError" && !tiempoAgotado) {
      return;
    }

    console.error("Error al buscar recetas:", error);

    ultimaBusqueda = [];

    if (error.message === "LIMITE") {
      mensaje.textContent =
        "Se alcanzó el límite de solicitudes. Intenta más tarde.";
    } else if (tiempoAgotado) {
      mensaje.textContent =
        "La consulta tardó demasiado. Intenta nuevamente.";
    } else {
      mensaje.textContent =
        "No fue posible cargar las recetas. Revisa tu conexión.";
    }
  } finally {
    clearTimeout(temporizador);

    if (controladorBusqueda === controlador) {
      controladorBusqueda = null;
    }
  }
}

// FORMULARIO DE BÚSQUEDA
formulario.addEventListener("submit", evento => {
  evento.preventDefault();

  const nombre = buscador.value.trim();

  if (!nombre) {
    mensaje.textContent = "Escribe el nombre de una receta.";
    return;
  }

  buscarRecetas(nombre);
});

// INICIAR APLICACIÓN
mostrarFavoritos();
buscarRecetas("chicken");

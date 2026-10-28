
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

:root {
  --crema: #faf8f2;
  --blanco: #ffffff;
  --verde: #486b58;
  --verde-oscuro: #254435;
  --verde-claro: #eaf0e8;
  --terracota: #c67656;
  --terracota-oscuro: #ad5b3e;
  --texto: #2b342d;
  --gris: #667168;
  --borde: #e1e6dd;
  --sombra: 0 8px 25px rgba(33, 55, 38, 0.08);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--crema);
  color: var(--texto);
  font-family: 'DM Sans', Arial, sans-serif;
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: 'Playfair Display', Georgia, serif;
  line-height: 1.2;
}

a {
  text-decoration: none;
}

button, input {
  font: inherit;
}

button {
  cursor: pointer;
}

img {
  max-width: 100%;
}

.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
}

/* ENCABEZADO */

.encabezado {
  background: var(--blanco);
  box-shadow: 0 2px 15px rgba(0,0,0,0.04);
  position: sticky;
  top: 0;
  z-index: 100;
}

.barra-navegacion {
  max-width: 1250px;
  margin: auto;
  padding: 20px 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-family: 'Playfair Display', serif;
  font-size: 32px;
  font-weight: 700;
  color: var(--verde-oscuro);
}

.logo span,
.footer h2 span {
  color: var(--terracota);
}

nav {
  display: flex;
  gap: 32px;
}

nav a {
  color: var(--texto);
  font-weight: 600;
  transition: color 0.2s;
}

nav a:hover {
  color: var(--terracota);
}

/* HERO */

.hero {
  max-width: 1250px;
  margin: auto;
  padding: 90px 30px;
  min-height: 550px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 55px;
  align-items: center;
}

.etiqueta {
  color: var(--terracota);
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 2px;
}

.hero h1 {
  font-size: clamp(42px, 5vw, 68px);
  color: var(--verde-oscuro);
  margin: 20px 0;
}

.hero h1 span {
  color: var(--terracota);
}

.hero p {
  font-size: 17px;
  color: var(--gris);
  max-width: 520px;
  margin-bottom: 30px;
}

.hero-imagen img {
  width: 100%;
  height: 420px;
  object-fit: cover;
  border-radius: 28px;
  box-shadow: var(--sombra);
}

/* BOTONES */

.boton {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 15px 28px;
  border: none;
  border-radius: 12px;
  font-weight: 700;
  transition: 0.2s;
}

.boton-principal {
  background: var(--verde);
  color: white;
}

.boton-principal:hover {
  background: var(--verde-oscuro);
  transform: translateY(-2px);
}

/* SECCIONES */

.seccion {
  max-width: 1250px;
  margin: auto;
  padding: 75px 30px;
}

.titulo-seccion {
  text-align: center;
  margin-bottom: 35px;
}

.titulo-seccion h2 {
  font-size: clamp(30px, 4vw, 42px);
  color: var(--verde-oscuro);
  margin: 12px 0;
}

.titulo-seccion p {
  color: var(--gris);
  max-width: 600px;
  margin: auto;
}

/* BUSCADOR */

.buscador {
  display: flex;
  gap: 12px;
  max-width: 750px;
  margin: 0 auto 35px;
}

.buscador input {
  flex: 1;
  min-width: 0;
  border: 1px solid var(--borde);
  border-radius: 12px;
  background: white;
  padding: 16px 20px;
  outline: none;
  font-size: 16px;
}

.buscador input:focus {
  border-color: var(--verde);
  box-shadow: 0 0 0 3px rgba(72,107,88,0.1);
}

.mensaje {
  text-align: center;
  color: var(--verde);
  font-weight: 600;
  margin: 20px 0;
}

/* TARJETAS */

.grid-recetas {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
  gap: 28px;
}

.tarjeta-receta {
  background: white;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: var(--sombra);
  transition: transform 0.25s, box-shadow 0.25s;
}

.tarjeta-receta:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 30px rgba(33,55,38,0.15);
}

.tarjeta-receta img {
  width: 100%;
  height: 220px;
  object-fit: cover;
  display: block;
}

.tarjeta-contenido {
  padding: 22px;
}

.tarjeta-contenido h3 {
  color: var(--verde-oscuro);
  font-size: 23px;
  margin: 8px 0 12px;
}

.categoria {
  font-size: 12px;
  font-weight: 700;
  color: var(--terracota);
  text-transform: uppercase;
  letter-spacing: 1px;
}

.tarjeta-botones {
  display: flex;
  gap: 8px;
  margin-top: 20px;
  flex-wrap: wrap;
}

.boton-detalle {
  background: var(--verde);
  color: white;
  border: none;
  border-radius: 9px;
  padding: 11px 16px;
  font-weight: 600;
  flex: 1;
}

.boton-detalle:hover {
  background: var(--verde-oscuro);
}

.boton-favorito {
  background: var(--verde-claro);
  color: var(--verde-oscuro);
  border: 1px solid var(--borde);
  border-radius: 9px;
  padding: 11px 14px;
  font-weight: 600;
}

.boton-favorito:hover {
  background: #d8e6d5;
}

.boton-favorito.activo {
  background: #fde8df;
  color: var(--terracota-oscuro);
  border-color: #eac5b5;
}

/* FAVORITOS */

.seccion-favoritos {
  background: var(--verde-claro);
  max-width: none;
  padding-left: max(30px, calc((100% - 1190px) / 2));
  padding-right: max(30px, calc((100% - 1190px) / 2));
}

/* MODAL */

.modal {
  position: fixed;
  max-width: 760px;
  width: calc(100% - 30px);
  max-height: 90vh;
  border: none;
  padding: 0;
  border-radius: 20px;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
  overflow-y: auto;
}

.modal::backdrop {
  background: rgba(19,37,25,0.7);
}

.modal-contenido {
  padding: 35px;
  position: relative;
}

.cerrar-modal {
  position: absolute;
  top: 12px;
  right: 15px;
  border: none;
  background: var(--verde-claro);
  color: var(--verde-oscuro);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  font-size: 28px;
}

.detalle-imagen {
  width: 100%;
  max-height: 300px;
  object-fit: cover;
  border-radius: 14px;
}

.detalle-titulo {
  color: var(--verde-oscuro);
  font-size: 35px;
  margin: 20px 0 10px;
}

.detalle-subtitulo {
  color: var(--verde-oscuro);
  font-size: 24px;
  margin-top: 25px;
}

.lista-ingredientes {
  padding-left: 24px;
}

.instrucciones {
  white-space: pre-line;
  overflow-wrap: anywhere;
}

/* FOOTER */

.footer {
  background: var(--verde-oscuro);
  color: white;
  text-align: center;
  padding: 45px 20px;
}

.footer h2 {
  font-size: 35px;
  margin: 0;
}

.footer p {
  color: #d4dfd6;
}

.copyright {
  font-size: 13px;
}

/* CELULARES */

@media (max-width: 768px) {
  .barra-navegacion {
    flex-direction: column;
    gap: 12px;
  }

  nav {
    gap: 20px;
    flex-wrap: wrap;
    justify-content: center;
  }

  .hero {
    grid-template-columns: 1fr;
    padding: 55px 22px;
    gap: 30px;
  }

  .hero-imagen img {
    height: 290px;
  }

  .seccion {
    padding: 50px 20px;
  }

  .buscador {
    flex-direction: column;
  }

  .grid-recetas {
    grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
    gap: 18px;
  }

  .modal-contenido {
    padding: 25px 18px;
  }
}

@media (max-width: 480px) {
  .grid-recetas {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    font-size: 40px;
  }
}

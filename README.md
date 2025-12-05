# 🛒 Proyecto Final de E-commerce: CompraloYa

## Autoría e Información del Proyecto
* **Autor:** Gramajo Matías
* **Versión:** Versión Final
* **Fecha de Última Actualización:** 05-12-2025

---

## 📄 Descripción General

Este proyecto final consiste en la creación de **CompraloYa**, un sitio web de e-commerce **dinámico e interactivo**. 

El objetivo principal es aplicar todos los conocimientos del curso, demostrando la correcta aplicación de:

* Estructura semántica HTML
* Estilos modernos con CSS
* Manipulación del DOM con JavaScript
* Lógica básica de un carrito de compras
* Consumo de APIs

---

## 📋 Características y Tecnologías Implementadas

### 🛠 Tecnologías y Herramientas
* **HTML:** Estructura semántica de la página.
* **CSS:** Estilos personalizados.
* **Formspree:** Para la gestión del envío de datos del formulario de contacto.
* **JavaScript:** Lógica de la aplicación, interacción con el DOM.
* **Bootstrap 5:** Framework CSS.
* **Fake Store API:** API REST gratuita utilizada para obtener datos de productos.
* **Google Fonts:** Tipografía.

### 🧱 Estructura y Semántica

El documento HTML dividido en las etiquetas semánticas principales:
* `<header>`
* `<nav>`
* `<main>`
* `<section>`
* `<footer>`

### 🎨 Estilos y Diseño

* **CSS Externo:** Todos los estilos se gestionan desde un archivo `styles.css`.
* **Tipografía:** Implementación de fuentes desde **Google Fonts**.
* **Bootstrap y Flexbox:** El diseño está basado en el sistema de *grid* de Bootstrap, complementado con Flexbox, garantizando una visualización correcta en cualquier dispositivo (móvil, tablet, escritorio).

### 📧 Formulario y Multimedia

* **Formulario de Contacto:** Incluye campos para **nombre**, **correo electrónico** y **mensaje**. Es un formulario **funcional** gracias a la integración con **Formspree**.
* **Contenido Multimedia:** Incorporación de archivos como **imágenes**, **video** o un **iframe** dentro del contenido de la página.
* **Navegación:** Lista desordenada (`<ul>`) con enlaces de navegación simulada (Inicio, Productos, Contacto, etc.).

### 🔌 Componentes Dinámicos y API
* **Consumo de API REST:** Utilización de `fetch` para obtener los productos de la Fake Store API.
* **Renderizado Dinámico:** Los productos se inyectan en el DOM mediante JavaScript, generando las tarjetas de producto de forma automática.
* **Carrito de Compras:**
    * Funcionalidad de **"Añadir al Carrito"** para almacenar productos seleccionados.
    * Uso de **`localStorage`** para mantener el estado del carrito persistente entre sesiones (el usuario no pierde su carrito al recargar).
    * Cálculo dinámico de la cantidad de ítems y el precio total.


### 🛡️ Accesibilidad y Optimización (SEO)
* **Etiquetas Semánticas:** El uso de etiquetas como `<main>`, y `<nav>` mejora la comprensión del contenido por parte de los motores de búsqueda y tecnologías asistivas.
* **Atributos `alt`:** Todas las imágenes dinámicas de los productos incluyen texto alternativo (alt) basado en el nombre del producto de la API, mejorando la accesibilidad y el SEO.
* **`viewport`:** Uso de `<meta name="viewport">` para asegurar el correcto escalado responsivo.

---

## 🚀 Despliegue

Este proyecto está alojado en un servicio de *hosting* gratuito (GitHub Pages).

**URL Funcional del Sitio:** *https://gramajomatias12.github.io/Proyecto-Final-de-E-commerce/*

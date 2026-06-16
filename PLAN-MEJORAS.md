# Plan de mejoras — Jeianell (demo web)

> Basado en el feedback de **Jazmín (Coordinadora de Marketing, Jeianell)** del **8/6/2026**
> respondiendo al mail de Santiago Scally con los HTML de Jeianell y Halt & Catch.
> Archivo a editar: [jeianell-demo.html](jeianell-demo.html)
> Capturas extraídas del mail en: `eml_imgs/` (img01 = firma; img02–img10 = secciones)

---

## Pendientes que dependen de assets externos (los pasa Jeianell)

- [ ] **Logo de la marca** (SVG/PNG fondo transparente) para el header — hoy dice "jeianell" en texto.
  - Fallback temporal: recortar el logo de la firma (`eml_imgs/img01.jpeg`).
- [ ] **Logos de clientes/empresas** para "Clientes que confían en nosotros" (están en la web actual).
- [ ] Feedback de **Halt & Catch** → llega en otro mail (aún no recibido).
- [ ] **Recolorear la tapa gris del rolón** (tapa más clara) en las imágenes de producto → no resoluble con CSS, requiere editar los assets de `Diseños - ECM/` y `Material Ecommerce/`.
- [ ] **Imágenes separadas (tapa + cuerpo)** del rolón si se quiere el efecto "tapa que se abre".

---

## Checklist de cambios por sección

### 1. Header / Nav  ·  (img02)
- [ ] Reemplazar el texto "jeianell" (arriba izq.) por el **logo de la marca**. *(depende de asset)*
- [ ] Eliminar el ítem **On-Pouch** del menú de navegación.

### 2. Hero "Poné tu bienestar en ON"  ·  (img02)
- [ ] ~~Tapa gris por color más claro~~ → **DECISIÓN: no se resuelve con CSS.** El rolón es una foto (`<img id="rollImg">`); la tapa está dentro de la imagen. Un `filter` CSS teñiría todo el envase. Requiere **editar las imágenes** (tarea de diseño/asset, no de código). → mover a pendientes externos.
- [ ] ~~Efecto de tapa que se abre~~ → requiere imágenes separadas (tapa + cuerpo) para animar por separado; con la foto única no se puede. **Pendiente de assets.**

### 3. Banner en movimiento + Filosofía  ·  (img03)
- [ ] Banner: poner **guiones entre todas las palabras**:
  `apto para veganos – cruelty free – extractos vegetales naturales – libre de parabenos – uso diario – industria argentina`
- [ ] Párrafo bajo el título: tras "una necesidad" **quitar la coma y poner "y"**
  → "…un momento, una necesidad **y** un estado de ánimo."
- [ ] Card **Cruelty free**: reemplazar texto por **"no testeamos en animales"**.

### 4. On-Roll (grid de productos)  ·  (img04)
- [ ] Quitar el eyebrow placeholder gris "ON-ROLL · LOS QUE GIRAN" (es recordatorio, se va).
- [ ] Título → **"Bienestar al alcance de tu mano"**.
- [ ] Subtítulo → **"Línea on roll de aceites y extractos…"** (reemplaza "Roll-ons…").
- [ ] Misma corrección de **tapa gris** en las imágenes de producto.
- [ ] **Eliminar On-Roll SLEEP y MIG** (de datos JS `ROLL` y thumbs).
- [ ] Actualizar descripciones (las 5 que quedan):
  - **active:** "Un blend para aplicar antes o después de tu actividad física favorita. Relaja y revitaliza tus músculos."
  - **relax:** "Tu aliado para neutralizar el estrés y ayudar a la relajación mental."
  - **flow:** "Ideal para pies y piernas cansadas, ayuda a la circulación."
  - **energy:** "Un impulso para incentivar la motivación y alejar la sensación de cansancio."
  - **fem:** "Promueve el bienestar y brinda alivio al dolor durante el ciclo menstrual."

### 5. On-Fungi (cápsula animada)  ·  (img05)
- [ ] Quitar el eyebrow placeholder "ON-FUNGI · LA CÁPSULA QUE SE ABRE" (se va).
- [ ] Título → **"El poder de los hongos adaptógenos"** (hoy "…funcionales").
- [ ] Subtítulo → **"Suplementos dietarios en cápsulas, aprobados por el ANMAT e industria argentina. Contiene extractos de hongos seleccionados para cada objetivo de tu bienestar."**
- [ ] Labels laterales de la cápsula:
  - Un lado → **"extractos de hongos adaptógenos"** (hoy "EXTRACTOS FUNCIONALES")
  - Otro lado → **"cápsulas vegetales"** (hoy "CÁPSULA VEGETAL")

### 6. On-Fungi (grid de 6 hongos)  ·  (img06)
- [ ] **Ocultar Shiitake, Agaricus Blazei y Tremella** (salen el año que viene).
  - Quedan visibles: Lion's Mane, Reishi, Maitake.

### 7. On-Balm (baby / mint)  ·  (img07)
- [ ] Descripción **On-Balm baby**:
  "Un perfecto blend para aplicar antes de ir a dormir, y así ayudar a los más chicos a tener un sueño placentero. Promueve la relajación y el confort infantil."
  - Extractos vegetales: **Aloe vera** (purifica el aire, ayuda a dormir mejor).
  - Aceites esenciales: **Eucalipto** (relajante/refrescante), **Menta** (sedante), **Lavanda** (calmante/relajante), **Vainilla** (relajante/antiestrés).
- [ ] Descripción **On-Balm mint**:
  "Ideal para aplicar antes de ir a dormir, y así ayudar a tener un sueño placentero. Promueve la relajación y brinda una sensación de frescura."
  - Extractos vegetales: **Alcanfor** (sedante), **Mentol** (relajante), **Aloe vera** (purifica el aire).
  - Aceites esenciales: **Romero** (relajante/calmante), **Eucalipto** (relajante/refrescante), **Lavanda** (calmante/relajante), **Menta** (sedante).
  - **DECISIÓN: acordeón** (lo más aesthetic). Disparador discreto "Conocé la fórmula +" dentro de cada card; al abrir muestra dos grupos (Extractos vegetales / Aceites esenciales) con nombre + beneficio en una línea. Implementación con `<details>/<summary>` nativo (sin JS, accesible, animable con CSS).

### 8. On-Pouch (sección completa)  ·  (img08)
- [ ] **Quitar la sección entera** del HTML (y cualquier referencia/datos asociados).

### 9. Combos  ·  (img09)
- [ ] **Combo Emocional** → reemplazar items por **relax + energy**.
- [ ] Copy del Combo Emocional → **"Equilibrio natural para mente y energía"**.

### 10. Contacto / "Clientes que confían en nosotros"  ·  (img10)
- [ ] Agregar los **logos de las marcas** (como en la web actual). *(depende de asset)*

---

## Notas técnicas (para el desarrollo)

- Datos de producto en JS: `ROLL`, `FUNGI`, `COMBOS` (aprox. líneas 487–512 de [jeianell-demo.html](jeianell-demo.html)).
- Eliminar On-Pouch implica: sección `#pouch` (markup) + link en nav + link en footer.
- Eliminar sleep/mig: sacar de `ROLL`; el carrusel auto y los thumbs se regeneran solos desde el array.
- Ocultar 3 hongos: sacar de `FUNGI` (o flag `hidden`) → el grid se regenera desde el array.
- Tapa gris: revisar si el color viene de la imagen (base64) o de CSS. Si es imagen embebida, requiere reemplazar el asset; si es overlay/filtro CSS, se ajusta ahí.
- Tipografías demo: Playfair Display (títulos) / Montserrat (UI) / Jost (cuerpo). OJO: la marca tiene fuentes propias en `Tipografias - Diseños/` (Gotham, Raspoutine, MADE Mirage, Century) — confirmar si se migra.

## Estado
- [x] Feedback leído y mapeado a capturas (img02–img10).
- [x] Imágenes extraídas a `eml_imgs/`.
- [x] Desarrollo aplicado sobre **`jeianell-demo-rediseño.html`** (copia de trabajo).
  - [x] Nav: quitado On-Pouch (menú + footer).
  - [x] Banner: guiones entre palabras.
  - [x] Filosofía: coma → "y" + card cruelty free "No testeamos en animales".
  - [x] On-Roll: eyebrow sin placeholder, título "Bienestar al alcance de tu mano", subtítulo "Línea on roll…", eliminados sleep/mig, 5 descripciones nuevas.
  - [x] On-Fungi: título "…adaptógenos", subtítulo ANMAT, labels laterales, ocultos shiitake/agaricus/tremella (comentados en JS).
  - [x] On-Balm: descripciones nuevas + acordeón `<details>` con fórmulas (baby y mint).
  - [x] On-Pouch: sección eliminada por completo.
  - [x] Combos: Combo Emocional → relax + energy · "Equilibrio natural para mente y energía".

### Pendiente (depende de assets / decisión de Jeianell)
- [ ] Logo de marca en header (hoy texto "jeianell").
- [ ] Logos de clientes en "Clientes que confían en nosotros".
- [ ] Tapa gris del rolón (editar imágenes) + efecto "tapa que se abre".
- [ ] Feedback de Halt & Catch (otro mail).

### Nota técnica
- Quedó CSS muerto de `.pouch-band` (en `css/styles.css`) sin uso. No afecta el render; se puede limpiar si se quiere.

---

## Iteración 2 (14/06/2026) — feedback adicional aplicado

Estructura nueva del proyecto:
```
jeianell-demo-rediseño.html   (13 KB, sin base64)
css/styles.css                (~18 KB)
js/main.js                    (~7 KB)
assets/
  logo-jeianell.png
  logo-redes-sector-hablemos.png   (referencia de cómo va el sector redes)
  products/   (10 PNG limpios renombrados: active, relax, flow, energy, fem, lions_mane, reishi, maitake, baby, mint)
  logos-clientes/  (farmacity, suizo, delsud, gps, selma, tkl)
  Diseños - ECM/ , Material Ecommerce/ , Tipografias - Diseños/ , eml_imgs/
requerimientos/  (docx, pdf, .eml)
```

Cambios:
- [x] **Stack decidido:** HTML + CSS + JS nativo (sin framework). Separado en `css/` y `js/`.
- [x] **Puntos 1 y 2** (borde blanco + fondo gris de productos): se eliminó TODO el base64 del HTML y se reemplazó por los **PNG fuente limpios** de `assets/products/`. HTML pasó de 698 KB → 13 KB.
- [x] **Punto 3:** acordeón con animación de **altura** suave (JS `max-height` + cubic-bezier), abre y cierra fluido. Ícono "+" rota a "×".
- [x] **Punto 5 y 6:** texto literal de fórmulas On-Balm baby y mint (extractos + aceites con descripción completa).
- [x] **Punto 7:** Combo Emocional = relax + energy · "Equilibrio natural para mente y energía."
- [x] **Punto 8:** sección propia **"Clientes que confían en nosotros"** con carrusel infinito automático (pausa al hover, tarjetas blancas que camuflan el fondo blanco de los PNG). Eyebrow del contacto pasó a "Contacto".
- [x] **Punto 9:** Halt & Catch descartado (otro proyecto).
- [x] **Punto 10:** logo de marca (`assets/logo-jeianell.png`) en el header.
- [x] **Punto 11:** sector redes (Escribinos/WhatsApp/Instagram) sin cambios.

### Punto 4 — aclaración (no era una tarea)
"On-Roll SLEEP y MIG" = dos variantes de la línea On-Roll (sleep = nocturno; mig = mentolado/mental). La diseñadora pidió quitarlas; ya no están.

## Iteración 3 (14/06/2026) — ajustes finos

- [x] **3-bis** Acordeón: la animación de altura no se veía (rAF no garantizaba el frame). Reescrito con **reflow forzado** (`void offsetHeight`) → ahora despliega/colapsa fluido.
- [x] **7-bis** Combo: título → **"Relax y Energy"** (el subtítulo ya estaba bien).
- [x] **8-bis** Carrusel: se generaba el hueco en blanco porque una "mitad" no cubría el viewport. Ahora se genera por **JS**, repitiendo el grupo hasta superar el ancho de pantalla + duplicado para loop -50% sin saltos, con **velocidad constante** (~70 px/s).
- [x] **9-bis** Header: ahora **siempre blanco sólido** (sin transparencia ni blur) → el recuadro blanco del logo se empata con el navbar.
- [x] **11-bis** Redes: **íconos de marca** reales (SVG inline) — Gmail (rojo), WhatsApp (verde), Instagram (gradiente).
- [x] **NUEVO 1** Espaciado: `section.block` padding 120px → **84px** (menos distancia entre secciones, uniforme/porcentual en todas).
- [x] **NUEVO 2/3/4** On-Balm: `align-items:start` en `.balm-grid` y en `.balm` + imagen `align-self:start`. Las cards ya **no se estiran** al container, el contenido **se alinea arriba** y las imágenes quedan **a la misma altura**.

Fotos de referencia del usuario: `assets/2-correccion...png`, `assets/3-ambas cards...png`, `assets/4-una card...png`.

## Iteración 4 (16/06/2026)

- [x] **CSS muerto `.pouch-band` eliminado** (reglas + media queries).
- [x] **PNG de producto optimizados:** redimensionados 1000px → **700px** con System.Drawing (alta calidad, transparencia intacta). Total **3.25 MB → 2.19 MB (-33%)**. Originales full-res intactos en `assets/Diseños - ECM/`.
- [x] **Cards On-Fungi clickeables** → abren `https://www.thebcompany.com.ar/search/?q=on%2Bfungi&brand=On-Fungi` (const `FUNGI_BUY` en main.js).

### Pendiente / a decidir
- [ ] **Logos clientes con fondo transparente:** los PNG tienen blanco (algunos con blanco interno → riesgoso quitarlo global). De momento van en tarjetas blancas. Si se quiere transparencia real, recorte manual por logo.
- [ ] **Más optimización de imágenes:** para bajar de 2.19 MB habría que pasar a **WebP** (no hay encoder instalado: pngquant/cwebp/ImageMagick). Mejora grande si se instala una de esas herramientas.
- [ ] Mover las fotos de referencia (`2-correccion...`, `3-ambas...`, `4-una card...`) fuera de `assets/` si molestan.

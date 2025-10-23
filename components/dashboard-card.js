export function dashboardCard({ title, date, description, author, category, color }) {
  // 1. Crea el elemento 'columna'
  const cardColumn = document.createElement('div');
  
  // 2. Asígnale las clases de columna de Bootstrap
  cardColumn.className = 'col-lg-4 col-md-6 col-sm-12';

  // 3. Inserta el HTML de la tarjeta DENTRO de la columna
  cardColumn.innerHTML = `
    <div class="card" style="--accent-color: ${color || '#007bff'}">
      <div class="accent"></div> 
      <div class="body">
        <h3 class="title">${title}</h3>
        <p class="date">${new Date(date).toLocaleDateString()}</p>
        <p class="description">${description}</p>

        <div class="meta">
          <p><span class="meta-label">Publicado por:</span> ${author}</p>
          <p><span class="meta-label">Categoría:</span> <span class="badge">${category}</span></p>
        </div>
      </div>
    </div>
  `;
  
  // 4. Devuelve la columna completa
  return cardColumn;
}
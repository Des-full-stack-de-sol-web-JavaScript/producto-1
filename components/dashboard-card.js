export function dashboardCard({title, date, description, author, category, color}){
    
    const dashboardCard = document.createElement('div');
    dashboardCard.className = 'col-12 col-md-6 col-lg-4';
    dashboardCard.innerHTML = `

        <div class="card h-100" style="background-color: ${color}; color: white;">
            <div class="card-body">
                <h5 class="card-title">${title}</h5>
                <h6 class="card-subtitle mb-2"><strong>${date}</strong></h6>
                <p class="card-text">${description}</p>
                <p class="card-text"><strong>Publicado por: </strong> ${author}</p>
                <p class="card-text"><strong>Categoría:</strong> ${category}</p>
            </div>
        </div>

    `;
    return dashboardCard;
}
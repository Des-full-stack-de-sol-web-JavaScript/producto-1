import { dashboardData } from '../assets/data/dashboardData.js';
import { dashboardCard } from '../components/dashboard-card.js';

// --- Elementos del DOM ---
const contenedor = document.getElementById('dashboard');
const buttons = document.querySelectorAll('.buttons-container .btn');

// --- Datos del usuario ---
const currentUser = window.localStorage.getItem('email');

function renderCards(dataToRender) {
  contenedor.innerHTML = '';

  if (dataToRender.length === 0) {
    contenedor.innerHTML = '<p class="text-center text-muted">No hay publicaciones que coincidan con el filtro.</p>';
    return;
  }

  dataToRender.forEach(item => {
    contenedor.appendChild(dashboardCard(item));
  });
}

function handleFilter(filterType) {
  let filteredData = [];

  if (!currentUser) {
    console.warn('No se encontró un usuario en localStorage.');
    if (filterType === 'Propias') {
      filteredData = [];
    } else {
      filteredData = dashboardData;
    }
    renderCards(filteredData);
    return;
  }

  switch (filterType) {
    case 'Propias':
      filteredData = dashboardData.filter(item => item.email === currentUser);
      break;
    case 'Otras':
      filteredData = dashboardData.filter(item => item.email !== currentUser);
      break;
    case 'Todas':
    default:
      filteredData = dashboardData;
      break;
  }

  renderCards(filteredData);
}


function dashboardPage() {
  console.log("Dashboard Page Loaded");

  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault(); 
      
      const filterType = button.textContent.trim(); 
      
      handleFilter(filterType);
    });
  });

  renderCards(dashboardData);
}

dashboardPage();
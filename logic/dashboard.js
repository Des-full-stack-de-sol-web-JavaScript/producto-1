import { dashboardData } from '../assets/data/dashboardData.js';
import { dashboardCard } from '../components/dashboard-card.js'

const contenedor = document.getElementById('dashboard');

function dashboardPage() {
    console.log("Dashboard Page Loaded");
    
    contenedor.innerHTML = '';
    
    dashboardData.forEach(item => {
        contenedor.appendChild(dashboardCard(item));

    });

}

dashboardPage()
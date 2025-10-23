import { dashboardData } from '../assets/data/dashboardData.js';
import { dashboardCard } from '../components/dashboard-card.js'


function dashboardPage() {
    console.log("Dashboard Page Loaded");
    const contenedor = document.getElementById('dashboard');
    
    contenedor.innerHTML = '';
    
    dashboardData.forEach(item => {
        contenedor.appendChild(dashboardCard(item));

    });

}

dashboardPage()
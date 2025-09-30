export function headerComponent(){
    const header = document.querySelector('#header') 
    
    header.innerHTML = ` 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold text-primary" href="#">Voluntariado</a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/index.html">Dashboard</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/pages/login.html">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/pages/voluntariados.html">voluntariados</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/pages/alta-usuario.html">Alta Usuario</a>
                        </li>
                    </ul>
                    
                    <span class="navbar-text text-muted">
                        -no login-
                    </span>
                </div>
            </div>
        </nav>
    `;
    return header;
}
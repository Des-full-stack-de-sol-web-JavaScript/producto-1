export function headerComponent() {
  const isGithubPages = window.location.hostname.includes("github.io");
  const BASE_PATH = isGithubPages ? "/producto-1/" : "/";

  const header = document.querySelector("#header");
  const currentUser = window.localStorage.getItem('email');
  console.log("currentUser", currentUser)


  header.innerHTML = ` 
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="container-fluid">
                <a class="navbar-brand fw-bold text-primary" href="${BASE_PATH}index.html">Voluntariado</a>
                
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                    <span class="navbar-toggler-icon"></span>
                </button>
                
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav me-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="${BASE_PATH}index.html">Dashboard</a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${BASE_PATH}pages/login.html">Login</a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${BASE_PATH}pages/voluntariados.html">voluntariados</a> 
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="${BASE_PATH}pages/alta-usuario.html">Alta Usuario</a> 
                        </li>
                    </ul>
                    
                    <span class="navbar-text text-muted">
                       ${currentUser ?? '-no login-'} 
                    </span>
                </div>
            </div>
        </nav>
    `;
  return header;
}

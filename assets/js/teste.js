const navbar = document.getElementById("navbar");

function gerarPagina(variavel){

    variavel.innerHTML += `
        <div class="d-flex flex-row flex-shrink-0 p-3 text-bg-dark" style="width: 100vw;">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <svg class="bi pe-none me-2" width="40" height="32">
                    <use xlink:href="#bootstrap" />
                </svg>
                <span class="fs-4">Finance-Home</span>
            </a>
            <hr>
            <ul class="nav nav-pills flex-row mb-auto align-items-center" style="margin-right: 5rem; height: 100%;">
                <li class="nav-item">
                    <a href="#" class="nav-link active" aria-current="page">
                        Home
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="/receitas.html" class="nav-link text-white">
                        Receitas
                    </a>
                </li>
                <li>
                    <a href="#" class="nav-link text-white">
                        Despesas
                    </a>
                </li>
            </ul>

            <div class="dropdown">
                <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                    data-bs-toggle="dropdown" aria-expanded="false">
                    <img src="https://github.com/lukasstranges.png" alt="" width="60" height="60" class="rounded-circle me-2">
                    <strong>Lukas</strong>
                </a>
                <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                    <li><a class="dropdown-item" href="#">Settings</a></li>
                    <li><a class="dropdown-item" href="#">Profile</a></li>
                    <li>
                        <hr class="dropdown-divider">
                    </li>
                    <li><a class="dropdown-item" href="#">Sign out</a></li>
                </ul>
            </div>
        </div>
`
}
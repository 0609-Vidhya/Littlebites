import React from 'react'

export default function Header() {
  return (
    <div>
      <>
        <nav class="navbar navbar-expand-lg bg-body-white">
          <div class="container-fluid" >
            <a
              class="navbar-brand"
              href="#"
              style={{ fontSize: '30px', color: '#707070',fontWeight:700 }}
            >
              Little <span style={{ color: '#84DB46' }}>Bites</span>
            </a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav me-auto mb-2 mb-lg-0 bg-white"></ul>
              <form class="d-flex" role="search">
                <ul class="navbar-nav me-auto">
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      About
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Why LittleBites?
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Features
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Pricing
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      FAQ
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Blog
                    </a>
                  </li>
                  <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">
                      Contact us
                    </a>
                  </li>
                  <button type="button" class="btn btn-warning text-white">
                    REQUEST A DEMO
                  </button>
                </ul>
              </form>
            </div>
          </div>
        </nav>
      </>
    </div>
  )
}

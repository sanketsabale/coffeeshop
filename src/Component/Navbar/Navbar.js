import 'bootstrap/dist/css/bootstrap.css'

import './Navbar.css';


// import logo from '../Navbar/logo.png'



export function Navbar() {
  return (
    <>
      <div classname="pl=20pr=20 mr=20">
      </div>



      <nav class='navbar navbar-expand-lg bg-body-tertiary'>
        <div class='container-fluid'>
          <img src='' className='img' />

          <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded="false" aria-label="Toggle navigation">
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarNav'>
            <ul class='navbar-nav'>

              <li class='nav-item'>
                <a class='nav-link' href='#'>Home</a>
              </li><br></br>
              <li class='nav-item'>
                <a class='nav-link' href='#'>Gift</a>
              </li><br></br>
              <li class='nav-item'>
                <a class='nav-link' href='#'>Order</a>
              </li><br></br>
              <li class='nav-item'>
                <a class='nav-link' href='#'>Pay</a>
              </li><br></br>
              <li class='nav-item'>
                <a class='nav-link' href='#'>Store</a>
              </li><br></br>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}



import React from 'react'

const Footer = () => {
    return (
        <div className="container mt-5">
          <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mx-4 border-top fixed-bottom mt-5">
            <div className="col-md-4 d-flex align-items-center">
              <a
                href="/"
                className="mb-3 me-2 mb-md-0 text-muted text-decoration-none"
              >
                {/* <svg className="bi" width="30" height="24">
                  <use href="#bootstrap" />
                </svg> */}
              </a>
              <span className="mb-3 mb-md-0 text-muted">
                 Hecho con 🤍 por @hummo_mx
              </span>
            </div>
    
            <ul className="nav col-md-4 justify-content-end list-unstyled d-flex">
              <li className="ms-3">
                <a className="text-muted" target="_blank" href="https://www.instagram.com/hummo_mx_">
                <i className="bi bi-instagram"></i>
                </a>
              </li>
              <li className="ms-3">
                <a className="text-muted" target="_blank" href="https://www.tiktok.com/hummo_mx">
                <i className="bi bi-tiktok"></i>
                </a>
              </li>
            </ul>
          </footer>
        </div>
      );
    };
    

export default Footer

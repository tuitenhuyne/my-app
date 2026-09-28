import React from 'react';
import Button from 'react-bootstrap/Button';
import useAuth from './useAuth';

function Navbar({ darkMode, toggleTheme }) {
  const { user, login, logout } = useAuth();



  return (
    <nav
      className={`navbar ${
        darkMode ? 'navbar-dark bg-dark' : 'navbar-light bg-light'
      } px-4 py-3`}
    >
      <div className="container-fluid">
        <h4 className="mb-0">
          🌸 Orchid Collection
        </h4>

        <div className="d-flex align-items-center gap-2">
          {user ? (
            <>
              <span>
                Welcome, {user.username}
              </span>

              <Button
                variant="danger"
                onClick={logout}
              >
                Logout
              </Button>
            </>
          ) : (
            <>
              <span>
                Log in as Huy
              </span>

              <Button
                variant="primary"
                onClick={login}
              >
                Login
              </Button>
            </>
          )}

          <Button
            variant={darkMode ? 'light' : 'dark'}
            onClick={toggleTheme}
          >
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
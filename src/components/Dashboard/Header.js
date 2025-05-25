import React from 'react';
import Logout from '../Logout';

const Header = ({ setIsAdding, setIsAuthenticated, toggleDarkMode, isDarkMode, sortOrder, setSortOrder }) => {
  return (
    <header className="header">
      <div className="title">
        <h1>Employee Management Software</h1>
      </div>
      <div className="actions">
        <button onClick={() => setIsAdding(true)}>Add Employee</button>

        <button onClick={toggleDarkMode}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>

          {/* Sort Button */}
          <button
            onClick={() => setSortOrder('asc')}
            disabled={sortOrder === 'asc'}
          >
            Sort A-Z
          </button>
          <button
            onClick={() => setSortOrder('desc')}
            disabled={sortOrder === 'desc'}
            >
              Sort Z-A
            </button>

        <Logout setIsAuthenticated={setIsAuthenticated} />
      </div>
    </header>
  );
};

export default Header;

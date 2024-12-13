import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks, toggleDarkMode, toggleSearch, toggleProfile } from "./redux/actions";

const Header = () => {
  const dispatch = useDispatch();

  const {
    isDarkMode,
    isSearchVisible,
    isProfileOpen,
    tasks,
    searchQuery,
  } = useSelector((state) => state.header);

  useEffect(() => {
    // Fetch tasks from an external API on mount
    dispatch(fetchTasks());
  }, [dispatch]);

  // Handle search input
  const handleSearchChange = (e) => {
    dispatch({ type: "UPDATE_SEARCH_QUERY", payload: e.target.value });
  };

  return (
    <header className={`header ${isDarkMode ? "dark" : "light"}`}>
      <style>
        {`
          header {
            background-color: ${isDarkMode ? "#333" : "#9412ae"};
            color: ${isDarkMode ? "#e1e1e1" : "#fff"};
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            border-radius: 10px;
          }
          .search-bar {
            padding: 5px;
            font-size: 1rem;
            margin-right: 10px;
            border-radius: 5px;
          }
          .profile-card {
            position: absolute;
            top: 50px;
            left: 50px;
            width: 300px;
            background-color: #fff;
            color: #333;
            padding: 1rem;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
            border-radius: 8px;
            display: flex;
            flex-direction: column;
          }
        `}
      </style>

      <div className="left-section">
        <button onClick={() => dispatch(toggleProfile())} className="profile-toggle">
          <div className="toggle-bar"></div>
          <div className="toggle-bar"></div>
          <div className="toggle-bar"></div>
        </button>
        <h1>DoIt</h1>
      </div>

      <div className="right-section">
        {isSearchVisible && (
          <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        )}
        <button onClick={() => dispatch(toggleSearch())} className="search-icon">
          {isSearchVisible ? "❌" : "🔍"}
        </button>
        <button onClick={() => dispatch(toggleDarkMode())} className="theme-toggle">
          {isDarkMode ? "🌙" : "🌞"}
        </button>
      </div>

      {isProfileOpen && (
        <div className="profile-card">
          <h2>John Doe</h2>
          <h3>Today's Tasks</h3>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task.title}</li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

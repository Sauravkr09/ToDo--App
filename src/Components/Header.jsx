import React, { useState } from "react";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Toggle dark/light mode
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.classList.toggle("dark-mode", !isDarkMode); // Toggle dark mode on body
  };

  // Toggle profile card visibility
  const toggleProfileCard = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  // Handle search input
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <header className={`header ${isDarkMode ? "dark" : "light"}`}>
      {/* Embedded CSS for Header, Dark Mode, Light Mode, and Profile */}
      <style>
        {`
          /* Base Header Styles */
          header {
            background-color: #9412ae; /* Dark background for header */
            color: #fff; /* Light text */
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 2rem;
            border-radius: 10px;
          }

          header .left-section .logo h1 {
            margin: 0;
            font-size: 2rem;
          }

          header .right-section {
            display: flex;
            align-items: center;
          }

          header .right-section button {
            margin-left: 10px;
            background: transparent;
            border: none;
            color: #fff;
            font-size: 1.5rem;
            cursor: pointer;
          }

          header .search-bar {
            padding: 5px;
            font-size: 1rem;
            margin-right: 10px;
            border-radius: 5px;
          }

          /* Dark Mode Styles */
          body.dark-mode {
            background-color: #121212;
            color: #e1e1e1;
          }

          header.dark {
            background-color: #333; /* Darker header for dark mode */
          }

          /* Light Mode Styles */
          header.light {
            background-color: #f1f1f1; /* Light header for light mode */
            color: #333;
          }

          /* Profile Card Styles */
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

          .profile-card .profile-header {
            text-align: center;
          }

          .profile-card .profile-image {
            width: 100px;
            height: 100px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 10px;
          }

          .profile-card .tasks-list h3 {
            margin-top: 0;
          }

          .profile-card .tasks-list ul {
            list-style-type: none;
            padding-left: 0;
          }

          .profile-card .task-bar {
            background-color: #4caf50;
            margin-top: 20px;
            padding: 10px;
            color: #fff;
            text-align: center;
            border-radius: 5px;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            header {
              flex-direction: column;
              text-align: center;
            }

            header .right-section {
              margin-top: 1rem;
              justify-content: center;
            }

            header .search-bar {
              width: 100%;
              margin-top: 0.5rem;
            }
          }
        `}
      </style>

      {/* Left side: Profile Toggle (Hamburger Menu) */}
      <div className="left-section">
        <button onClick={toggleProfileCard} className="profile-toggle">
          <div className={`toggle-bar ${isProfileOpen ? 'open' : ''}`}></div>
          <div className={`toggle-bar ${isProfileOpen ? 'open' : ''}`}></div>
          <div className={`toggle-bar ${isProfileOpen ? 'open' : ''}`}></div>
        </button>
        <div className="logo">
          <h1>DoIt</h1>
        </div>
      </div>

      {/* Right side: Search Icon and Dark Mode Toggle */}
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
        <button onClick={() => setIsSearchVisible(!isSearchVisible)} className="search-icon">
          {isSearchVisible ? "❌" : "🔍"}
        </button>
        <button onClick={toggleTheme} className="theme-toggle">
          {isDarkMode ? "🌙" : "🌞"}
        </button>
      </div>

      {/* Profile Card (slides open when triggered) */}
      {isProfileOpen && (
        <div className="profile-card">
          <div className="profile-header">
            <img
              src="path-to-your-profile-image.jpg" // Replace with the actual image path
              alt="Profile"
              className="profile-image"
            />
            <h2>John Doe</h2>
          </div>
          <div className="tasks-list">
            <h3>Today's Tasks</h3>
            <ul>
              {/* Placeholder task list */}
              <li>Task 1</li>
              <li>Task 2</li>
            </ul>
            <h3>Planned Tasks</h3>
            <ul>
              {/* Placeholder task list */}
              <li>Task 3</li>
              <li>Task 4</li>
            </ul>
          </div>
          <div className="task-graph">
            {/* Placeholder for graph (You can use libraries like react-chartjs-2 to display real graph) */}
            <div className="task-bar" style={{ height: `100px` }}>
              <span>4 Tasks</span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
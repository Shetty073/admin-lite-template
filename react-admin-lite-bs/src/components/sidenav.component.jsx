import { useRef, useEffect } from "react";

export default function SideNav() {
  const sidebarRef = useRef(null);
  const iconRef = useRef(null);
  const themeBtnIconRef = useRef(null);
  const themeBtnTextRef = useRef(null);

  function handleNavToggle() {
    sidebarRef.current.classList.toggle("expand");
    iconRef.current.classList.toggle("bx-chevrons-right");
    iconRef.current.classList.toggle("bx-chevrons-left");
  }

  function handleThemeSwitch(e) {
    e.preventDefault();
    const currentTheme = document.documentElement.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";

    document.documentElement.setAttribute("data-theme", newTheme);
    sessionStorage.setItem("theme", newTheme);

    const tables = document.querySelectorAll(".table");

    if (newTheme === "dark") {
      themeBtnIconRef.current.classList.replace("bx-moon", "bx-sun");
      themeBtnTextRef.current.textContent = "Light Mode";
      tables.forEach(table => table.classList.add("table-dark"));
    } else {
      themeBtnIconRef.current.classList.replace("bx-sun", "bx-moon");
      themeBtnTextRef.current.textContent = "Dark Theme";
      tables.forEach(table => table.classList.remove("table-dark"));
    }
  }

  useEffect(() => {
    const savedTheme = sessionStorage.getItem("theme");
    const tables = document.querySelectorAll(".table");
    if (savedTheme === "dark") {
      themeBtnIconRef.current.classList.replace("bx-moon", "bx-sun");
      themeBtnTextRef.current.textContent = "Light Mode";
      tables.forEach(table => table.classList.add("table-dark"));
    } else {
      themeBtnIconRef.current.classList.replace("bx-sun", "bx-moon");
      themeBtnTextRef.current.textContent = "Dark Theme";
      tables.forEach(table => table.classList.remove("table-dark"));
    }
  }, []);

  return (
    <aside id="sidebar" ref={sidebarRef}>
      <div className="d-flex justify-content-between p-4">
        <div className="sidebar-logo">
          <a href="#">AdmiLite</a>
        </div>
        <button className="toggle-btn border-0" type="button" onClick={handleNavToggle}>
          <i className='bx bx-chevrons-right' ref={iconRef}></i>
        </button>
      </div>

      <ul className="sidebar-nav">
        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className='bx bxs-user-account'></i>
            <span>Profile</span>
          </a>
        </li>

        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className='bx bxs-layer'></i>
            <span>Tasks</span>
          </a>
        </li>

        <li className="sidebar-item">
          <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target="#auth"
            aria-expanded="false" aria-controls="auth">
            <i className='bx bxs-bug-alt'></i>
            <span>Auth</span>
          </a>
          <ul id="auth" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">Login</a>
            </li>
            <li className="sidebar-item">
              <a href="#" className="sidebar-link">Register</a>
            </li>
          </ul>
        </li>

        <li className="sidebar-item">
          <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse" data-bs-target="#multi"
            aria-expanded="false" aria-controls="multi">
            <i className='bx bxs-bar-chart-alt-2'></i>
            <span>Multi-Level</span>
          </a>
          <ul id="multi" className="sidebar-dropdown list-unstyled collapse" data-bs-parent="#sidebar">
            <li className="sidebar-item">
              <a href="#" className="sidebar-link collapsed has-dropdown" data-bs-toggle="collapse"
                data-bs-target="#multi-inner-1" aria-expanded="false" aria-controls="multi-inner-1">
                Two Links
              </a>
              <ul id="multi-inner-1" className="sidebar-dropdown list-unstyled collapse">
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link">Link 1</a>
                </li>
                <li className="sidebar-item">
                  <a href="#" className="sidebar-link">Link 2</a>
                </li>
              </ul>
            </li>
          </ul>
        </li>

        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className='bx bxs-bell-ring'></i>
            <span>Notification</span>
          </a>
        </li>

        <li className="sidebar-item">
          <a href="#" className="sidebar-link">
            <i className='bx bxs-cog'></i>
            <span>Setting</span>
          </a>
        </li>
      </ul>

      <div className="sidebar-footer">
        <a id="switch-theme-button" href="#" className="sidebar-link" onClick={handleThemeSwitch}>
          <i className='bx bx-moon' ref={themeBtnIconRef}></i>
          <span ref={themeBtnTextRef}>Dark Theme</span>
        </a>
        <a href="#" className="sidebar-link">
          <i className='bx bx-log-out'></i>
          <span>Logout</span>
        </a>
      </div>
    </aside>
  );
}

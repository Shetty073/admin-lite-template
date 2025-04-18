import { useEffect } from 'react'
import { Routes, Route } from "react-router";
import SideNav from './components/sidenav.component';
import TopNav from './components/topnav.component';
import Footer from './components/footer.component';
import DashboardPage from './pages/dsahboard.page';
import FormsPage from './pages/forms.page';

function App() {
  useEffect(() => {
    const savedTheme = sessionStorage.getItem("theme");
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);

      const tables = document.querySelectorAll(".table");
      if (savedTheme === "dark") {
        tables.forEach(table => table.classList.add("table-dark"));
      } else {
        tables.forEach(table => table.classList.remove("table-dark"));
      }
    }
  }, []);

  return (
    <div className="wrapper">
      {/* Side navigation bar */}
      <SideNav />

      <div className="main">
        {/* Dashboard navbar */}
        <TopNav />

        {/* Main dashboard contents */}
        <main className="content px-3 py-4">
          <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/forms" element={<FormsPage />} />
          </Routes>
        </main>

        {/* Footer content */}
        <Footer />

      </div>

    </div>
  )
}

export default App

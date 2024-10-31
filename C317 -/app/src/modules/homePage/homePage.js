import React, { useState } from "react";
import "./homePage.css";
import Header from "../../components/header";
import Menu from "../../components/menu";
import Dashboard from "../../components/dashboard";

const HomePage = () => {
  const [page, setPage] = useState("Pesquisas a Responder");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const renderContent = () => {
    switch (page) {
      case "Pesquisas a Responder":
      case "Pesquisas Respondidas":
      case "Cadastro de Colaborador":
      case "Criar Pesquisas":
        return <Dashboard title={page} />;
      default:
        return null;
    }
  };

  return (
    <div className="home-container">
      <Header onToggleMenu={() => setIsMenuOpen(!isMenuOpen)} />
      {/* Menu mostrado ou escondido conforme o estado */}
      {isMenuOpen && <Menu page={page} set={setPage} />}
      <div className="home-content">
        {renderContent()}
      </div>
    </div>
  );
};

export default HomePage;

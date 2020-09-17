import React, { useState, useCallback } from "react";
import { useHistory } from "react-router-dom";

import githubLogo from "../../assets/github-background.svg";
import api from "../../services/api";

import "./styles.css";

function Home() {
  const [userName, setUserName] = useState();
  const history = useHistory();

  const handleSubmit = useCallback(async (event) => {
    event.preventDefault();

    try {
      const response = await api.get(`users/${userName}`);

      history.push({
        pathname: "/profile",
        state: { userInfo: response.data },
      });
    } catch (err) {
      alert(err.response);
    }
  }, [history, userName]);

  return (
    <div className="home-container">
      <img src={githubLogo} alt="GitHub Logo" className="home-github-logo" />
      <div className="home-github-name">
        <strong className="home-github-text">GitHub</strong>
        <span className="home-github-search-text">SEARCH</span>
      </div>
      <form className="home-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nome do usuário"
          className="home-input"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button type="submit" className="home-button">
          BUSCAR
        </button>
      </form>
    </div>
  );
}

export default Home;

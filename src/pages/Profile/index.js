import React from "react";
import { Link } from "react-router-dom";

import githubLogo from "../../assets/github-background.svg";
import locationIcon from "../../assets/location.svg";
import jobIcon from "../../assets/job.svg";
import backIcon from "../../assets/backicon.svg";
import followersIcon from "../../assets/followers.svg";
import followingIcon from "../../assets/following.svg";
import repositoriesIcon from "../../assets/repositories.svg";
import gistsIcon from "../../assets/gists.svg";

import "./styles.css";

function Profile(props) {
  const userInfo = props.location.state.userInfo;

  return (
    <div className="profile-container">
      <div className="profile-header">
        <Link to="/">
          <div className="profile-back">
            <img src={backIcon} alt="Back icon" />
            <span>Voltar</span>
          </div>
        </Link>
        <div className="profile-github-name">
          <img
            src={githubLogo}
            alt="GitHub Logo"
            className="profile-github-logo"
          />
          <strong className="profile-github-text">GitHub</strong>
          <span className="profile-github-search-text">SEARCH</span>
        </div>
      </div>

      <div className="profile-user-info">
        <img className="profile-image" src={userInfo.avatar_url} alt="avatar" />
        <div className="profile-info">
          <span className="profile-user-login">@{userInfo.login}</span>
          <p className="profile-user-name">{userInfo.name}</p>
          <div className="profile-location-container">
            {userInfo.location && (
              <div className="profile-location-item">
                <img src={locationIcon} alt="location icon" />
                <span>{userInfo.location}</span>
              </div>
            )}
            {userInfo.company && (
              <div className="profile-location-item">
                <img src={jobIcon} alt="company icon" />
                <span>{userInfo.company}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="profile-repo-info">
        <div className="profile-repo-container">
          <div className="profile-card-dark">
            <span>Seguidores</span>
            <div>
              <img src={followersIcon} alt="follow" />
              <strong>{userInfo.followers}</strong>
            </div>
          </div>
          <div className="profile-card-light">
            <span>Seguindo</span>
            <div>
              <img src={followingIcon} alt="following" />
              <strong>{userInfo.following}</strong>
            </div>
          </div>
        </div>

        <div className="profile-repo-container">
          <div className="profile-card-dark">
            <span>Repositórios</span>
            <div>
              <img
                src={repositoriesIcon}
                alt="repositories"
                className="profile-repo-icon-fw"
              />
              <strong>{userInfo.public_repos}</strong>
            </div>
          </div>
          <div className="profile-card-light">
            <span>Gists</span>
            <div>
              <img
                src={gistsIcon}
                alt="gists"
                className="profile-repo-icon-fw"
              />
              <strong>{userInfo.public_gists}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

class ProfileGitHub extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientID: "2f95089c59975fa2b370",
      clientSectet: "fcadb58d0604131eb6d1decacaef362e1754bc76",
      count: 5,
      sort: "created: asc",
      repos: []
    };
  }

  componentDidMount = () => {
    const { username } = this.props;
    const { count, sort, clientID, clientSectet } = this.state;

    fetch(
      `https://api.github.com/users/${username}/repos?per_page=${count}&sort=${sort}&client_id=${clientID}&client_secret=${clientSectet}`
    )
      .then(res => res.json())
      .then(data => {
        if (this.refs.gitRef) {
          this.setState({ repos: data });
        }
      })
      .catch(err => console.log(err));
  };

  render() {
    const { repos } = this.state;
    const repoItems = repos.map(repo => (
      <div className="card card-body mb-2">
        <div className="row">
          <div className="col-md-6">
            <h4>
              <Link to={repo.html_url} className="text-info" target="_blank">
                {repo.name}
              </Link>
            </h4>
            <p>{repo.description}</p>
          </div>
          <div className="col-md-6">
            <span className="badge badge-info mr-1">
              Stars: {repo.stargazers_count}
            </span>
            <span className="badge badge-secondary mr-1">
              Watchers: {repo.watchers_count}
            </span>
            <span className="badge badge-success mr-1">
              Forks: {repo.forks_count}
            </span>
          </div>
        </div>
      </div>
    ));

    return (
      <div ref="gitRef">
        <hr />
        <h3 className="mb-4">Latest Github Repos</h3>
        {repoItems}
      </div>
    );
  }
}

ProfileGitHub.propTypes = {
  username: PropTypes.string.isRequired
};

export default ProfileGitHub;

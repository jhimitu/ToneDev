import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';
// import { response } from 'spdy';
import PieChart from './PieChart';


class Summary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 73,
      sentiment: 'positive',
    };
    this.getAnalysis = this.getAnalysis.bind(this);
  }

  componentDidMount() {
    const { orgName } = this.props;
    this.getAnalysis(orgName);
  }

  getAnalysis(orgName) {
    axios.get('/api/gateway/github/orgdata', {
      orgName,
    })
      .then((response) => {
        console.log(response);
        this.setState({
          score: 68,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    const { orgName } = this.props;
    const { sentiment, score } = this.state;
    return (
      <div>
        <div className="summary-container">
          <div className="summary-item-info">
            <h1>
              {orgName}
              {' '}
            Summary
            </h1>
            <p>
            The
              {' '}
              <a href="https://freeCodeCamp.org">freeCodeCamp</a>
              {' '}
            open source codebase and curriculum.
            Learn to code for free together with millions of people.
            </p>
            <h2>
    Overall Sentiment
              {' '}
              {orgName}
            </h2>
            <p>{sentiment}</p>

            <h2>Score</h2>
            <p>
              {score}
            </p>
          </div>
          <div className="summary-item-data">
            <PieChart score={73} sentiment="positive" />
          </div>
        </div>

      </div>
    );
  }
}

Summary.propTypes = {
  orgName: PropTypes.string.isRequired,
};
export default Summary;

import React from 'react';
import "./SortBy.css";
import 'bootstrap/dist/css/bootstrap.min.css';

class SortBy extends React.Component {

  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    const {sort_term, onSorting} = this.props;
    return (
      <div className="SortBy">
        <p>Sort By:</p>
        <select onChange={() => this.props.onSorting} className="sortBySelect">
          <option value="lh">Price: Low to High</option>
          <option value="hl">Price: High to Low</option>
          <option value="on">Post: Oldest to Newest</option>
          <option value="no">Post: Newest to Oldest</option>
        </select>
      </div>
    );
  }
};

export default SortBy;

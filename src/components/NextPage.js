import React from 'react';
import { Link } from 'react-router-dom';

const NextPage = () => {
  return (
    <div>

      <h2>Next Page</h2>
      <ol>
        <li>Review the <Link to="/fuel-savings">demo app</Link></li>
        <li>Next Page</li>
      </ol>
    </div>
  );
};

export default NextPage;

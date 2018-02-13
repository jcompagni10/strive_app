import React from 'react';

export default ({ errors }) => {
  if (errors) {
    return (
      <div className="errors alert alert-danger">
        <ul>
          {errors.map((error, idx) => 
            <li key={idx}>{error}</li>
          )}
        </ul>
      </div>
    );
  } else return null;
};

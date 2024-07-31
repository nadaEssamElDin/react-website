import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Counter = () => {
  // Helper function to update count
  const useCounter = (targetText) => {
    const [count, setCount] = useState(0);
    const target = parseInt(targetText); // Extract numerical part

    useEffect(() => {
      let start = 0;
      const increment = target / 100; // Change this value to control the speed

      const updateCount = () => {
        start += increment;
        if (start < target) {
          setCount(Math.ceil(start));
          setTimeout(updateCount, 20); // Change this value to control the speed
        } else {
          setCount(target); // Set final value
        }
      };

      updateCount();
    }, [target]);

    return count;
  };

  // Use the helper function for each counter
  const clientsCount = useCounter("30");
  const businessLegalitiesCount = useCounter("300"); // No '+' needed here
  const journeyYearsCount = useCounter("8");

  return (
    <div className="achievement-section">
      <div className="container-fluid">
        <h2>Some count that matters</h2>
        <p>Our achievement in the journey depicted in numbers</p>
        <div className="achievement-counters">
          <div className="counter">
            <h3>{clientsCount}</h3>
            <p>Clients</p>
          </div>
          <div className="counter">
            <h3>{businessLegalitiesCount}+</h3>
            <p>Taken business legalities</p>
          </div>
          <div className="counter">
            <h3>{journeyYearsCount}</h3>
            <p>Years of Journey</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Counter;

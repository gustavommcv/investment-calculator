/* eslint-disable react/prop-types */
import './InvestmentForm.css';

function InvestmentForm({ investment, setInvestment, updateErrors }) {
  function handleChange(field, value) {
    const numericValue = parseFloat(value);
  
    let error = '';
    if (field === 'duration') {
      if (value === '') {
        error = 'should be greater than 1';
      } else if (numericValue <= 1) {
        error = 'should be greater than 1';
      }
    } else if (isNaN(numericValue) || numericValue <= 0) {
      error = 'should be greater than 0';
    }
  
    updateErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error,
    }));
  
    setInvestment((prevState) => ({
      ...prevState,
      [field]: numericValue || '',
    }));
  }

  return (
    <div className="investment-form">
      <form action="">
        <div className="investment-input-field">
          <label htmlFor="initial-investment">Initial Investment</label>
          <input
            type="number"
            name="initial-investment"
            id="initial-investment"
            value={investment.initialInvestment}
            onChange={(event) => handleChange('initialInvestment', event.target.value)}
          />
        </div>

        <div className="investment-input-field">
          <label htmlFor="annual-investment">Annual Investment</label>
          <input
            type="number"
            name="annual-investment"
            id="annual-investment"
            value={investment.annualInvestment}
            onChange={(event) => handleChange('annualInvestment', event.target.value)}
          />
        </div>
        
        <div className="investment-input-field">
          <label htmlFor="expected-return">Expected Return</label>
          <input
            type="number"
            name="expected-return"
            id="expected-return"
            value={investment.expectedReturn}
            onChange={(event) => handleChange('expectedReturn', event.target.value)}
          />
        </div>

        <div className="investment-input-field">
          <label htmlFor="duration">Duration</label>
          <input
            type="number"
            name="duration"
            id="duration"
            value={investment.duration}
            onChange={(event) => handleChange('duration', event.target.value)}
          />
        </div>
      </form>
    </div>
  );
}

export default InvestmentForm;

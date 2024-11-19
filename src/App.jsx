import './App.css';
import Header from './components/Header/Header';
import InvestmentForm from './components/InvestmentForm/InvestmentForm';
import ResultsTable from './components/ResultsTable/ResultsTable';
import { useState } from 'react';

function formatFieldName(fieldName) {
  return fieldName
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str) => str.toUpperCase());
}

function App() {
  // Estado para armazenar os dados de investimento e os erros
  const [investment, setInvestment] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });
  
  const [errors, setErrors] = useState({
    initialInvestment: 'should be greater than 0',
    annualInvestment: 'should be greater than 0',
    expectedReturn: 'should be greater than 0',
    duration: 'should be greater than 1',
  });

  function updateErrors(newErrors) {
    setErrors(newErrors);
  }

  const hasErrors = Object.values(errors).some((error) => error !== '');

  return (
    <>
      <Header />

      <section>
        <InvestmentForm
          investment={investment} 
          setInvestment={setInvestment}
          updateErrors={updateErrors}
        />
      </section>

      <section>
        {hasErrors ? (
          <div className="errors">
            <h3>Invalid User Input!</h3>

            <ul>
              {Object.entries(errors).map(([field, message]) =>
                message ? (
                  <li key={`${field} ${message}`}>
                    <p>{formatFieldName(field)} {message}</p>
                  </li>
                ) : null
              )}
            </ul>
          </div>
        ) : (
          <ResultsTable investment={investment} />
        )}
      </section>
    </>
  );
}

export default App;

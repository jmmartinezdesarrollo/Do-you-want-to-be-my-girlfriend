import { useState } from 'react';
import Terms from './components/terms';
import Welcome from './components/welcome'
import TryAgain from './components/tryagain'
import Congrats from './components/congrats'
import './css/animation.css'
import './css/ol.css'

function App() {
  const [showTerms, setShowTerms] = useState(false);
  const [showTryAgain, setShowTryAgain] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  const handleTryAgainClick = () => {
    setShowTerms(false);
    setShowTryAgain(true);
  };

  const handleResetClick = () => {
    setShowTerms(false);
    setShowTryAgain(false);
  };

  const handleCongratsClick = () => {
    setShowTerms(false);
    setShowTryAgain(false);
    setShowCongrats(true);
  };

  return (
    <>
      {!showCongrats && !showTerms && !showTryAgain && (
        <Welcome setShowTerms={setShowTerms} setShowTryAgain={setShowTryAgain} />
      )}
      {showTerms && <Terms onClickSubmit={handleCongratsClick} onClickTryAgain={handleTryAgainClick} />}
      {showTryAgain && <TryAgain onClickReset={handleResetClick} />}
      {showCongrats && <Congrats />}
    </>
  );
}

export default App;

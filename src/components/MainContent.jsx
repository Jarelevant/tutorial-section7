import { useState } from 'react';

import HelpArea from './HelpArea';

function MainContent() {
  const [helpVisible, setHelpVisible] = useState(false);

  function toggleHelp() {
    setHelpVisible((isVisible) => !isVisible);
  }

  return (
    <main>
      <button onClick={toggleHelp}>{helpVisible ? 'What is' : 'What is'} Acme Dog Walkers?</button>
      {helpVisible && <HelpArea />}
    </main>
  );
}

export default MainContent;

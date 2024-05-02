import React, { useEffect, useState } from 'react'

const Console = () => {



  const [consoleOutput, setConsoleOutput] = useState('');

  useEffect(() => {
    const consoleLog = console.log;
    console.log = (message) => {
      setConsoleOutput((prevOutput) => prevOutput + message + '\n');
      consoleLog(message);
    };

    return () => {w
      console.log = consoleLog;
    };
  }, []);

  return (
    <div>
      <div className="console">
          <h2>Console</h2>
          <pre>{consoleOutput}</pre>
        </div>
    </div>
  )
}

export default Console

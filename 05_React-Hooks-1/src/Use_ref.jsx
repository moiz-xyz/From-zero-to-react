import React, { useRef, useEffect } from 'react';

const Use_ref = () => {
  const inputBorderRef = useRef(null);
  const inputFocusRef = useRef(null);
  const renderCountRef = useRef(0);

  // Handle border change on input
  const handleChangeBorder = () => {
    inputBorderRef.current.style.border = "2px solid red";
  };

  // Handle focus on input
  const handleFocusInput = () => {
    inputFocusRef.current.focus();
  };

  // Track how many times the component re-renders
  useEffect(() => {
    renderCountRef.current += 1;
    console.log(`Component re-rendered ${renderCountRef.current} times`);
  });

  return (
    <div>
      {/* Input border change */}
      <div>
        <input ref={inputBorderRef} type="text" placeholder="Watch border..." />
        <button onClick={handleChangeBorder}>Change Border</button>
      </div>

      {/* Input focus */}
      <div>
        <input ref={inputFocusRef} type="text" placeholder="Click to focus me" />
        <button onClick={handleFocusInput}>Focus Input</button>
      </div>

      {/* Optional: Display render count */}
      <div>
        <p>Render Count: {renderCountRef.current}</p>
      </div>
    </div>
  );
};

export default Use_ref;

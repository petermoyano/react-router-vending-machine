import { useNavigate } from 'react-router-dom';
import React from 'react';

function BackButton() {
  const navigate = useNavigate();

  return (
    <>
      <button onClick={() => navigate(-1)}>go back</button>
    </>
  );
}

export default BackButton;
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  
  // console.log('Componente Dashboard Renderizado');
  
  const [resultado, setResultado] = useState(10);
  
  let navigate = useNavigate();
  
  const handleSumar = () => {
    setResultado(resultado+1);
  };

  useEffect(() => {
    console.log('Efecto se ejecuta por primera y única vez');
    // return () => {
    //   console.log('Hola, estoy desapareciendo');
    // }
  }, []);

  useEffect(() => {
    console.log('Efecto del resultado se está ejecutando...');
  }, [resultado]);
  
  const handleBack = () => {
    navigate('/');
  }

  return (
    <>
    <div>Calculadora</div>
    <hr />
    <button onClick={handleSumar}>Sumar +1</button>
    <div>Resultado: {resultado}</div>
    <button onClick={handleBack}>Back</button>
    </>
  )
}

export default Dashboard
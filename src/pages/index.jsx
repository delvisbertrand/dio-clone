// Página apenas para testes

import React, { useCallback, useEffect, useMemo, useState } from 'react'

const Teste = () => {
  
  const [name, setName] = useState("Delvis");
  const [age, setAge] = useState(34);

  const handleSetAge= useCallback(() => {
    const newAge = 10 * age;
    console.log('age atual', age, newAge);
    setAge(prev => prev === 32 ? 26 : 32)
  }, [age]);
 
  const handleSetName = useCallback(() => {
    console.log('alterou nome')
    setName(prev => prev === 'João' ? 'José' : 'João')
  }, []);

  useEffect(() => {
    //alert('renderizei')
    //return () => {alert('desmontei')}
  }, [age])

  const calculo = useMemo(() => {
    console.log("Calculou");
    return 10 * age}, [age]);
  console.log("renderizou", calculo)

  

  return (
    <div>
        <p>Idade: {age}</p>
        <br />
        <p>Nome: {name}</p>
        <button onClick={handleSetName}>Alterar Nome</button>
        <br />
        <button onClick={handleSetAge}>Alterar Idade</button>
    </div>
  )
}

export default Teste
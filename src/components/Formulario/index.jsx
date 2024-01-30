import React, { useState } from "react";
import styles from './Formulario.module.css';

const Formulario = () => {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const handleAltura = (event) => {
    let alturaInput = event.target.value.replace(/[^0-9,.]/g, '');

    if (alturaInput.indexOf('.') === -1) {
      alturaInput = alturaInput.replace(/^(\d)/, '$1.');
    }

    alturaInput = alturaInput.replace(',', '.');

    const [inteiro, decimal] = alturaInput.split('.');
    alturaInput = `${inteiro.substring(0, 3)}${decimal ? `.${decimal.substring(0, 2)}` : ''}`;

    setAltura(alturaInput);
  };

  const handlePeso = (event) => {
    setPeso(event.target.value);
  };

  const handleCalcular = (event) => {
    if (altura.length > 0 && peso.length > 0) {
      const calculo = peso / (altura * altura);
      setResultado(calculo);
      setPeso(event.target.value = '');
      setAltura(event.target.value = '');
    } else {
      console.log(`Erro ao verificar os arquivos`)
    }
  };

  return (

    <section className={styles.content}>
      <h1 className={styles.titulo}>Calcule o seu IMC</h1>
      <form className={styles.form} >
        <div className={styles.div}>
          <label className={styles.label} htmlFor="altura">Altura</label>
          <input className={styles.input} type="text" value={altura} onChange={handleAltura} placeholder='Digite sua altura...' />
        </div>

        <div className={styles.div}>
          <label className={styles.label} htmlFor="peso">Peso</label>
          <input className={styles.input} type="text" value={peso} onChange={handlePeso} placeholder='Digite seu peso...' />
        </div>

        <button className={styles.btn} type="button" onClick={handleCalcular}>Calcular</button>

      </form>
      {resultado && (
        <div className={styles.resultado}>
          <p>Seu IMC é: {resultado.toFixed(1)}</p>
        </div>
      )}
    </section>
  )
}

export default Formulario;
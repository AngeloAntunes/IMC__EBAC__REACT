import styles from './Tabela.module.css';


const Tabela = () => {

  return (
    <table className={styles.tabela}>
      <caption className={styles.subtitulo}>Tabela de Classificação de IMC</caption>
      <thead>
        <tr>
          <th className={styles.colunaCabecalho}>IMC Kg/m²</th>
          <th className={styles.colunaCabecalho}>Classificação</th>
        </tr>
      </thead>

      <tbody>
        <tr className={styles.linhaCorPrincipal}>
          <td>Menor que 18.5</td>
          <td>Baixo peso</td>
        </tr>

        <tr className={styles.linhaCorSecundaria}>
          <td>De 18.5 a 24.9</td>
          <td>Peso normal</td>
        </tr>

        <tr className={styles.linhaCorPrincipal}>
          <td>De 25 a 29.9</td>
          <td>Sobrepeso</td>
        </tr>

        <tr className={styles.linhaCorSecundaria}>
          <td>De 30 a 34.9</td>
          <td>Obesidade grau I</td>
        </tr>

        <tr className={styles.linhaCorPrincipal}>
          <td>De 35 a 39.9</td>
          <td>Obesidade grau II</td>
        </tr>

        <tr className={styles.linhaCorSecundaria}>
          <td>Igual ou maior que 40</td>
          <td>Obesidade grau III</td>
        </tr>
      </tbody>

    </table>
  )

}

export default Tabela;
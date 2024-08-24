import Link from 'next/link';
import style from './style.min.module.css';

const Lgpd = () => {
  const setLgbd = () => {
    localStorage.setItem('lgpdsnakejs', 'confirmado');

    const lgpdEl = document.getElementById('lgpd') as HTMLElement;
    lgpdEl.remove();
  };

  return (
    <div id="lgpd" className={style.lgpd}>
      <div className={style.lgpd_left}>
        <h2>Aviso de Cookies</h2>
        <p>
          Utilizamos cookies para oferecer a melhor experiencia e analisar o uso
          do nosso site. Para mais informações, consulte a nossa{' '}
          <Link href={'/privacyPolicies'}>Politica de privacidade</Link>
        </p>
      </div>
      <div className={style.lgpd_rigth}>
        <button onClick={setLgbd} type="button" title="fechar">
          Fechar
        </button>
      </div>
    </div>
  );
};

export default Lgpd;

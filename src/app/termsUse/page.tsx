import style from './style.min.module.css';

const TermsUse = () => {
  const nameSiteTerms = 'Zelo imoveis';
  return (
    <main className={style.termsUse}>
      <section className={style.terms}>
        <h2>1. Termos de uso</h2>
        <p>
          Ao acessar ao site {nameSiteTerms}, concorda em cumprir estes termos
          de serviço, todas as leis e regulamentos aplicáveis e concorda que é
          responsável pelo cumprimento de todas as leis locais aplicáveis. Se
          você não concordar com algum desses termos, está proibido de usar ou
          acessar este site. Os materiais contidos neste site são protegidos
          pelas leis de direitos autorais e marcas comerciais aplicáveis.
        </p>
        <h3>2. Uso de Licença</h3>
        <p>
          É concedida permissão para baixar temporariamente uma cópia dos
          materiais {'(informações ou software)'} no site {nameSiteTerms} ,
          apenas para visualização transitória pessoal e não comercial. Esta é a
          concessão de uma licença, não uma transferência de título e, sob esta
          licença, você não pode:
        </p>
        <ol>
          <li>Modificar ou copiar os materiais;</li>
          <li>
            Usar os materiais para qualquer finalidade comercial ou para
            exibição pública {'(comercial ou não comercial)'};
          </li>
          <li>
            Tentar descompilar ou fazer engenharia reversa de qualquer software
            contido no site {nameSiteTerms};
          </li>
          <li>
            Remover quaisquer direitos autorais ou outras notações de
            propriedade dos materiais; ou
          </li>
          <li>
            Transferir os materiais para outra pessoa ou {'espelhe'} os
            materiais em qualquer outro servidor.
          </li>
        </ol>
        <p>
          Esta licença será automaticamente rescindida se você violar alguma
          dessas restrições e poderá ser rescindida por {nameSiteTerms} a
          qualquer momento. Ao encerrar a visualização desses materiais ou após
          o término desta licença, você deve apagar todos os materiais baixados
          em sua posse, seja em formato eletrônico ou impresso.
        </p>
        <h3>3. Isenção de responsabilidade</h3>
        <ol>
          <li>
            Os materiais no site da {nameSiteTerms} são fornecidos{' '}
            {'como estão'}.{nameSiteTerms} não oferece garantias, expressas ou
            implícitas, e, por este meio, isenta e nega todas as outras
            garantias, incluindo, sem limitação, garantias implícitas ou
            condições de comercialização, adequação a um fim específico ou não
            violação de propriedade intelectual ou outra violação de direitos.
          </li>
          <li>
            Além disso, o {nameSiteTerms} não garante ou faz qualquer
            representação relativa à precisão, aos resultados prováveis ou à
            confiabilidade do uso dos materiais em seu site ou de outra forma
            relacionado a esses materiais ou em sites vinculados a este site.
          </li>
        </ol>
        <h3>4. Limitações</h3>
        <p>
          Em nenhum caso o {nameSiteTerms} ou seus fornecedores serão
          responsáveis por quaisquer danos {'('}incluindo, sem limitação, danos
          por perda de dados ou lucro ou devido a interrupção dos negócios{')'}{' '}
          decorrentes do uso ou da incapacidade de usar os materiais em{' '}
          {nameSiteTerms}, mesmo que {nameSiteTerms} ou um representante
          autorizado da {nameSiteTerms} tenha sido notificado oralmente ou por
          escrito da possibilidade de tais danos. Como algumas jurisdições não
          permitem limitações em garantias implícitas, ou limitações de
          responsabilidade por danos consequentes ou incidentais, essas
          limitações podem não se aplicar a você.
        </p>
        <h3>5. Precisão dos materiais</h3>
        <p>
          Os materiais exibidos no site da {nameSiteTerms} podem incluir erros
          técnicos, tipográficos ou fotográficos. {nameSiteTerms} não garante
          que qualquer material em seu site seja preciso, completo ou atual.{' '}
          {nameSiteTerms} pode fazer alterações nos materiais contidos em seu
          site a qualquer momento, sem aviso prévio. No entanto, {nameSiteTerms}{' '}
          não se compromete a atualizar os materiais.
        </p>
        <h3>6. Links</h3>
        <p>
          O {nameSiteTerms} não analisou todos os sites vinculados ao seu site e
          não é responsável pelo conteúdo de nenhum site vinculado. A inclusão
          de qualquer link não implica endosso por {nameSiteTerms} do site. O
          uso de qualquer site vinculado é por conta e risco do usuário.
        </p>
        <p>Modificações</p>
        <p>
          O {nameSiteTerms} pode revisar estes termos de serviço do site a
          qualquer momento, sem aviso prévio. Ao usar este site, você concorda
          em ficar vinculado à versão atual desses termos de serviço.
        </p>
        <p>Lei aplicável</p>
        <p>
          Estes termos e condições são regidos e interpretados de acordo com as
          leis do {nameSiteTerms} e você se submete irrevogavelmente à
          jurisdição exclusiva dos tribunais naquele estado ou localidade.
        </p>
      </section>
    </main>
  );
};

export default TermsUse;

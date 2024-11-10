import { useNavigate } from 'react-router-dom';

export default function Informativo() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <body className="w-screen h-screen flex justify-center items-center font-iphone">
      {/* Botão de voltar */}
      <button 
        onClick={goBack} 
        className="absolute top-4 left-4 p-2 bg-gray-300 rounded-full text-white hover:bg-gray-400 focus:outline-none"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 12H5M12 5l-7 7 7 7" />
        </svg>
      </button>

      {/* Conteúdo principal */}
      <div className="w-[90%] md:w-[70%] lg:w-[60%] p-8 bg-white rounded-2xl shadow-lg overflow-y-auto max-h-[80%] text-justify">
        <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">Lidar com um Diagnóstico de Doença Mental</h1>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
          Receber um diagnóstico de uma doença mental pode ser um dos momentos mais desafiadores da vida. É normal sentir medo, confusão e até mesmo tristeza. No entanto, lidar com essa realidade pode se tornar uma jornada de autodescoberta e cura. Aqui estão algumas estratégias que podem ajudar nesse processo.
        </p>
        <h2 className="text-lg md:text-xl font-semibold mt-4">Entenda e Aceite Seu Diagnóstico</h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
          O primeiro passo é buscar entender o que seu diagnóstico significa. Informar-se sobre a condição pode ajudar a desmistificá-la e a reduzir a ansiedade. Aceitar o diagnóstico pode ser difícil, mas é um passo importante. Isso não significa que você se conformou; significa que você reconhece onde está e pode começar a trabalhar em direção à sua recuperação.
        </p>
        <h2 className="text-lg md:text-xl font-semibold mt-4">Busque Apoio Profissional</h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
          Encontrar um profissional de saúde mental, como um psicólogo ou psiquiatra, pode fazer toda a diferença. Eles podem oferecer um espaço seguro para você falar sobre seus sentimentos e ensinar estratégias para lidar com eles. Às vezes, a medicação é recomendada e pode ajudar a equilibrar o seu estado emocional. Lembre-se de que buscar ajuda é um sinal de força, não de fraqueza.
        </p>
        <h2 className="text-lg md:text-xl font-semibold mt-4">Cuide de Si Mesmo</h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
          O autocuidado é fundamental. Isso envolve mais do que apenas se alimentar bem e dormir o suficiente—é também sobre se permitir momentos de descanso e alegria. Práticas como meditação, exercícios leves ou até mesmo uma caminhada ao ar livre podem fazer maravilhas. Encontre atividades que te façam sentir bem e as incorpore em sua rotina.
        </p>
        <h2 className="text-lg md:text-xl font-semibold mt-4">Construa uma Rede de Apoio</h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
          Não enfrente isso sozinho. Conversar com amigos, familiares ou grupos de apoio pode aliviar o peso que você sente. Compartilhar suas experiências e ouvir as histórias dos outros pode criar conexões valiosas e ajudar você a se sentir menos isolado. A empatia e o amor que você recebe podem ser verdadeiros remédios para a alma.
        </p>
        <h2 className="text-lg md:text-xl font-semibold mt-4">Estabeleça Metas Realistas</h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
          Definir pequenas metas pode ajudar a dar um senso de direção à sua vida. Pense em passos que você pode dar, mesmo que sejam pequenos. Cada pequena conquista merece ser celebrada! Isso pode reforçar sua autoconfiança e proporcionar uma sensação de progresso, mesmo em meio a desafios.
        </p>
        <h2 className="text-lg md:text-xl font-semibold mt-4">Eduque-se e Conscientize Outros</h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700 mb-4">
          Falar sobre saúde mental pode ser um poderoso aliado na luta contra o estigma. Aprender mais sobre sua condição e compartilhar essa informação com amigos e familiares pode criar um ambiente mais acolhedor. Quando você fala abertamente sobre suas experiências, pode ajudar a promover compreensão e aceitação.
        </p>
        <h2 className="text-lg md:text-xl font-semibold mt-4">Conclusão</h2>
        <p className="text-base md:text-lg leading-relaxed text-gray-700">
          Lidar com um diagnóstico de doença mental é, sem dúvida, uma jornada desafiadora, mas também pode ser uma oportunidade de crescimento pessoal. Ao buscar informação, apoio e focar no autocuidado, você pode enfrentar essa fase da vida com mais força. Lembre-se: você não está sozinho, e cada passo, por menor que seja, é uma vitória em sua trajetória de recuperação. Ao criar uma rede de apoio e promover a conscientização, você pode não só cuidar de si mesmo, mas também ajudar a construir um mundo mais acolhedor para todos.
        </p>
      </div>
    </body>
  );
}

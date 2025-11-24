import FlippingCardScroll from './components/flippingCardScroll/flippingCardScroll';
import cardCover1 from './assets/card_cover_1.jpg';
import cardCover2 from './assets/card_cover_2.jpg';
import cardCover3 from './assets/card_cover_3.jpg';

function App() {
  const cards = [
    {
      id: 'card-1',
      frontImage: cardCover1,
      backText: 'Interactive Web Experience',
      backBgColor: 'bg-card-1',
      backTextColor: 'text-bg',
      number: '01',
      roundedClass: 'rounded-l-[20px]'
    },
    {
      id: 'card-2',
      frontImage: cardCover2,
      backText: 'Interactive Web Experience',
      backBgColor: 'bg-card-2',
      backTextColor: 'text-fg',
      number: '02',
      roundedClass: ''
    },
    {
      id: 'card-3',
      frontImage: cardCover3,
      backText: 'Interactive Web Experience',
      backBgColor: 'bg-card-3',
      backTextColor: 'text-fg',
      number: '03',
      roundedClass: 'rounded-r-[20px]'
    }
  ];

  return (
    <>
      <section className="intro relative w-full h-svh p-8 bg-bg text-fg text-center content-center">
        <h1 className="text-6xl font-medium leading-none w-[30%] mx-auto max-[1000px]:text-5xl max-[1000px]:w-full">
          Every idea begins as a single image
        </h1>
      </section>

      <FlippingCardScroll 
        title="Three pillars with one purpose"
        cards={cards}
      />

      <section className="outro relative w-full h-svh p-8 bg-bg text-fg text-center content-center">
        <h1 className="text-6xl font-medium leading-none w-[30%] mx-auto max-[1000px]:text-5xl max-[1000px]:w-full">
          Every transition leaves a trace
        </h1>
      </section>
    </>
  );
}

export default App;
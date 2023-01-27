import Card from "./components/cards/Card";
import data from "./util/data";

function App() {
  // JS

  return (
    //JSX
    <>
      {data.map((item) => {
        console.log(item);
        const { id, language, img, btnName } = item; //! destruction
        return <Card key={id} language={language} img={img} btn={btnName} />;
      })}
    </>
  );
}

export default App;

import BtnGroup from "./components/BtnGroup";

function App() {
  return (
    <div className="d-flex justify-content-center mt-5">
        <BtnGroup buttons={['Left', 'Rigth']} />
    </div>
  );
}

export default App;

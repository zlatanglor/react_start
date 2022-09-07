import Alert from "./componets/Alert";

function App() {
  return (
    <div className="container-fluid mt-5">
        <Alert type={'success'} text={'What is love?'} />
        <Alert type={'danger'} text={'WTF?'} />
    </div>
  );
}

export default App;

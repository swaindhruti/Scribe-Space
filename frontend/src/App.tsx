import { Button } from "./components/ui/button";

function App() {
  function printhello() {
    console.log("SDFdsfdsfsd");
  }
  return (
    <div className=" flex flex-col justify-center items-center min-h-screen space-y-10">
      <h1 className="text-3xl font-bold underline hover:scale-110">
        Hello world!
      </h1>
      <Button onClick={printhello}>Click Me</Button>
    </div>
  );
}

export default App;

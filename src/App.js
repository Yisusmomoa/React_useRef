
import './App.css';
import CopyApp from './components/CopyApp';
import FocusApp from './components/FocusApp';
import MediaPlayer from './components/MediaPlayer';


//minuto 23
//https://www.youtube.com/watch?v=D2ElJVzriCk
function App() {
  

  return (
    <div className="App">
      {/* <FocusApp></FocusApp> */}
      {/* <CopyApp></CopyApp> */}
      <MediaPlayer></MediaPlayer>
    </div>
  );
}

export default App;


/*
use ref tiene dos usos

1. una interacción con el dom (real) sin pasar por el virtual dom
focus 
copy
media player
scroll animation

2. referencia mutable
una variable que vamos a tener en react, cuyo valor es persistente a lo largo de los renders que van ocurriendo
cada vez que se pinte el componente. pero con la diferencia a los estados que cuando estas variables cambian su valor
no causa una nueva renderización
render count 
loading app



*/
import './App.css';
import img from '/me.jpg';
import Heading from '../src/Components/Heading';
import SubHeading from '../src/Components/SubHeading';
import Intro from './Components/Intro';

function App() {
  const me = img;


  return (
    <div className="flex justify-center items-center p-4 min-h-screen bg-background">
      <div className="card card-compact w-96 bg-base-100 shadow-xl border">
        <figure>
          <img src={me} alt="Ryan Wilson" />
        </figure>
        <div className="card-body">
         <Heading 
         title="Ryan Wilson"
          iconClass="fas fa-user-circle"
         />
         <SubHeading title="web developer" />
          <div className="card-content text-lg">
           <Intro />
          </div>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Action 1</button>
            <button className="btn btn-secondary">Action 2</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

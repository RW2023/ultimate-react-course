import './App.css';
import img from '/me.jpg';
import dread from '/dread.png'; // Correct the import path for dread image
import LightHeading from '../src/Components/Heading';
import LightSubHeading from '../src/Components/SubHeading';
import Intro from './Components/Intro';
import SubHeading from './Components/SubHeading';
import SkillContainer from './Components/SkillContainer';

function App() {
  const me = img;

  return (
    <div
      className="flex justify-center items-center p-4 min-h-screen bg-base300 glass mx-auto"
      style={{ backgroundImage: `url(${dread})` }} // Use the dread variable as the background image
    >
      <div className="card card-compact w-3/4 md:w-1/2 bg-base-300 shadow-2xl border mx-auto">
        <figure>
          <img
            src={me}
            alt="Ryan Wilson"
            height={400}
            width={400}
            className="rounded-md h-50 w-50 mx-2 border-black border-2 justify-self-start p-1"
          />
        </figure>
        <div className="card-body">
          <LightHeading title="Ryan Wilson" iconClass="fas fa-user-circle" />
          <LightSubHeading title="web developer" iconClass="fas fa-code" />
          <div className="card-content text-lg">
            <Intro />
          </div>
          <div id="skills">
            <SubHeading title="skills" iconClass="fas fa-laptop-code" />
            <SkillContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

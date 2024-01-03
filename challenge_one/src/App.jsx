import './App.css';
import img from '/me.jpg';
import dread from '/dread.png'; // Correct the import path for dread image
import LightHeading from '../src/Components/Heading';
import Intro from './Components/Intro';
import SubHeading from './Components/SubHeading';
import SkillContainer from './Components/SkillContainer';
import Footer from './Components/Footer';

function App() {
  const me = img;
  

  return (
    <>
      <div
        className="flex justify-center items-center p-4 min-h-screen bg-base300 glass mx-auto"
        style={{ backgroundImage: `url(${dread})`, backgroundSize: 'cover' }} // Use the dread variable as the background image
      >
        <div className="card card-compact w-3/4 md:w-1/2 bg-base-300 shadow-2xl border mx-auto">
          <figure>
            <img
              src={me}
              alt="Ryan Wilson"
              height={400}
              width={400}
              className="rounded-xl h-50 w-50 mx-2 border-black border-2 justify-self-start p-1 bg-cover bg-no-repeat"
            />
          </figure>
          <div className="card-body">
            <LightHeading
              title="Ryan Wilson"
              iconClass="fas fa-user-circle"
            />
            <SubHeading title="web developer" iconClass="fas fa-code" />
            <div className="card-content text-lg">
              <Intro />
            </div>
            <div className="skills text-3xl border">
              <SkillContainer />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
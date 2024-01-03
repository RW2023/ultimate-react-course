import './App.css';
import img from '/me.jpg';

function App() {
  const me = img;


  return (
    <div className="flex justify-center items-center p-4 min-h-screen bg-background">
      <div className="card card-compact w-96 bg-base-100 shadow-xl border">
        <figure>
          {/* Using an online placeholder image */}
          <img src={me} alt="Ryan Wilson" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-center">Card Title</h2>
          <p className="card-subtitle text-paragraph text-lg">
            Subheading or brief description goes here.
          </p>
          <div className="card-content text-lg">
            Detailed content or description can be added here. This section can
            be used to elaborate on the card title or to provide more specific
            information related to the card.
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

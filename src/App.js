import "./App.css";
import "@fontsource/dm-sans";
import Ahero from "./images/ahero.png";
import Journaleo from "./images/journaleo.png";
import Pomo from "./images/pomo.png";

function App() {
  return (
    <div className="projects">
      <div>
        <h1>Arlison Labs</h1>
        <p className="mt-8">
          Indie projects by{" "}
          <a
            href="https://twitter.com/heyallieson"
            className="link"
            target="_blank"
          >
            Allison
          </a>{" "}
          and Arlex.
        </p>
        <hr className="mt-24" />
      </div>

      <div className="mt-24">
        <a href="https://journaleo.app/" target="_blank">
          <div className="card flex">
            <div>
              <img src={Journaleo} width="64px" alt="Journaleo logo" />
            </div>
            <div className="ml-24">
              <div className="flex">
                <p className="b2">Journaleo</p>
                <div className="gray badge">2023</div>
                <div className="gray badge">Not maintained</div>
              </div>
              <p className="mt-4 secondary">
                A visual diary to keep track of your goals
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://chrome.google.com/webstore/detail/mini-pomodoro-blocker/iiaplmkgodeoepbecddedbaofeeogdhi"
          target="_blank"
        >
          <div className="card flex">
            <div>
              <img src={Pomo} width="64px" alt="Mini Pomodoro Logo" />
            </div>
            <div className="ml-24">
              <div className="flex">
                <p className="b2">Mini Pomodoro Blocker</p>
                <div className="gray badge">2022</div>
                <div className="gray badge">Not maintained</div>
              </div>
              <p className="mt-4 secondary">
                A simple pomodoro timer and distraction blocker
              </p>
            </div>
          </div>
        </a>
        <a href="https://aheroapp.com/" target="_blank">
          <div className="card flex">
            <div>
              <img src={Ahero} width="64px" alt="Ahero logo" />
            </div>
            <div className="ml-24">
              <div className="flex">
                <p className="b2">Ahero</p>
                <div className="gray badge">2020</div>
                <div className="green badge">Profit</div>
              </div>
              <p className="mt-4 secondary">
                Blocks online distractions for the best deep work possible
              </p>
            </div>
          </div>
        </a>
        <div className="flex discontinued-card">
          <div className="circle-img">👕</div>
          <div className="ml-24">
            <div className="flex">
              <p className="b2">Bloo Kiwi</p>
              <div className="gray badge">2019</div>
              <div className="gray badge">Inactive</div>
              <div className="green badge">Profit</div>
            </div>
            <p className="mt-4 secondary">
              E-commerce selling adorable and organic tees
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

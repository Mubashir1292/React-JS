import ProfileCards from "./components/Cards/ProfileCards";
import alexa from "./assets/images/alexa.png";
import cortana from "./assets/images/cortana.png";
import siri from "./assets/images/siri.png";
const App = () => {
  const description = "This is Really Helpful";
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Personal Digital Assistance</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
        }}
      >
        <ProfileCards
          title="Alexa"
          handle="@Alexa"
          image={alexa}
          description={description}
        />
        <ProfileCards
          title="Cortana"
          handle="@Cortana"
          image={cortana}
          description={description}
        />
        <ProfileCards
          title="Siri"
          handle="@Siri"
          image={siri}
          description={description}
        />
      </div>
    </div>
  );
};
export default App;

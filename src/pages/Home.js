import Header from "../components/Header";
import Widget from "../components/Widget";
import count from "../images/count.jpg";
import greeting from "../images/greeting.jpg";
import hide from "../images/hide.jpg";
import cake from "../images/cake.jpg";

export default function Home() {
  return (
    <div className="home-wrapper">
      <Header />
      <div className="home-hero">
        <Widget name="counter" img={count} />
        <Widget name="greeting" img={greeting} />
        <Widget name="hide" img={hide} />
        <Widget name="remaining" img={cake} />
        <p>
          Look at the code on{" "}
          <a href="https://github.com/arianneelise/widgets-projects" target="/">
            Github
          </a>
        </p>
      </div>
    </div>
  );
}

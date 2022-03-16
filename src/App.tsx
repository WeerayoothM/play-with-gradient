import "./styles.css";
import Conic from "./Gradient/Conic/Conic";
import Linear from "./Gradient/Linear/Linear";
import Radial from "./Gradient/Radial/Radial";
export default function App() {
  return (
    <div>
      <Linear />
      <Radial />
      <Conic />
    </div>
  );
}

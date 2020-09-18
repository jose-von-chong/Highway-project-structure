//HIGHWAY
import Highway from "@dogstudio/highway";
import { highway_core } from "../core";
//Import page 2 libraries here
export default class Page2_renderer extends Highway.Renderer {
  onEnter() {}
  onLeave() {}
  onEnterCompleted() {
    alert("this is Page 2 renderer");
  }
  onLeaveCompleted() {}
}

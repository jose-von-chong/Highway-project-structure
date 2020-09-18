//HIGHWAY
import Highway from "@dogstudio/highway";
import { highway_core } from "../core";
//Import main page libraries here
export default class Index_renderer extends Highway.Renderer {
  onEnter() {}
  onLeave() {}
  onEnterCompleted() {
    alert("this is the index renderer");
  }
  onLeaveCompleted() {}
}

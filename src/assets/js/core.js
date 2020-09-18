//highway
import Highway from "@dogstudio/highway";
//RENDERERS
import Index_renderer from "./renderers/index-renderer";
import Page2_renderer from "./renderers/page2-renderer";
//TRANSITIONS
import Fade_in_bottom from "./transitions/fade-in-bottom";
import Overlap from "./transitions/overlap";
const highway_core = new Highway.Core({
  renderers: {
    index: Index_renderer,
    page2: Page2_renderer,
  },
  transitions: {
    default: Fade_in_bottom,
    contextual: {
      Fade_in_bottom: Fade_in_bottom,
      overlap: Overlap,
    },
  },
});
export { highway_core };

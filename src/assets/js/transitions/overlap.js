import Highway from "@dogstudio/highway";
import anime from "animejs/lib/anime.es";
export default class Overlap extends Highway.Transition {
  // Built-in methods
  in({ from, to, trigger, done }) {
    from.remove();
    let in_tl = anime.timeline({
      duration: 200,
      easing: "easeInOutSine",
    });
    in_tl.add({
      targets: to,
      opacity: [0, 1],
      complete: function () {
        done();
      },
    });
  }

  out({ from, trigger, done }) {
    let out_tl = anime.timeline({
      duration: 200,
      easing: "easeInOutSine",
    });
    out_tl.add({
      targets: from,
      opacity: [1, 0],
      complete: function () {
        done();
      },
    });
  }
}


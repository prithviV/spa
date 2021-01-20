import "./set-public-path";
import "./styles/nav.css";
let domEl;
export function bootstrap(props) {
  return Promise.resolve().then(() => {
    domEl = document.getElementById("single-spa-application:" + props.name);
    if (!domEl) {
      domEl = document.createElement("div");
      domEl.id = "app1";
      domEl.classList.add("application-wrappers");
      document.body.appendChild(domEl);
    }
  });
}

export function mount() {
  return Promise.resolve().then(() => {
    /**
     * window.requestAnimationFrame() is necessary in order to have the transition on first bootstrap/mount,
     * otherwise the browser batches the addition of the 'mounting' class with the 'wrapper' class from bootstrap
     * above and the transition doens't actually happen.
     **/
    window.requestAnimationFrame(() =>
      domEl.classList.add("application-mounting")
    );
    domEl.innerHTML = `<ul class="navigation"><li><a href=/home>Home</a></li><li><a href=/about>About</a></li><li><a href=/contact>Contact</a></li></ul>`;
  });
}

export function unmount(props) {
  return Promise.resolve().then(() => {
    domEl.classList.remove("application-mounting");
    domEl.innerHTML = "";
  });
}

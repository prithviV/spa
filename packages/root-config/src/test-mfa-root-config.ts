import { registerApplication, start } from "single-spa";
import {
  constructApplications,
  constructRoutes,
  constructLayoutEngine,
} from "single-spa-layout";

const data = {
  props: {},
  loaders: {
    loader: `<div class="row justify-content-md-center">
    <div class="col-md-auto">
        <div class="spinner-border" role="status">
            <span class="visually-hidden"></span>
        </div>
    </div>
</div>`,
  },
};

const routes = constructRoutes(
  document.querySelector('#single-spa-layout'),
  data
);

const applications = constructApplications({
  routes,
  loadApp({ name }) {
    return System.import(name);
  },
});
const layoutEngine = constructLayoutEngine({ routes, applications });

applications.forEach(registerApplication);
layoutEngine.activate();
start();

import {
  useLoaderData,
  useTransition
} from "/build/_shared/chunk-DLUP4YOH.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-QMESYMYV.js";

// browser-route-module:/home/projects/node-nmasds/app/routes/index.tsx?browser
init_react();

// app/routes/index.tsx
init_react();
var meta = () => {
  return {
    title: "Remix Doge",
    description: "Welcome to Remix Doge!"
  };
};
function Index() {
  const { message } = useLoaderData();
  const { state } = useTransition();
  return /* @__PURE__ */ React.createElement("section", null, state === "submitting" ? "Loading..." : message.map((imagePath) => /* @__PURE__ */ React.createElement("img", {
    key: imagePath,
    src: imagePath
  })));
}
export {
  Index as default,
  meta
};
//# sourceMappingURL=/build/routes/index-SBMUMQN7.js.map

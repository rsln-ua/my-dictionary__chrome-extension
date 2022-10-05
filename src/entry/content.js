import { createApp, h } from "vue";
import { ContentApp } from "@/components/ContentApp";
import { actionModalRootElement } from "@/constants/content";

const rootDiv = document.createElement("div");
rootDiv.id = actionModalRootElement;
document.body.append(rootDiv);

createApp({
  render: () => h(ContentApp),
}).mount(`#${actionModalRootElement}`);

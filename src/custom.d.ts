import type { Props } from "./types";

declare module "*.svg" {
  const content: any;
  export default content;
}

export { Props };

import type { Props } from "./types";

declare module "*.css" {
  const content: Record<string, string>;
  export default content;
}

declare module "*.css?inline" {
  const content: Record<string, string>;
  export default content;
}

export { Props };

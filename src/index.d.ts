declare module "*.svg" {
  import React from "react";
  const component: React.FC<React.SVGProps<SVGElement>>;
  export default component;
}

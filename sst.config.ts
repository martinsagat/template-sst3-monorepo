/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "monorepo-template",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    await import("./infra/storage");
    const api = await import("./infra/api");
    const nuxt = await import("./infra/nuxt");

    return {
      api: api.myApi.url,
      nuxt: nuxt.nuxt.url
    };
  },
});

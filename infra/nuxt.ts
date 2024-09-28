export const nuxt = new sst.aws.Nuxt("NuxtApp", {
    // domain: "domain.com",
    path: "packages/nuxt",
    link: [],
    environment: {
        API_URL: "https://api.homestep.com.au"
    }
});
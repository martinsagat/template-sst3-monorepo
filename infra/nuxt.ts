export const nuxt = new sst.aws.Nuxt("NuxtApp", {
    buildCommand: "npm run generate",
    // domain: "homestep.com.au",
    path: "packages/nuxt",
    link: [],
    environment: {
        API_URL: "https://api.homestep.com.au"
    }
});
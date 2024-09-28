const domainName = "domain.com";

export const nuxt = new sst.aws.Nuxt("Nuxt", {
    domain: {
        name: domainName,
        dns: sst.aws.dns({
            zone: "XXXXXXXXXXXX"
        })
    },
    path: "packages/nuxt",
    link: [],
    environment: {
        API_URL: "https://api." + domainName
    }
});
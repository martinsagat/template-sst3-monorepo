# Template SST3 monorepo

1. Rename the files in the project to the name of your app.
`npx replace-in-file '/monorepo-template/g' MY_APP **/*.* --verbose`

2. Update sst.config.ts
```ts
return {
      name: "monorepo-template",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
      providers: {
        aws: {
          region: "us-east-1",
          profile: "aws-profile" // from .aws/credentials
        }
      }
    };
```

3. Deploy and start development `npx sst dev`
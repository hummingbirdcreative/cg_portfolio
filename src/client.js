import sanityClient from "@sanity/client";

export default sanityClient({
  projectId: "cmc4cnq4",
  dataset: "production",
  apiVersion: "2023-02-13",
  token: "sanity-auth-token",
  useCdn: false,
});

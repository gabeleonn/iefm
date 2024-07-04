import pwa from "@serwist/next";

const withPWa = pwa({
    swSrc: "src/sw.ts",
    swDest: "public/sw.js",
    reloadOnOnline: true,
})

export default withPWa({})
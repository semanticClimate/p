module.exports = {
  meta: {
    title: "#semanticClimate",
    description: "Liberating knowledge from climate-related reports",
    lang: "en",
    siteUrl: "https://semanticclimate.netlify.app/",
  },
  homepage: {
    sectionHeading1: "What's #semanticClimate?",
    description1: "We are a team of... (link the about and team page)",
    sectionHeading2: "Events",
    description2: "#semanticClimate is hosting a series of hackathons. Check out our Events page to find out when the next one is. (link to events page)"
  },
  feed: { // used in feed.xml.njk
    subtitle: "Liberating knowledge from climate-related reports",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://semanticclimate.netlify.app/",
    authorName: "Semantic Climate",
    authorEmail: ""
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "#semanticClimate",
    description: "",
  }
}
module.exports = {
  meta: {
    title: "Climate Knowledge Hunt",
    description: "Hackathon to make sense of climate literature",
    lang: "en",
    siteUrl: "https://climate-knowledge-hunt.netlify.app/",
  },
  feed: { // used in feed.xml.njk
    subtitle: "Lorem ipsum dolor sit amet consecuteor",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://climate-knowledge-hunt.netlify.app/",
    authorName: "Semantic Climate",
    authorEmail: ""
  },
  hero: { // used in hero section of main page ie. index.html.njk
    title: "First season of Climate Knowledge Hunt on 24th September 2022",
    description: "to join us!",
    reglink: "reglink"
  }
}
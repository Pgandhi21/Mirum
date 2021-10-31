const router = require("express").Router();
const axios = require("axios");
const cheerio = require("cheerio");
const exampleData = require("../seeds/data");

// Route to top 20 results for the language chosen or individual question in last 10 years

router.get("/:id", async (req, res) => {
  console.log(req.params.id);
  try {
    // const data = await exampleData;
    const data = await resultsQuery(req.params.id);
    console.log(data);
    res.render("results", {
      layout: "resultsPage",
      data,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

async function resultsQuery(subject) {
  let overflowData = [];
  for (page = 1; page < 25; page++) {
    if (overflowData.length > 19) {
      break;
    }

    const url =
      "https://stackoverflow.com/questions/tagged/" +
      subject +
      "?tab=Votes&page=" +
      page;

    try {
      const res = await axios.get(url);
      const html = res.data;

      //loading response data into a Cheerio instance
      const $ = cheerio.load(html);

      $(".question-summary").each((i, el) => {
        const body = $(el)
          .find(".summary")
          .find(".excerpt")
          .text()
          .replace(/[\n\r]/g, "")
          .trim();
        const title = $(el)
          .find(".summary")
          .find(".question-hyperlink")
          .text()
          .replace(/[\n\r]/g, "")
          .trim();

        const actionTime = $(el)
          .find(".summary")
          .find(".relativetime")
          .prop("title");

        const newActionTime = Date.parse(new Date(actionTime));
        const date = new Date(actionTime).toLocaleDateString("en-US");

        const link = $(el)
          .find(".summary")
          .find(".question-hyperlink")
          .attr("href");

        const data = {
          title,
          body,
          link: `https://stackoverflow.com${link}`,
          date,
        };

        const tenYearDiff = Date.now() - 315360000000;

        if (overflowData.length > 21) {
          return false;
        }

        if (newActionTime > tenYearDiff) {
          overflowData.push(data);
        }
      });
      let removedValue = overflowData.shift();

      // console.log(overflowData);
      // console.log(overflowData.length);
    } catch (error) {
      console.log("error");
    }
  }
  console.log(overflowData.length);
  return overflowData;
}

module.exports = router;

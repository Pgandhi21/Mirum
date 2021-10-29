const axios = require("axios");
const cheerio = require("cheerio");

let overflowData = [];

async function getSOQuestions(subject, page) {
  const url =
    "https://stackoverflow.com/questions/tagged/" +
    subject +
    "?tab=votes" +
    "&pages=" +
    page;

  try {
    const res = await axios.get(url);
    const html = res.data;

    //loading response data into a Cheerio instance
    const $ = cheerio.load(html);

    $(".mln24").each((i, el) => {
      const excerpt = $(el)
        .find(".summary")
        .find(".excerpt")
        .text()
        .replace(/[\n\r]/g, " ");
      const questionSummary = $(el)
        .find(".summary")
        .find(".question-hyperlink")
        .text();

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
        questionSummary,
        link: `https://stackoverflow.com/${link}`,
        excerpt,
        date,
      };

      let currentDate = Date.now();
      let tenYearDiff = currentDate - 316224000000;

      if (overflowData.length > 21) {
        return false;
      }

      if (newActionTime > tenYearDiff) {
        overflowData.push(data);
        // console.log(overflowData);
      }
    });
    let removedValue = overflowData.shift();

    // console.log(overflowData);
    console.log(overflowData.length);
  } catch (error) {
    console.log(error);
  }
}

for (let i = 0; i < 10; i++) {
  getSOQuestions("mysql", i);
}

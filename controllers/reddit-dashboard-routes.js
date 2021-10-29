const axios = require("axios");
const cheerio = require("cheerio");

let overflowData = [];

async function getSOQuestions(subject) {
  const url =
    "https://www.reddit.com/r/webdev/search/?q=" +
    subject +
    "&restrict_sr=1&sr_nsfw=&sort=top&t=year";

  try {
    const res = await axios.get(url);
    const html = res.data;

    //loading response data into a Cheerio instance
    const $ = cheerio.load(html);

    $("._2XDITKxlj4y3M99thqyCsO").each((i, el) => {
      const questionSummary = $(el).find("_eYtD2XCVieq6emjKBH3m").attr("span");

      const actionTime = $(el).find("_3jOxDPIQ0KaOWpzvSQo-1s").text();

      //   const newActionTime = Date.parse(new Date(actionTime));
      //   const date = new Date(actionTime).toLocaleDateString("en-US");

      const link = $(el).find("_3jOxDPIQ0KaOWpzvSQo-1s").attr("href");

      const data = {
        questionSummary,
        link: link,
        actionTime,
      };

      overflowData.push(data);
      //   let currentDate = Date.now();
      //   let tenYearDiff = currentDate - 316224000000;

      //   if (newActionTime > tenYearDiff) {
      //     overflowData.push(data);
      //     console.log(overflowData);
      //   }
    });
    let removedValue = overflowData.shift();

    console.log(overflowData);
    console.log(overflowData.length);
    // if (overflowData.length > 21) {
    //   return;
    // }
  } catch (error) {
    console.log(error);
  }
}

getSOQuestions("javascript");

// for (let i = 0; i < 1; i++) {
//   getSOQuestions("mysql", i);
// }

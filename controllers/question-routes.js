async function getSOQuestions(link) {
  const url = link+"?answertab=votes#tab-top";

  try {
    const res = await axios.get(url);
    const html = res.data;

    //loading response data into a Cheerio instance
    const $ = cheerio.load(html);

    $(".container").each((i, el) => {
      const questionDetails = $(el)
        .find(".question")
        .find(".js-post-body")
        .children()
        .text()
        .replace(/[\n\r]/g, " ");
      const question = $(el)
        .find("#question-header")
        .find(".question-hyperlink")
        .text();

      const answer = $(el)
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
      let tenYearDiff = currentDate - 315360000000;

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
    console.log(error);
  }
}

getSOQuestions(
  "https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array"
);

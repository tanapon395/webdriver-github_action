var assert = require("assert");

describe("Automated Test Case", () => {
  it("Search Google Chrome", async () => {
    await browser.url("https://www.google.com/");
    const keyword = await $('[name="q"]');
    await keyword.click();
    await keyword.setValue("software engineering");

    const search = await $('//input[@name="btnK"]');
    await search.click();

    const link = await $('//div[@id="rso"]/div/div/div/a/h3/span');
    await link.click();

    await expect(browser).toHaveTitle(
      "เรียน Software Engineering แล้ว Coding ไม่ได้ ถือว่าไม่ประสบความสำเร็จในการเรียนจริงหรือ ? | by Yok • Rawisara | Artisan Digital | Medium"
    );
  });
});

// From Katalon Export

// var assert = require("assert");

// describe("Untitled Test Case", function () {
//   it("should do something", function () {
//     browser.url("https://www.google.com/");
//     $('[name="q"]').click();
//     $('[name="q"]').setValue("software engineering");
//     $("(//input[@name='btnK'])[2]").click();
//     $('//div[@id="rso"]/div/div/div/a/h3/span').click();
//     expect($("#403c")).toHaveTextContaining(
//       `เรียน Software Engineering แล้ว Coding ไม่ได้ ถือว่าไม่ประสบความสำเร็จในการเรียนจริงหรือ ?`
//     );
//   });
// });

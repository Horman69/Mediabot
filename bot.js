require("dotenv").config();
const Telegraf = require("telegraf");
const bot = new Telegraf(process.env.BOT_TOK);

bot.command("newyork", (ctx) => {
  bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
  bot.telegram.sendPhoto(
    ctx.chat.id, {
      source: "res/newyork.jpg",
    }, {
      reply_to_message_id: ctx.message.message_id,
    }
  );
});

bot.command("dubai", (ctx) => {
  bot.telegram.sendChatAction(ctx.chat.id, "upload_video");
  bot.telegram.sendAnimation(
    ctx.chat.id,
    "https://media.giphy.com/media/Wq8zzF0IOHUWxFnEl0/giphy.gif", {
      reply_to_message_id: ctx.message.message_id,
    }
  );
});
//mediaGroup
bot.command("cities", (ctx) => {
  let cities = [
    "res/dubai.jpg",
    "res/hongkong.jpg",
    "res/london.jpg",
    "res/newyork.jpg",
    "res/singapore.jpg",
  ];
  let result = cities.map((city) => {
    return {
      type: "photo",
      media: {
        source: city,
      },
    };
  });

  bot.telegram.sendMediaGroup(ctx.chat.id, result);
});

bot.command("citieslist", (ctx) => {
  bot.telegram.sendDocument(ctx.chat.id, {
    source: "res/citieslist.txt",
  });
});

bot.launch();
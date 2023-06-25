import { format } from "date-fns";
import _ from "lodash";
import { quotes } from "@/data/quotes";

export const updateQuote = () => {
  const date = new Date();
  const formattedDate = format(date, "yyyy-MM-dd");
  const objectLocalStorage =
    localStorage.getItem("date_stamp") &&
    JSON.parse(localStorage.getItem("date_stamp") || "{}");

  if (objectLocalStorage?.date !== formattedDate) {
    const quoteDrawn = _.sample(quotes);
    const object = { date: formattedDate, quote: quoteDrawn };
    localStorage.setItem("date_stamp", JSON.stringify(object));
    return quoteDrawn || "";
  } else {
    return objectLocalStorage.quote;
  }
};

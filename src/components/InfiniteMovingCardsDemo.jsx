"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteMovingCardsDemo() {
  return (
    <div>
      <InfiniteMovingCards items={moviePosters} direction="left" speed="slow" />
    </div>
  );
}

const moviePosters = [
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/kBzGbQYEfv8Wbdh60ND9V9dJt0S.jpg", // Bandish Bandits
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yPfG50fWq4rZ3FDC2ChkJj9CjCa.jpg", // Asur
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg", // Money Heist
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg", // Squid Game
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/yUSL24kpHc9Nls4Pohia4shgcIM.jpg", // Swades
  "https://image.tmdb.org/t/p/w300_and_h450_bestv2/g3hk2wEeIsTGhh7JvK8yWFVR7ue.jpg", // Sita Ramam
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ddAHq5R52rZSuTq3nV7AphPo7Ff.jpg", // Jawan
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/em39H81XLCDgXsI7V4IcBZseEO6.jpg", // Yeh Jawaani Hai Deewani
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/sQ7A7jyTbkK90vjd8yCRuoyL9CK.jpg", // Jab We Met
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uKYUR8GPkKRCksczYDJb3pwZauo.jpg", // Stranger Things
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/apbrbWs8M9lyOpJYU5WXrpFbk1Z.jpg", // Dark
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/mFg28Xslo8sMMRft7gxqVudCwkj.jpg", // Daredevil
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wuMc08IPKEatf9rnMNXvIDxqP4W.jpg", // Harry Potter and the Philosopher's Stone
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg", // La La Land
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", // Inception
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", // Interstellar
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/4q2NNj4S5dG2RLF9CpXsej7yXl.jpg", // Spider-Man: Far From Home
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/7WfK17BXE6szXlm4WOxfswgbdsL.jpg", // Doctor Strange
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/wVYREutTvI2tmxr6ujrHT704wGF.jpg", // The Conjuring
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/ukhkXsNRK8QfnJt2OCA7KvjXQXo.jpg", // Hi nanna
  "https://image.tmdb.org/t/p/w600_and_h900_bestv2/2RkZdntb5gqfNF1ItdT4ExEbcFv.jpg", //Laapata Ladies
];

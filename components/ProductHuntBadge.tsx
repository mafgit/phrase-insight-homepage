import Link from "next/link";
import React from "react";

const ProductHuntBadge = () => {
  return (
    <Link
      href="https://www.producthunt.com/products/phraseinsight?embed=true&utm_source=badge-featured&utm_medium=badge&utm_source=badge-phraseinsight"
      target="_blank"
    >
      <img
        src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=1010068&theme=light&t=1756308367674"
        alt="PhraseInsight - Expand&#0032;vocabulary&#0032;while&#0032;reading | Product Hunt"
        className="w-full h-[48px] cursor-pointer"
        width="250"
        height="54"
      />
    </Link>
  );
};

export default ProductHuntBadge;

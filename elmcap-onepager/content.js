// ============================================================
// CONTENT.JS — Edit all your website text here
// ============================================================

const SITE_CONTENT = {

    // --- Header ---
    brandName: "Elm Capital",

    // --- Main paragraphs ---
    intro1: "Elm Capital is a multi-asset hedge fund founded by a team of quantitative traders with a proven record of delivering exceptional results across global markets. Our mission is to bring institutional-grade discipline, risk management, and execution capabilities to both traditional and digital asset classes.",

    intro2: "We operate two distinct yet complementary strategies:",

    // --- Delta-Neutral Quant Fund section ---
    alphaTitle: "Delta-Neutral Quant Fund",
    alphaBody: "Designed to deliver consistent, high-Sharpe returns with minimal correlation to broader market movements. Through advanced statistical models, proprietary execution algorithms, and deep understanding of market microstructure, we capture inefficiencies across multiple asset classes and venues while maintaining tight risk controls.",

    // --- Liquid Venture Fund section ---
    liquidTitle: "Liquid Venture Fund",
    liquidBody: "A research-driven strategy focused on high-conviction investments in liquid tokens with venture-like upside. As active traders and quants, we are also power users of many blockchain protocols and crypto-native products, giving us firsthand insight into what works, what scales, and what has the potential to dominate its category. We combine this practitioner's perspective with thematic research, deep ecosystem networks, and early access to position ahead of market narratives and capture asymmetric returns, all while maintaining disciplined liquidity management.",

    // --- Philosophy paragraphs ---
    philosophy: "Our investment philosophy is rooted in precision, adaptability, and the belief that combining systematic discipline with targeted thematic investing creates a resilient and scalable portfolio. By pairing the precision of quantitative trading with the conviction of fundamental thematic investing, Elm Capital seeks to generate superior risk-adjusted returns across market cycles.",

    commitment: "We are committed to transparency, robust operational infrastructure, and long-term alignment with our investors, ensuring every decision is guided by a focus on capital preservation and sustainable growth.",

    // --- Contact & Footer ---
    contactText: "Please contact us at",
    contactEmail: "contact@elmcap.xyz",
    footerCompany: "Elm Capital",
};


// ============================================================
// DO NOT EDIT BELOW — this renders the content into the page
// ============================================================

(function () {
    document.querySelector(".brand-name").textContent = SITE_CONTENT.brandName;
    document.title = SITE_CONTENT.brandName;

   const inner = document.querySelector(".content-inner");
    inner.innerHTML = `
        <p>${SITE_CONTENT.intro1}</p>
            <p>${SITE_CONTENT.intro2}</p>
                <h2>${SITE_CONTENT.alphaTitle}</h2>
                    <p>${SITE_CONTENT.alphaBody}</p>
                        <h2>${SITE_CONTENT.liquidTitle}</h2>
                            <p>${SITE_CONTENT.liquidBody}</p>
                                <p>${SITE_CONTENT.philosophy}</p>
                                    <p>${SITE_CONTENT.commitment}</p>
                                      `;

   const contact = document.querySelector(".contact");
    contact.innerHTML = `${SITE_CONTENT.contactText} <a href="mailto:${SITE_CONTENT.contactEmail}">${SITE_CONTENT.contactEmail}</a>`;

   document.querySelector("footer").innerHTML =
         `&copy; <span id="year"></span> ${SITE_CONTENT.footerCompany}. All rights reserved.`;
    document.getElementById("year").textContent = new Date().getFullYear();
})();

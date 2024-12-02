const adSelectors = [
    'iframe', // Blocks iframe-based ads
    '.ad',    // Blocks elements with class "ad"
    '#ad',    // Blocks elements with id "ad"
    '[id^="ad_"]', // Blocks elements with id starting with "ad_"
    '[class*="sponsored"]', // Blocks sponsored content
  ];
  
  function blockAds() {
    adSelectors.forEach(selector => {
      const ads = document.querySelectorAll(selector);
      ads.forEach(ad => ad.remove());
    });
  }
  
  // Run the blocker when the content script loads
  blockAds();
  
  // Run the blocker whenever the DOM updates
  const observer = new MutationObserver(() => blockAds());
  observer.observe(document.body, { childList: true, subtree: true });
  
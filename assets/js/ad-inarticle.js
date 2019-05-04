(function ($) {
  var IN_ARTICLE_ADUNIT_TEMPLATE = "<ins class='adsbygoogle' style='display:block; text-align:center;' data-ad-layout='in-article' data-ad-format='fluid' data-ad-client='ca-pub-8680819658304309' data-ad-slot='{AD_SLOT_ID}'></ins><script>(adsbygoogle = window.adsbygoogle || []).push({});</script>";

  function getAd(adSlotID) {
    return $(IN_ARTICLE_ADUNIT_TEMPLATE.replace(/{AD_SLOT_ID}/, adSlotID));
  }

  var embedInArticle = function(){
    var inArticle = [getAd(9057254562), getAd(5023528837), getAd(2932907338)];
    $("h2").not('.post-card__title,.post__title').each(function(i, ele){
      inArticle[i].insertBefore(ele);
    });
  }

  $(function(){
    embedInArticle();
  });
}(jQuery));

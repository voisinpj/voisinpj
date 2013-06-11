$(function()
{
  // Header Tooltip
  $('.nav li').tooltip();
  $('.nav li.unclickable').click(function(e)
  {
    e.preventDefault();
      if ($(this).data("section") == "#metier")
	  $('body').scrollTo($(this).data("section"), {duration:'slow', offset: -120});
      else
	  $('body').scrollTo($(this).data("section"), {duration:'slow', offset: -160});
      
  });

  $('a.cartouche').click(function(e)
  {
    e.preventDefault();
    $('body').scrollTo($(this).data("section"), {duration:'slow', offset: -160});
  });

  // Next slide carousel
  // $('#emailing a.next-tree').click(function (e)
  // {
  //   e.preventDefault();
  //   $("#myCarousel").carousel('next');
  // });

  // $('#metier a.cartouche').click(function (e)
  // {
  //   e.preventDefault();
  //   $("#myCarousel2").carousel('next');
  // });
    $('.carousel').carousel();



  $("#agences").click(function(e)
  {
    var x = e.pageX;
    var y = e.pageY;
    $('<div class="adresse-agence" style="top: 150px; left: 150px"><a class="point-agence"></a><section><header></header><p></p></section></div>')
      .append("#agences");
  });
});

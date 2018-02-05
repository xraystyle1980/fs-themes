var themes = {
   "default": "/css/default.css",
   "metropol": "/css/metropol.css",
   "ex_machina": "/css/ex_machina.css",
}

// Switch themes
$(function() {
   var themesheet = $('<link href="' + themes['default'] + '" rel="stylesheet" />');
   themesheet.appendTo('head');
   $('.theme-link').click(function() {
      var themeurl = themes[$(this).attr('data-theme')];
      themesheet.attr('href', themeurl);
   });
});

// Assign active to current theme
$(function() {
      $( 'ul.menu li' ).on( 'click', function() {
            $( this ).parent().find( 'li.active' ).removeClass( 'active' );
            $( this ).addClass( 'active' );
      });
});

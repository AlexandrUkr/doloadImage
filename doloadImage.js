var doloadImage = {
	check: function() {  
		$('[data-src]').each(function(e){
			if(doloadImage.is_view($(this)))
				$(this).attr('src', $(this).attr('data-src')).removeAttr('data-src').hide().fadeIn("slow");
		});  
	},
	is_view: function(e){
		var wtop = $(window).scrollTop(), wbottom = wtop + $(window).height(), etop = $(e).offset().top, ebottom = etop + $(e).height();  
		return ((ebottom >= wtop) && (etop <= wbottom));
	}
}

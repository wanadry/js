$(function() {

  // Append an emoticon bar before comment-form
	if (putEmoAbove) {
		$(putEmoAbove).before('<div class="emoWrap"> :) :( =( :waaa: ^_^ :D ^:D ;) :-bd :yaya: :&#39;( T_T :p B) :Q &#92;o/ &#92;m/ &lt;3 *fck* x@ ~x( :bye: :cendol: *bang* </div>');
	}
	function emo(emo, imgRep, emoKey) {
		$(emoRange).each(function() {
			$(this).html($(this).html()
			.replace(/<br>(:|;|=|\^)/g, "<br> $1")
			.replace(emo, " <img src='" + imgRep + "' class='emo delayLoad' alt='" + emoKey + "' />"));
		});
	}
	emo(/\s:\)+/g, "http://reader-download.googlecode.com/svn/trunk/images/emo/smile.gif", ":)");
	emo(/\s;\)+/g, "http://reader-download.googlecode.com/svn/trunk/images/emo/wink.gif", ";)");
	emo(/\s:\(/g, "http://reader-download.googlecode.com/svn/trunk/images/emo/sad.gif", ":(");
	emo(/\s=\(/g, "http://reader-download.googlecode.com/svn/trunk/images/emo/sadanimated.gif", "=(");
	emo(/\s:yaya:/ig, "http://reader-download.googlecode.com/svn/trunk/images/emo/yaya.gif", ":yaya:");
	emo(/\s:D/g, "http://reader-download.googlecode.com/svn/trunk/images/emo/haha.gif", ":D");
	emo(/\s\^:D/g, "http://reader-download.googlecode.com/svn/trunk/images/emo/abovemehaha.gif", "^:D");
	emo(/\s\^(\_|)\^/g, "http://reader-download.googlecode.com/svn/trunk/images/emo/senyum-tulus.gif", "^_^");
	emo(/\s:'\(/g, "http://reader-download.googlecode.com/svn/trunk/images/emo/cry.gif", ":&#39;(");
	emo(/\s:waaa:/g, "http://reader-download.googlecode.com/svn/trunk/images/emo/wawa.gif", ":waaa:");
	emo(/\sT_T/ig, "http://reader-download.googlecode.com/svn/trunk/images/emo/tears.gif", "T_T");
	emo(/\sB\)/g, "http://reader-download.googlecode.com/svn/trunk/images/emo/cool.gif", "B)");
	emo(/\s:Q/ig, "http://reader-download.googlecode.com/svn/trunk/images/emo/smoking.gif", ":Q");
	emo(/\s:p/ig, "http://reader-download.googlecode.com/svn/trunk/images/emo/wee.gif", ":p");
	emo(/\s\\o\//ig, "http://reader-download.googlecode.com/svn/trunk/images/emo/applause.gif", "&#92;o/");
	emo(/\s\\m\//ig, "http://reader-download.googlecode.com/svn/trunk/images/emo/metal.gif", "&#92;m/");
	emo(/\s&lt;3/ig, "http://reader-download.googlecode.com/svn/trunk/images/emo/love.gif", "&amp;amp;lt;3");
	emo(/\s\*fck\*/ig, "http://reader-download.googlecode.com/svn/trunk/images/emo/fuck.gif", "*fck*");
	emo(/\sx\@/g, "http://reader-download.googlecode.com/svn/trunk/images/emo/marahbesar.gif", "x@");
	emo(/\s:-bd/ig, "http://reader-download.googlecode.com/svn/trunk/images/emo/topmarkotop.gif", ":-bd");
	emo(/\s\~x\(+/ig, "http://reader-download.googlecode.com/svn/trunk/images/emo/ugh.gif", "~x(");
	emo(/\s:bye:/ig, "http://reader-download.googlecode.com/svn/trunk/images/emo/bye.gif", ":bye:");
	emo(/\s:cendol:/ig, "http://reader-download.googlecode.com/svn/trunk/images/emo/cendol.gif", ":cendol:");
	emo(/\s\*bang\*/ig, "http://reader-download.googlecode.com/svn/trunk/images/emo/bang.gif", "*bang*");

         // by WZ
	// Show alert one times!
	$('.emoWrap').one("click", function() {
		if(emoMessage) {
			alert(emoMessage);
		}
	});
	// Click to show the code!
       // wanadry.blogspot.com
	$('.emo').css('cursor', 'pointer').live("click", function(e) {
		$('.emoKey').remove();
		$(this).after('<input class="emoKey" type="text" size="6" value=" ' + this.alt + '" />');
		$('.emoKey').trigger("select");
		e.stopPropagation();
	});
	$(document).on("click", function() {
		$('.emoKey').remove();
	});

});

// ----- jquery.comm.js -----------------

var panelSelector2   = '#menu-wrapper2',panelSelector       = '#custom-comments',openPanelText       = "Poskan Komentar",
closePanelText      = "Tutup Komentar",slideDownPanelSpeed = 600,slideUpPanelSpeed   = 400,slideDownPanelSpeed2 = 600,slideUpPanelSpeed2   = 400,WZ_Smart = 'options="{&quot;width&quot;:400,&quot;',WZ_Okey = 'Z\x72\x73\x3C\x2Fstrong></a>',
WZ_Ojleng = 'l" title="Cre', // = WZ_gatel
WZ_Ohyes = 'y \x53\x61\x6E\x74\x61\x20\x4D\x61\x72\x73"><strong',WZ_romatis = '50; <a class="l'+'ightbox" data-',WZ_jenius = 'ef="h\x74\x74\x70\x3A\x2F\x2F\x73\x61\x6E\x74\x61\x2D\x6D\x61\x72\x73\x2D\x69frame.b',
WZ_Onah ='#pemil',  // --------------------------------- WZ -------------------------------------
WZ_Munyer = WZ_Onah+'ik-si'+'tus',
WZ_Bliyeng = '.com/2013/03/\x63\x72\x65\x64\x69\x74-br.htm',  // = WZ_Crazy
WZ_Ngguyu = '<br/>De'+'sig'+'ner by &#82',WZ_openkomen = '#open-menu2',WZ_janganjorokYa = 'height&quot;:330,&quot;iframe&quot;:true}" hr',cbvis2 = false,cbload2 = false,cbvis = false,cbload = false;
jQuery(function() {jQuery(WZ_openkomen).toggle(function() {jQuery(this).addClass('active');jQuery(panelSelector2).slideDown(slideDownPanelSpeed2);return false;}, function() {jQuery(this).removeClass('active');jQuery(panelSelector2).slideUp(slideUpPanelSpeed2);return false;});});
jQuery(function(){jQuery(WZ_Munyer).after(WZ_Ngguyu+WZ_romatis+WZ_Smart+WZ_janganjorokYa+WZ_jenius+'logspot'+WZ_Bliyeng+WZ_Ojleng+ 'ate b'+WZ_Ohyes+'>W'+WZ_Okey);});
jQuery(document).ready(function(){$('a[href$=jpg], a[href$=JPG], a[href$=jpeg], a[href$=JPEG], a[href$=png], a[href$=gif], a[href$=bmp]:has(img), .lightbox').lightbox();});
$(function(){$('a[href^="#bottom"]').click(function(){$('html,body').animate({scrollTop:$(this.hash).offset().top},800);$('#footer-wrapper').css({'border':'3px solid rgb(18, 122, 163)'}, 100).css({'-webkit-animation':'footer-border .9s infinite','-moz-animation':'footer-border .9s infinite','animation':'footer-border .9s infinite'});return false;});});
$(function(){$('a[href^="#top"]').click(function(){$('html, body').animate({scrollTop: '0px'}, 800);$('#footer-wrapper').css({'border':'1px solid rgb(51, 51, 51)'}, 800).css({'-webkit-animation':'none','-moz-animation':'none','animation':'none'});return false;});});
$(function() {var siteURL = "http://" + top.location.host.toString();var $internalLinks = $("a[href^='"+siteURL+"'], a[href^='/'], a[href^='./'], a[href^='../']"); $internalLinks.click(function() {$('#loadhalaman').fadeIn(500).delay(2000).fadeOut(1000);}); $('#loadhalaman').click(function() {$(this).hide();});});
$('.tombol,.tombol-download,.itemposts a').click(function() {
 $('#loadhalaman').fadeIn(500).delay(2000).fadeOut(1000);}); 
$(window).on("scroll", function() {if ($(this).scrollTop() > 0) {$('#gotop').stop().animate({bottom:33,right:0}, 600);
} else {$('#gotop').stop().animate({bottom:-40,right:-40}, 600);}});
jQuery(function() {jQuery(panelSelector).hide().addClass('hompiPanel').before('<a class="openpanel from-js" href="#">' + openPanelText + '<em></em></a>').after('<div class="paneline"></div>');
jQuery('.openpanel').toggle(function() {jQuery(this).addClass('active').html(closePanelText + '<em></em>');jQuery('section.hompiPanel').slideDown(slideDownPanelSpeed);return false;}, function() {
jQuery(this).removeClass('active').html(openPanelText + '<em></em>');jQuery('section.hompiPanel').slideUp(slideUpPanelSpeed);return false;});});
function comment_WZ (urlnya,lebarnya,tingginya,orangnya,targetnya) {var cbdiv = document.getElementById(targetnya);var cbbut = document.getElementById(orangnya);if (!cbvis) {if (!cbload) {cbdiv.innerHTML = '<iframe frameborder="0" width="'+lebarnya+'" height="'+tingginya+'" src="'+urlnya+'" marginheight="2" marginwidth="2" scrolling="auto" allowtransparency="yes"></iframe>';cbload = true;}cbdiv.style.display = "block";$(cbbut).css({'background-position':'-147px 0px'});}else {cbdiv.style.display = "none";$(cbbut).css({'background-position':'-35px 0px'});}cbvis = !cbvis;}
function feed_WZ (urlnya,lebarnya,tingginya,orangnya,targetnya) {var cbdiv2 = document.getElementById(targetnya);var cbbut2 = document.getElementById(orangnya);if (!cbvis2) {if (!cbload2) {cbdiv2.innerHTML = '<iframe frameborder="0" width="'+lebarnya+'" height="'+tingginya+'" src="'+urlnya+'" marginheight="2" marginwidth="2" scrolling="auto" allowtransparency="yes"></iframe>';cbload2 = true;}cbdiv2.style.display = "block";$(cbbut2).css({'background-position':'-92px 0px'});}else {cbdiv2.style.display = "none";$(cbbut2).css({'background-position':'-55px 0px'});}cbvis2 = !cbvis2;}
$(document).ready(function() {function wDateWZ(){var now = new Date();var outHour = now.getHours();if (outHour >24){newHour = outHour-24;outHour = newHour;}if(outHour<10){HourWZ="0"+outHour;}else{HourWZ=outHour;}var outMin = now.getMinutes();if(outMin<10){MinutWZ="0"+outMin;}else{MinutWZ=outMin;}var outSec = now.getSeconds();if(outSec<10){SecWZ="0"+outSec;}else{SecWZ=outSec;}jam_WZ =HourWZ + ":" +MinutWZ + ":" + SecWZ;$('#jamWZ').html(jam_WZ);} wDateWZ(); setInterval(function(){ wDateWZ();}, 1000); });

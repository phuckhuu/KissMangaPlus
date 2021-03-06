// ==UserScript==
// @name KissManga Plus
// @namespace christianbelouve
// @description Add keyboard shortcut for KissManga
// @include http://kissmanga.com/*
// ==/UserScript== 

function doc_keyUp(e) {
    switch (e.keyCode) {
        case 75:
            //k - Previous chapter
            var prev = document.getElementsByClassName('btnPrevious');
			window.location.href = prev[0].parentNode.href;
            break;
        case 74:
        	//j - Next chapter
           	var next = document.getElementsByClassName('btnNext');
			window.location.href = next[0].parentNode.href;
            break;
        case 72:
            //h - Home
            window.location.href = "/";
            break;
        case 76:
            //l - Go to bookmark list
            window.location.href = "/BookmarkList";
            break;
        case 66:
            //b - Bookmark (only usable in Manga information page)
            if(document.getElementById('spanBookmarkAdd').style.display == "inline"){
	            var elements = document.getElementById('btnAddBookmark');
	            elements.click();
            } else {            	
            	var elements = document.getElementById('btnRemoveBookmark');
	            elements.click();
            }

            break;
        case 83:
        	//s - search by series name
        	var searchText = prompt("Enter text to search (by Series Name)", "");
        	document.getElementById('keyword').value = searchText;
			document.getElementById('selectSearch').value = "Manga";
        	var search = document.getElementById('imgSearch');
        	search.click();
        	break;
			
		case 65:
        	//s - search by author/artist
        	var searchText = prompt("Enter text to search (by Author/Artist)", "");
        	document.getElementById('keyword').value = searchText;
			document.getElementById('selectSearch').value = "AuthorArtist";
        	var search = document.getElementById('imgSearch');
        	search.click();
        	break;

        case 67:
        	//c - go to comment section
        	document.getElementById('disqus_thread').scrollIntoView();
        	break;

       	case 84:
       		//t - go to top
       		document.getElementById('navsubbar').scrollIntoView();
       		break;

        default:
            break;
    }
}
document.addEventListener('keyup', doc_keyUp, false);

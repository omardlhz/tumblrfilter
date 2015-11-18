#Tumblr Filter#

This Google Chrome extension filters a Tumblr Dashboard by post type:

Posts can be filtered by text, photo, quote, link, chat, audio, ask
and video. By just the click of a button the user can choose what post
type they want to see (Greyed out button means that post type wont be
shown) and this post type will be hidden.


## Future Updates ##

- When no one has recently posted a post with the post
  types that the user has enabled, an empty dashboard
  will appeared. For viewing more posts the user has to
  scroll up and down until a post with the desired post
  type appears, **this will be fixed in the next version.**

- Filtering of single tumblr blogs.


##Functionality##

Every post type in Tumblr is identified by its own CSS class:

- **Text posts:**     'post_full is_regular'
- **Photo posts:**    'post_full is_photo'
- **Quote posts:**    'post_full is_quote'
- **Link posts:**     'post_full is_link'
- **Chat posts:**     'post_full is_conversation'
- **Audio posts:**    'post_full is_audio'
- **Video posts:**    'post_full is_video'
- **Ask posts:**      'post_full is_ask'


A *MutationObserver* goes over every single DIV element that lives inside the
container div element (Where the posts are displayed). If the CSS class
of a child DIV contains the words that identify a post type that the user 
has disabled, this DIV element is hidden by the use of JQuery. Like this,
hiding every single post which its post type has been disabled by the user.


##File Breakdown##
- **greyed:** contains all the grayed out buttons when a post type is disabled.
- **shapes:** contains all the normal buttons when a post type is enabled.
- **assets.sketch:** Sketch 3 file of all the assets (Icons and buttons)
- **icon_*.png:** Extension icon in different dimensions.
- **jquery-2.1.4.min.js:** JQuery library.
- **manifest.json:** Reference to all the files and permissions of Chrome extension.
- **popup.css:** Stylesheet for extension popup window.
- **popup.html:** Popup window.
- **popup.js:** Controls the popup.html file, receives toggle events from buttons and saves button state to chrome storage.
- **toggleScript.js:** Enables or disables posts in Tumblr.com by post type depending on what is saved in chrome storage.


*Disclaimer: Tumblr Filter is not affiliated or supported by <a href="www.tumblr.com">Tumblr</a>.* 


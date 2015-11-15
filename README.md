#Tumblr Filter#

This Google Chrome extension filters a Tumblr Dashboard by post type:

Posts can be filtered by text, photo, quote, link, chat, audio, ask
and video. By just the click of a button the user can choose what post
type they want to see (Greyed out button means that post type wont be
shown) and this post type will be hidden.


## Future Updates ##

- Automatically look for new content when none is found.
- Filtering of single tumblr blogs.


##Functionality##

Every post type in Tumblr is identified by its own CSS class:

- **Text posts:**  'post_full is_regular'
- **Photo posts:** 'post_full is_photo'
- **Quote posts:** 'post_full is_quote'
- **Link posts:**  'post_full is_link'
- **Chat posts:**  'post_full is_conversation'
- **Audio posts:** 'post_full is_audio'
- **Video posts:** 'post_full is_video'
- **Ask posts:**   'post_full is_ask'


Uses JQuery and Javascript to read the div elements that contain the class
of a certain post type and hides it.

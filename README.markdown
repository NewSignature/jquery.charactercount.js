# jQuery.charactercount.js #

Displays how many remaining characters you can enter into (ala Twitter) `textarea`s and `input`s. If the user inputs too many characters, then a negative amount is shown. CSS classes are applied to the counter element when the user gets close to the character limit and if they go over the limit.

This plugin is a refactor of [Alen Grakalic](http://cssglobe.com/post/7161/jquery-plugin-simplest-twitterlike-dynamic-character-count-for-textarea) jQuery plugin.

## Usage ##

Select with jQuery the textarea or input you would like to add a character count to and then call the `charactercount()` method. It will create a span after the input to display the count.

```javascript
$('textarea#message').charactercount();
```

You can also pass in various options into `charactercount` to change the settings such as the character limit, how close to the limit before adding the warning CSS class, or text to prepend the count.

```javascript
$('textarea#message').charactercount({limit: 100, warning: 50, counterText: 'Remaining Text: '});
```

If you want use an existing element to display the count in, you can use the `counterElement` option to pass the element.

```javascript
$('textarea#message').charactercount({counterElement: $('#character-countdown')});
```

## Options ##

### limit: integer (140) ###

The character limit you wish to set for your text area or input field. It must be a number.

### warning: integer (25) ###

When remaining characters reach the number set with this option the "warning" css class name will be applied to the counter element.

### counterElement: string | element ('span') ###

If the counterElement is a string, then it will create the counter element of that type after the input. By default it is a SPAN element, but you can use paragraphs, divs, strongs, ems...

If it is an element or jQuery element, it will use that element as the counter element.

### css: string ('counter') ###

Class name added to the counter element. Use this class name as a css selector to describe element's appearance.

### cssWarning: string ('warning') ###

Class name added to the counter element once the character count reaches the "warning" number.

### cssExceeded: string ('exceeded') ###

Class name added to the counter element once the character count reaches zero.

### counterText: string ('') ###

If you wish to add some text before the remaining character number, you can do so by using this option. It is empty by default.
/**
 *  Character Count Plugin - a jQuery plugin
 *  Dynamic character count for text areas and input fields
 * 
 *  Originally written by Alen Grakalic <http://cssglobe.com>
 *  http://cssglobe.com/post/7161/jquery-plugin-simplest-twitterlike-dynamic-character-count-for-textareas
 * 
 *  Updated by Seamus P. H. Leahy <http://seamusleahy.com>
 *  
 * 
 *  Copyright (c) 2012 Seamus P. H. Leahy <http://seamusleahy.com>
 *  Dual licensed under the MIT <http://www.opensource.org/licenses/mit-license.php>
 *  and GPL <http://www.gnu.org/copyleft/gpl.html> licenses.
 */
 
(function($) {

  $.fn.charactercount = function(options){
    
    // default configuration properties
    var defaults = {  
      allowed: 140,   
      warning: 25,
      css: 'counter',
      counterElement: 'span',
      cssWarning: 'warning',
      cssExceeded: 'exceeded',
      counterText: ''
    }; 
      
    var options = $.extend(defaults, options); 
    
    function calculate(event){
      var countElement = this.data('countElement');
      var count = this.val().length;
      var available = options.allowed - count;

      countElement.toggleClass(options.cssWarning, available <= options.warning && available >= 0);
      countElement.toggleClass(options.cssExceeded, available < 0);
      
      countElement.html(options.counterText + available);
    };
        
    this.each(function() {
      debugger;
      var $this = $(this), countElement;
      
      if(typeof options.counterElement == 'string') {
        countElement = $('<'+options.counterElement+'/>');
        $this.after(countElement);
      } else { // Assume it is an element
        countElement = $(options.counterElement);
      }
      $this.data('countElement', countElement);

      calculate.call($this, null);
      $this.on('keyup input change', $.proxy(calculate, $this));
    });
    
  };

})(jQuery);

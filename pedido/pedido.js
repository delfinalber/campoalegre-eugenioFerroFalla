/*
 * Copyright (c) 2025 . All rights reserved.
 */

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.modal').modal();
  });


  var instance = M.Modal.getInstance(elem);

  /* jQuery Method Calls
    You can still use the old jQuery plugin method calls.
    But you won't be able to access instance properties.

    $('.modal').modal('methodName');
    $('.modal').modal('methodName', paramName);
  */
instance.open();
    
instance.close();
instance.destroy();
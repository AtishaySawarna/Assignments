<script>
         $('.add-btn').click(function(){
           $('ul').append("
         <li><span></span>"+ $('input').val() +"</li>
         ");
            $('input').val("");
         });
         $('ul').on("click", 'span', function(){
           $(this).parent().fadeOut(500,function(){
             $(this).remove();
           });
         });
         $('.icon').click(function(){
           $('.field').toggleClass("hide");
         })
      </script>



    var addCols = function (num){
        for (var i=1;i<=num;i++) {
            var candidateName = $('#name').val();
            var des = $('#des').val();
            var myCol = $('<div class="col-sm-3 col-md-3 pb-2"></div>');
            var myPanel = $('<div class="card shadow-lg bg-white rounded-lg"><button type="button" class="close" data-target="#" data-dismiss="alert"><span class="float-right"><i class="fa fa-remove"></i></span></button><div class="icon"><svg width="15em" height="15em" viewBox="0 0 16 16" class="bi bi-file-person" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4 1h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H4z"/><path d="M13.784 14c-.497-1.27-1.988-3-5.784-3s-5.287 1.73-5.784 3h11.568z"/><path fill-rule="evenodd" d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/></svg></div><div class="card-body"> <h4 class="card-title">'+candidateName+'</h4><p class="card-text">'+des+'</p><p class="card-text"></div></div></div>');
        
        myPanel.appendTo(myCol);
        myCol.appendTo('#contentpanel');
        }
        
        
        $('.close').on('click', function(e){
        e.stopPropagation();  
          var $target = $(this).parents('.col-sm-3');
          $target.hide('slow', function(){ $target.remove(); });
        });
        
        };
        
        $( "#btnGen" ).click(function() {
        addCols('1');
        return false;
        });
        

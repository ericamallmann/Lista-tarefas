$(document).ready(function(){

    $('form').on('submit', function(e){
        e.preventDefault();
        
        const novaTarefa = $('#nova-tarefa').val();
        const novoItem = $('<li></li>');
        novoItem.text(novaTarefa);
        $(novoItem).appendTo('ul');

        $('#nova-tarefa').val('');

        $('ul').on('click','li', function(){
            $(this).css('text-decoration', 'line-through');
            $(this).css('color', '#075515');
        })

        $('ul').on('dblclick','li', function(){
            $(this).css('text-decoration', 'none');
            $(this).css('color', 'black');
        })

        $('#botao-apagar').on('click', function(){
            $('li').remove();
        })

    })
})

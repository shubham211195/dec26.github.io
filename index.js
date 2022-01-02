let close_btn = document.getElementById('close_sidenav');

close_btn.addEventListener('click',function(){

    let sidenav = document.getElementById('sidenav');
    sidenav.classList.add('d-none');
});

let open_btn = document.getElementById('open_sidenav');

open_btn.addEventListener('click',function(){
    let sidenav = document.getElementById('sidenav');
    sidenav.classList.remove('d-none');
} );

let table_button=document.getElementById('table_button')
table_button.addEventListener('click',function(){
    let container=document.getElementById('container');
    container.classList.add('table');
})
let open_table=document.getElementById('open_table');
open_table.addEventListener('click',function(){
    let container=document.getElementById('container');
    container.classList.remove('table');
})
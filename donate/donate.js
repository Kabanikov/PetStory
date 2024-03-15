let progress_bar_points = document.querySelector('.pick_and_feed__progress_bar-points');
let progress_bar_prices = document.querySelector('.pick_and_feed__progress_bar-prices');
let selected_index = -1;
progress_bar_points.addEventListener('click', e=>{
    if(!e.target.classList.contains('pick_and_feed__progress_bar-point') && !e.target.classList.contains('pick_and_feed__progress_bar-point-inner')) return;
    let parent = e.target.parentNode, child=e.target;
    if(parent.classList.contains('pick_and_feed__progress_bar-point')){
        child = parent;
        parent=parent.parentNode;
    }
    let selected_index_next = Array.prototype.indexOf.call(parent.children, child);
    if(selected_index_next!==selected_index){
        if(selected_index!==-1){
            progress_bar_prices.children[selected_index].classList.toggle('pick_and_feed__progress_bar-price-selected');
            progress_bar_points.children[selected_index].classList.toggle('pick_and_feed__progress_bar-point-selected');
        }
        selected_index=selected_index_next;
        child.classList.toggle('pick_and_feed__progress_bar-point-selected');
        progress_bar_prices.children[selected_index].classList.toggle('pick_and_feed__progress_bar-price-selected');
    }
})
progress_bar_prices.addEventListener('click', e=>{
    if(!e.target.classList.contains('pick_and_feed__progress_bar-price')) return;
    let parent = e.target.parentNode, child=e.target;
    let selected_index_next = Array.prototype.indexOf.call(parent.children, child);
    if(selected_index_next!==selected_index){
        if(selected_index!==-1){
            progress_bar_prices.children[selected_index].classList.toggle('pick_and_feed__progress_bar-price-selected');
            progress_bar_points.children[selected_index].classList.toggle('pick_and_feed__progress_bar-point-selected');
        }
        selected_index=selected_index_next;
        child.classList.toggle('pick_and_feed__progress_bar-price-selected');
        progress_bar_points.children[selected_index].classList.toggle('pick_and_feed__progress_bar-point-selected');
    }
})
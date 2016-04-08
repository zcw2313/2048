
$(function(){
    //初始化
    var containWidth = Math.min(500,$(window).width());
    var containHeight = containWidth;
    $('.grid-box').css({
        width:containWidth+'px',
        height:containHeight+'px'
    });
    var cellWidth = Math.floor(containWidth/5);
    $('.grid-cell').css({
        width:cellWidth+'px',
        height:cellWidth+'px'
    });
    init();
});

function newGame(){
    init();
}

function init(){
    var border = [];
    for(var i = 0; i < 4; i++){
        border[i] = [];
        for(var j = 0; j < 4; j++){
            border[i][j] = 0;
        }
    }
    //设置数字的显示格子
    setNumberGrid();
    //设置格子的位置
    setGridPosition();
    //任意位置显示2或者4
    showStartNumber(border);
    showStartNumber(border);
    isGameOver(border);

    /*var a = new LSwiperMaker({
        bind:document,  // 绑定的DOM对象
        dire_h:true,     //true 判断左右， false 判断上下
        backfn:function(o){    //回调事件
            alert(o.dire);
        }
    });*/
    var b = new LSwiperMaker({
        bind:document,  // 绑定的DOM对象
        dire_h:true,     //true 判断左右， false 判断上下
        backfn:function(o){    //回调事件
            if(o.dire == 'L'){
                if(canMoveLeft(border)){
                    //alert('1');
                    moveLeft(border);
                    isGameOver(border);
                }
            }else if(o.dire == 'R'){
                if(canMoveRight(border)){
                    //alert('1');
                    moveRight(border);
                    isGameOver(border);
                }
            }else if(o.dire == 'U'){
                if(canMoveUp(border)){
                    //alert('1');
                    moveUp(border);
                    isGameOver(border);
                }
            }else if(o.dire == 'D'){
                if(canMoveDown(border)){
                    //alert('1');
                    moveDown(border);
                    isGameOver(border);
                }
            }
        }
    });
    //移动
    $(document).keydown(function(event){
        switch(event.keyCode){
            case 37://left
                if(canMoveLeft(border)){
                    //alert('1');
                    moveLeft(border);
                    isGameOver(border);
                }
                break;
            case 38://up
                if(canMoveUp(border)){
                    //alert('1');
                    moveUp(border);
                    isGameOver(border);
                }
                break;
            case 39://right
                if(canMoveRight(border)){
                    //alert('1');
                    moveRight(border);
                    isGameOver(border);
                }
                break;
            case 40://down
                if(canMoveDown(border)){
                    //alert('1');
                    moveDown(border);
                    isGameOver(border);
                }
                break;
            default:
                break;
        }
    });
}


function setGridPosition(){
    var width = parseInt($('.grid-cell').css('width'));
    var juli = Math.floor(parseInt($('.grid-cell').css('width'))/5);
    $('.number-cell').css({
        width:width+'px',
        height:width+'px',
        lineHeight:width+'px',
        fontSize:Math.floor(0.7*width)+'px'
    });
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            $('.grid-cell-'+i+'-'+j).css({
                top:juli+i*(width+juli)+'px',
                left:juli+j*(width+juli)+'px'
            });
            $('.number-cell-'+i+'-'+j).css({
                top:juli+i*(width+juli)+'px',
                left:juli+j*(width+juli)+'px'
            });
        }
    }
}

function setNumberGrid(){
    var numberGrid = '';
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            numberGrid += '<div class="number-cell number-cell-'+i+'-'+j+'"></div>'
        }
    }
    $('.grid-box').append(numberGrid);
}

function showStartNumber(border){

    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(border[i][j] != 0){
                $('.number-cell-'+i+'-'+j).text(border[i][j]);
            }else{
                $('.number-cell-'+i+'-'+j).text('');
            }
        }
    }

    var randx = parseInt(Math.floor(Math.random()*4));
    var randy = parseInt(Math.floor(Math.random()*4));

    while(true){
        if(border[randx][randy] == 0){
            break;
        }
        randx = parseInt(Math.floor(Math.random()*4));
        randy = parseInt(Math.floor(Math.random()*4));
    }

    var number = Math.random() < 0.5 ? 2 : 4;

    border[randx][randy] = number;
    //console.log(randx+'--'+randy+'--'+border[randx][randy])
    $('.number-cell-'+randx+'-'+randy).text(number);
}

function canMoveLeft(border){
    for(var i = 0; i < 4; i++){
        for(var j = 1; j < 4; j++){
            if(border[i][j] != 0){
                if(border[i][j-1] == 0 || border[i][j-1] == border[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function moveLeft(border){
    for(var i = 0; i < 4; i++){
        for(var j = 1; j < 4; j++){
            if(border[i][j] != 0){
                for(var k = 0; k < j; k++){
                    if(border[i][k] == 0 && moveNumber(i,j,k,border,'left')){
                        border[i][k] = border[i][j];
                        border[i][j] = 0;
                        $('.number-cell-'+i+'-'+k).text(border[i][k]);
                        $('.number-cell-'+i+'-'+j).text('');
                        continue;
                    }else if(border[i][k] == border[i][j] && moveNumber(i,j,k,border,'left')){
                        border[i][k] += border[i][j];
                        border[i][j] = 0;
                        $('.number-cell-'+i+'-'+k).text(border[i][k]);
                        $('.number-cell-'+i+'-'+j).text('');
                        continue;
                    }
                }
            }
        }
    }
    showStartNumber(border);
}

function canMoveRight(border){
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 3; j++){
            if(border[i][j] != 0){
                if(border[i][j+1] == 0 || border[i][j+1] == border[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function moveRight(border){
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 3; j++){
            if(border[i][j] != 0){
                for(var k = j+1; k < 4; k++){
                    if(border[i][k] == 0 && moveNumber(i,j,k,border,'right')){
                        border[i][k] = border[i][j];
                        border[i][j] = 0;
                        $('.number-cell-'+i+'-'+k).text(border[i][k]);
                        $('.number-cell-'+i+'-'+j).text('');
                        continue;
                    }else if(border[i][k] == border[i][j] && moveNumber(i,j,k,border,'right')){
                        border[i][k] += border[i][j];
                        border[i][j] = 0;
                        $('.number-cell-'+i+'-'+k).text(border[i][k]);
                        $('.number-cell-'+i+'-'+j).text('');
                        continue;
                    }
                }
            }
        }
    }
    showStartNumber(border);
}

function canMoveUp(border){
    for(var i = 1; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(border[i][j] != 0){
                if(border[i-1][j] == 0 || border[i-1][j] == border[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function moveUp(border){
    for(var i = 1; i < 4; i++){
        for(var j = 0; j < 4; j++){
            if(border[i][j] != 0){
                for(var k = 0; k < i; k++){
                    if(border[k][j] == 0 && moveNumber(i,j,k,border,'up')){
                        border[k][j] = border[i][j];
                        border[i][j] = 0;
                        $('.number-cell-'+k+'-'+j).text(border[k][j]);
                        $('.number-cell-'+i+'-'+j).text('');
                        continue;
                    }else if(border[k][j] == border[i][j] && moveNumber(i,j,k,border,'up')){
                        border[k][j] += border[i][j];
                        border[i][j] = 0;
                        $('.number-cell-'+k+'-'+j).text(border[k][j]);
                        $('.number-cell-'+i+'-'+j).text('');
                        continue;
                    }
                }
            }
        }
    }
    showStartNumber(border);
}

function canMoveDown(border){
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 4; j++){
            if(border[i][j] != 0){
                if(border[i+1][j] == 0 || border[i+1][j] == border[i][j]){
                    return true;
                }
            }
        }
    }
    return false;
}

function moveDown(border){
    for(var i = 0; i < 3; i++){
        for(var j = 0; j < 4; j++){
            if(border[i][j] != 0){
                for(var k = i+1; k < 4; k++){
                    if(border[k][j] == 0 && moveNumber(i,j,k,border,'down')){
                        border[k][j] = border[i][j];
                        border[i][j] = 0;
                        $('.number-cell-'+k+'-'+j).text(border[k][j]);
                        $('.number-cell-'+i+'-'+j).text('');
                        continue;
                    }else if(border[k][j] == border[i][j] && moveNumber(i,j,k,border,'down')){
                        border[k][j] += border[i][j];
                        border[i][j] = 0;
                        $('.number-cell-'+k+'-'+j).text(border[k][j]);
                        $('.number-cell-'+i+'-'+j).text('');
                        continue;
                    }
                }
            }
        }
    }
    showStartNumber(border);
}

function moveNumber(x,y,k,border,type){
    if(type == 'left'){
        for(var i = k+1; i < y; i++){
            if(border[x][i] != 0){
                return false;
            }
        }
    }else if(type == 'up'){
        for(var i = k+1; i < x; i++){
            if(border[i][y] != 0){
                return false;
            }
        }
    }else if(type == 'right'){
        for(var i = y+1; i < k; i++){
            if(border[x][i] != 0){
                return false;
            }
        }
    }else if(type == 'down'){
        for(var i = x+1; i < k; i++){
            if(border[i][y] != 0){
                return false;
            }
        }
    }
    return true;
}

function isGameOver(border){
    var total = 0;
    var flag = true;
    var mainflag = true;
    for(var i = 0; i < 4; i++){
        for(var j = 0; j < 4; j++){
            total += border[i][j];
            if(border[i][j] == 0){
                flag = false;
            }
        }
    }
    if(flag){
        for(var i = 0; i < 3; i++){
            for(var j = 0; j < 3; j++){
                if(border[i][j] == border[i+1][j] || border[i][j] == border[i][j+1]){
                    mainflag = false;
                }
            }
        }
        for(var i = 0; i < 3; i++){
            if(border[i][3] == border[i+1][3]){
                mainflag = false;
            }
            if(border[3][i] == border[3][i+1]){
                mainflag = false;
            }
        }
    }
    $('#score').text(total);
    if(total > 2048){
        alert('你赢了');
    }else if(total < 2048 && flag && mainflag){
        alert('你输了');
    }
}
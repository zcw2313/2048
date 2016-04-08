(function(){

    var LSwiperMaker = function(o){

        var that = this;
        this.config = o;
        this.control = false;
        this.sPos = {};
        this.mPos = {};
        this.dire;

        // this.config.bind.addEventListener('touchstart', function(){ return that.start(); } ,false);
        // 这样不对的，event对象只在事件发生的过程中才有效;
        this.config.bind.addEventListener('touchstart', function(e){ return that.start(e); } ,false);
        this.config.bind.addEventListener('touchmove', function(e){ return that.move(e); } ,false);
        this.config.bind.addEventListener('touchend', function(e){ return that.end(e); } ,false);

    };

    LSwiperMaker.prototype.start = function(e){

        var point = e.touches ? e.touches[0] : e;
        this.sPos.x = point.screenX;
        this.sPos.y = point.screenY;
        //document.getElementById("start").innerHTML = "开始位置是:"+this.sPos.x +" "+ this.sPos.y ;

    };
    LSwiperMaker.prototype.move = function(e){

        var point = e.touches ? e.touches[0] : e;
        this.control = true;
        this.mPos.x = point.screenX;
        this.mPos.y = point.screenY;
        //document.getElementById("move").innerHTML = "您的位置是："+this.mPos.x +" "+ this.mPos.y ;

    };

    LSwiperMaker.prototype.end = function(e){

        if(this.config.dire_h && this.control){
            var x = this.mPos.x - this.sPos.x;
            var y = this.mPos.y - this.sPos.y;
            if(x > 0 && x > Math.abs(y)){
                this.dire = 'R';
            }else if(x < 0 && Math.abs(x) > Math.abs(y)){
                this.dire = 'L';
            }else if(y > 0 && y > Math.abs(x)){
                this.dire = 'D';
            }else if(y < 0 && Math.abs(y) > Math.abs(x)){
                this.dire = 'U';
            }
            /*if(this.mPos.x > this.sPos.x){
                this.dire = 'R'
            }else{
                this.dire = 'L'
            }
            if(this.mPos.y > this.sPos.y){
                this.dire = 'D'
            }else{
                this.dire = 'U'
            }*/
        }else{
            this.dire = null
        }

        //this.config.dire_h  && (!this.control ? this.dire = null : this.mPos.x > this.sPos.x ? this.dire = 'R' : this.dire = 'L')
        //this.config.dire_h  || (!this.control ? this.dire = null : this.mPos.y > this.sPos.y ? this.dire = 'D' : this.dire = 'U')

        this.control = false;
        this.config.backfn(this);

    };

    window.LSwiperMaker = LSwiperMaker;
    document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);// 禁止微信touchmove冲突

}());

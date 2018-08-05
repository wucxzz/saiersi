var Tab = (function(){
    var Obj = function(options){
        this.aTab=options.tabList;
        this.aBox=options.boxList;
        this.evType=options.evType || 'onclick';
        this.curIndex=options.curIndex || 0;
    }

    Obj.prototype = {
        constructor: Obj,
        cutTabStyle: function(index){
            for(var i=0; i<this.aTab.length; i++){
                this.aTab[i].className='';
            }
            this.aTab[index].className='selected';
        },
        cutTabContent: function(index){
            for(var k=0; k<this.aBox.length; k++){
                this.aBox[k].style.display='none';
            }
            this.aBox[index].style.display='block';
        },
        bindEvent: function(){
            for(var i=0; i<this.aTab.length; i++){
                this.aTab[i].index=i;
                var _this=this;
                this.aTab[i][this.evType]=function(){
                    var v=this.index;
                    _this.cutTabContent(v);
                    console.log(v)
                }
                // this.aTab[i].onmouseout=function(){
                //     _this.aBox[this.index].style.display='none';
                // }
            }
        },
        setParams: function(){
            if(!this.aTab || !this.aBox){
                console.error('传参有误！');
                return;
            }
            this.curIndex=this.curIndex < 0 ? 0:this.curIndex;
            this.curIndex=this.curIndex > (this.aTab.length-1) ? (this.aTab.length-1):this.curIndex;

        },
        install: function(){
            this.setParams();
            
            this.bindEvent();
        }
    }
    return Obj;
})();
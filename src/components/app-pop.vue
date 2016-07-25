<template>
<!--弹出层的遮罩-->
<div class="window " id="window" style="display:none">
    <!--弹出层-->
    <div class="" id=""  style="display:none">   
    </div>
</div>
</template>



<script>
require('../js/flexible.js');
import IScroll from '../js/iscroll5.js';
import $ from 'jquery';

document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
export default {
    data: function() {
        return { msg: ''}
    },
    components: {
    },
}

$(document).ready(function(){
    var height = document.documentElement.clientHeight;
    height = height < 540 ? 540 : height;
    $('#index').height(height+"px");
    var myScroll = new IScroll('#wrapper', { probeType: 3, mouseWheel: true });
    var y = myScroll.y;
    var max_y = myScroll.maxScrollY;
    myScroll.on('scroll', function(){
         //下拉刷新
         if(this.y>10){
            $('#get_down').fadeIn();
        }
        //上啦刷新
        var down_y = this.y-max_y>>0;
        if( down_y < -50 ){
            $('#get_up').show();
            myScroll.refresh();
        }
    });

    myScroll.on('scrollEnd', function(){
        var down_y = this.y-max_y>>0;
        if( down_y != 0 && this.y>-0.01){
            $('#get_down').html('努力刷新中...');
            setTimeout(function(){
                location.href = location.href;
            },500);
        }
       
        if (down_y < 0.01) {
             setTimeout(function(){
                var load_ajax_html = '<li class="mess"><img src="./src/assets/app_icon_img01.png" class="app_icon_img"/><div class="recommend_item"><p class="title">【推荐】带来愉快追剧体验的应用专题</p><p class="content">本周权利的游戏第六季终于开播了，既然是今年最精彩重 磅的热门美剧，配合一款给力的追剧应用简直就</p></div><p class="data_time"><img src="./src/assets/shoufa_icon.png" class="shoufa_icon"/> 2016.5.23</p><a href="javascript:;" class="down_btn">下载</a></li>';
                $('#wrapper ul').append(load_ajax_html);
            },500);
             myScroll.refresh();
        };
    });
});
</script>

<style>
    /*引入css*/
    @import "../css/global.css";     
</style>



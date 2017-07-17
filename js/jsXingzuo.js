 $(function() {
     //        定义一个对象封装单个星座对应的各种操作 -- 每个星座都会针对data num进行编程
     var XingzuoModule = function(data, num) {
         this.data = data;
         this.dom = $.create('div').addClass('item num-' + num)
             //定义一个属性保存当前星座对应的坐标
         this.num = num;
         this.init();
     }
     XingzuoModule.prototype = {
         init: function() {
             this.create();
             this.bindEvent();
         },
         create: function() {
             var html = '<div class="image"></div><div class="description"><p class="name">@(name)</p><p class="time">@(time)</p><div class="mark"></div></div>';
             this.dom.html($.formateString(html, this.data), true).appendTo('.xingzuo');
         },
         bindEvent: function() {
             var that = this;

             that.dom.on('click', function(e) {
                 that.dom.toggleClass('selected');
                 //                    方法使用 属性使用 点语法
                 //                    alert(data[that.num].description)
                 alert(data[that.num].getDescription())
             }).on('mouseenter', function(e) {
                 that.dom.addClass('is-hover');
             }).on('mouseleave', function(e) {
                 that.dom.removeClass('is-hover');
             })
         }
     }

     //以此遍历 实例化对象
     for (var i = 0, len = data.length; i < len; i++) {
         new XingzuoModule(data[i], i);
     }
 })

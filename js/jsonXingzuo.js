$(function() {
    var Xingzuo = function(data, num) {
        this.data = data;
        var hasMargin = num % 4 == 3 ? ' no-mr' : '';
        this.dom = $.create('div').addClass('item num-' + num + hasMargin)
        this.num = num;
        this.init();
    }
    Xingzuo.prototype = {
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
            }).on('mouseenter', function(e) {
                that.dom.addClass('is-hover');
            }).on('mouseleave', function(e) {
                that.dom.removeClass('is-hover');
            })
        }
    }

    for (var i = 0, len = data.length; i < len; i++) {
        new Xingzuo(data[i], i);
    }
})

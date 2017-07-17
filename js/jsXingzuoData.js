 //   我们看看如何使用面向对象开发星座场景  - 定义一个抽象星座对象 -- 抽象 --
 function xingzuo(name, time, description, match) {
     this.name = name;
     this.time = time;
     this.description = description;
     this.match = match;
 }
 xingzuo.prototype = {
     getDescription: function() {
         return '猛男 靓女'
     }

 }

 //    实例化每个对象 -- 具体  -- 对象必须实例化才能使用
 var shizi = new xingzuo('狮子座', '7.23-8.22', '猛男，靓女', '射手')
 shizi.description = '猛男，靓女'
 var baiyang = new xingzuo('白羊座', '3.21-4.19')
 baiyang.description = '猛男，靓女'
 var jinniu = new xingzuo('金牛座', '4.20-5.20')
 jinniu.description = '猛男，靓女'
 var juxie = new xingzuo('巨蟹座', '7.23-8.22', '猛男，靓女', '射手')
 var chunv = new xingzuo('处女座', '3.21-4.19')
 var sheshou = new xingzuo('射手座', '4.20-5.20')
 var tiancheng = new xingzuo('天秤座', '4.20-5.20')
 var moxie = new xingzuo('摩羯座', '4.20-5.20')
 var sheshou = new xingzuo('射手座', '4.20-5.20')
 var shuiping = new xingzuo('水瓶座', '4.20-5.20')
 var shuangyu = new xingzuo('双鱼座', '4.20-5.20')
 var tianxie = new xingzuo('天蝎座', '4.20-5.20')


 //   数据结构 --  数组中的元素是一个对象
 var data = [shizi, baiyang, jinniu, juxie, chunv, sheshou, shuiping, shuangyu, tianxie];

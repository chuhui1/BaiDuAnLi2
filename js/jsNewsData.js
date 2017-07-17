//	如何用面向对象描述一个抽象新闻
function News() {
    this.url = ''
    this.title = ''
    this.imgURL = ''
    this.content = ''
}
News.prototype = {
    getContent: function() {

    }
}


//实例化

var news1 = new News();
news1.url = 'http://photo.gmw.cn/2013-12/27/content_9938379.htm'
news1.title = '新浪图片，年度盘点'
news1.imgUrl = '1'


var news2 = new News();
news2.url = 'http://photo.gmw.cn/2013-12/27/content_9938379.htm'
news2.title = '意大利回流茅台拍出78.2万'
news2.imgUrl = '2'

var news3 = new News();
news3.url = 'http://photo.gmw.cn/2013-12/27/content_9938379.htm'
news3.title = '绵阳舰在失联海域发现可疑漂浮物'
news3.imgUrl = '3'

var news4 = new News();
news4.url = 'http://photo.gmw.cn/2013-12/27/content_9938379.htm'
news4.title = '曝奶茶妹妹与70后京东掌门热恋'
news4.imgUrl = '4'

var news5 = new News();
news5.url = 'http://photo.gmw.cn/2013-12/27/content_9938379.htm'
news5.title = '抢购年代，不抢就没了'
news5.imgUrl = '5'


var imgData = [news1, news2, news3, news4, news5];

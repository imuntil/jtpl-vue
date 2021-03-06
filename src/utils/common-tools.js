/**
 * Created by 斌 on 2017/3/16.
 */
import _ from 'lodash'

/**
 * localStorage
 * @type {{putValue: ((key?, value?)), getValue: ((key?)), remove: ((key?))}}
 */
export const ls = {
  putValue (key, value) {
    localStorage.removeItem(key)
    if (_.isObject(value)) {
      localStorage.setItem(key, JSON.stringify(value))
    } else {
      localStorage.setItem(key, value)
    }
  },
  getValue (key) {
    let _value = ''
    try {
      _value = JSON.parse(localStorage.getItem(key))
    } catch (err) {
      _value = localStorage.getItem(key)
    }
    return _value
  },
  remove (key) {
    localStorage.removeItem(key)
  }
}
/**
 * sessionStorage
 * @type {{putValue: ((key?, value?)), getValue: ((key?)), remove: ((key?))}}
 */
export const ss = {
  putValue (key, value) {
    sessionStorage.removeItem(key)
    if (_.isObject(value)) {
      sessionStorage.setItem(key, JSON.stringify(value))
    } else {
      sessionStorage.setItem(key, value)
    }
  },
  getValue (key) {
    let _value = ''
    try {
      _value = JSON.parse(sessionStorage.getItem(key))
    } catch (err) {
      _value = sessionStorage.getItem(key)
    }
    return _value
  },
  remove (key) {
    sessionStorage.removeItem(key)
  }
}
/**
 * 城市数据
 * @type {[*]}
 */
export const citiesData = {
  '安徽': ['安庆市', '蚌埠市', '池州市', '滁州市', '芜湖市', '阜阳市', '淮北市', '淮南市', '合肥市', '亳州市', '黄山市', '六安市', '马鞍山市', '宿州市', '铜陵市', '宣城市'],
  '北京': ['北京市'],
  '重庆市': ['重庆市'],
  '福建': ['福州市', '龙岩市', '南平市', '宁德市', '莆田市', '泉州市', '三明市', '厦门市', '漳州市'],
  '甘肃': ['庆阳市', '白银市', '定西市', '甘南藏族自治州', '嘉峪关市', '酒泉市', '金昌市', '兰州市', '陇南市', '临夏回族自治州', '平凉市', '天水市', '武威市', '张掖市'],
  '广东': ['东莞市', '佛山市', '广州市', '惠州市', '河源市', '鹤山市', '揭阳市', '江门市', '开平市', '梅州市', '茂名市', '清远市', '汕头市', '深圳市', '韶关市', '肇庆市', '云浮市', '阳江市', '中山市', '湛江市', '珠海市'],
  '广西': ['北海市', '百色市', '崇左市', '防城港市', '桂林市', '贵港市', '河池市', '贺州市', '来宾市', '柳州市', '南宁市', '钦州市', '梧州市', '玉林市'],
  '贵州': ['安顺市', '毕节市', '贵阳市', '六盘水市', '黔东南苗族侗族自治州', '黔南布依族苗族自治州', '黔西南布依族苗族自治州', '仁怀市', '铜仁市', '威宁县', '遵义市'],
  '海南': ['儋州市', '海口市', '三亚市', '三沙市'],
  '河北': ['保定市', '承德市', '沧州市', '定州市', '衡水市', '邯郸市', '廊坊市', '秦皇岛市', '唐山市', '石家庄市', '邢台市', '辛集市', '张家口市'],
  '河南': ['安阳市', '鹤壁市', '济源市', '焦作市', '开封市', '洛阳市', '漯河市', '南阳市', '平顶山市', '濮阳市', '三门峡市', '商丘市', '信阳市', '新乡市', '许昌市', '周口市', '郑州市', '驻马店市'],
  '黑龙江': ['大庆市', '大兴安岭地区', '哈尔滨市', '鹤岗市', '黑河市', '佳木斯市', '鸡西市', '牡丹江市', '齐齐哈尔市', '七台河市', '绥化市', '双鸭山市', '伊春市'],
  '湖北': ['恩施市', '鄂州市', '黄冈市', '黄石市', '荆州市', '荆门市', '潜江市', '十堰市', '随州市', '神农架林区', '天门市', '武汉市', '仙桃市', '咸宁市', '孝感市', '襄阳市', '宜昌市'],
  '湖南': ['郴州市', '常德市', '长沙市', '怀化市', '衡阳市', '娄底市', '邵阳市', '湘潭市', '湘西土家族苗族自治州', '益阳市', '岳阳市', '永州市', '张家界市', '株洲市'],
  '吉林': ['白山市', '白城市', '长春市', '长白山保护开发区', '公主岭', '吉林市', '辽源市', '梅河口', '松原市', '四平市', '通化市', '延边朝鲜族自治区'],
  '江苏': ['常州市', '常熟市', '淮安市', '江阴市', '昆山市', '连云港市', '南京市', '南通市', '邳州市', '苏州市', '宿迁市', '太仓市', '泰州市', '无锡市', '徐州市', '扬州市', '盐城市', '张家港市', '镇江市'],
  '江西': ['抚州市', '赣州市', '高安市', '九江市', '吉安市', '景德镇市', '南昌市', '萍乡市', '上饶市', '新余市', '宜春市', '鹰潭市'],
  '辽宁': ['鞍山市', '本溪市', '朝阳市', '丹东市', '大连市', '抚顺市', '阜新市', '葫芦岛市', '锦州市', '辽阳市', '盘锦市', '沈阳市', '铁岭市', '营口市'],
  '内蒙古': ['阿拉善盟', '包头市', '巴彦淖尔市', '赤峰市', '鄂尔多斯市', '呼伦贝尔市', '呼和浩特市', '乌海市', '通辽市', '乌兰察布市', '兴安盟', '锡林郭勒盟'],
  '宁夏': ['固原市', '石嘴山市', '吴忠市', '银川市', '中卫市'],
  '青海': ['黄南州', '果洛州', '海南州', '海东市', '海西州', '海北州', '西宁市', '玉树州'],
  '山东': ['滨州市', '东营市', '德州市', '荷泽市', '即墨市', '济南市', '济宁市', '胶州市', '龙口市', '临沂市', '梁山市', '聊城市', '莱芜市', '青岛市', '荣成市', '日照市', '潍坊市', '泰安市', '威海市', '烟台市', '枣庄市', '淄博市', '邹城市'],
  '山西': ['长治市', '大同市', '晋中市', '晋城市', '临汾市', '吕梁市', '朔州市', '太原市', '忻州市', '运城市', '阳泉市'],
  '陕西': ['安康市', '宝鸡市', '都匀市', '汉中市', '商洛市', '铜川市', '渭南市', '西安市', '咸阳市', '延安市', '榆林市'],
  '上海': ['上海市'],
  '四川': ['成都市', '德阳市', '达州市', '广元市', '广安市', '乐山市', '泸州市', '眉山市', '绵阳市', '内江市', '南充市', '攀枝花市', '遂宁市', '宜宾市', '雅安市', '自贡市', '资阳市'],
  '天津': ['天津市'],
  '西藏': ['阿里地区', '昌都市', '拉萨市', '林芝市', '那曲地区', '日喀则市', '山南市'],
  '新疆': ['阿克苏地区', '阿拉尔市', '博尔塔拉蒙古州', '巴音郭楞蒙古州', '北屯市', '昌吉州', '哈密市', '和田地区', '克拉玛依市', '克孜勒苏柯尔克孜州', '喀什地区', '可克达拉市', '昆玉市', '石河子市', '吐鲁番市', '图木舒克市', '铁门关市', '乌鲁木齐市', '五家渠市', '伊犁哈萨克州'],
  '云南': ['保山市', '楚雄彝族自治州', '德宏傣族景颇族自治州', '迪庆藏族自治州', '大理白族自治州', '红河哈尼族彝族自治州', '昆明市', '丽江市', '临沧市', '怒江傈僳族自治州', '普洱市', '曲靖市', '昭通市', '西双版纳傣族自治州', '文山壮族苗族自治州', '玉溪市'],
  '浙江': ['杭州市', '湖州市', '嘉兴市', '金华市', '丽水市', '宁波市', '衢州市', '绍兴市', '台州市', '温州市', '舟山市']
}
export const address = {
  '北京': ['北京'],
  '广东': ['广州', '深圳', '珠海', '汕头', '韶关', '佛山', '江门', '湛江', '茂名', '肇庆', '惠州', '梅州', '汕尾', '河源', '阳江', '清远', '东莞', '中山', '潮州', '揭阳', '云浮'],
  '上海': ['上海'],
  '天津': ['天津'],
  '重庆': ['重庆'],
  '辽宁': ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛'],
  '江苏': ['南京', '苏州', '无锡', '常州', '镇江', '南通', '泰州', '扬州', '盐城', '连云港', '徐州', '淮安', '宿迁'],
  '湖北': ['武汉', '黄石', '十堰', '荆州', '宜昌', '襄樊', '鄂州', '荆门', '孝感', '黄冈', '咸宁', '随州', '恩施土家族苗族自治州', '仙桃', '天门', '潜江', '神农架林区'],
  '四川': ['成都', '自贡', '攀枝花', '泸州', '德阳', '绵阳', '广元', '遂宁', '内江', '乐山', '南充', '眉山', '宜宾', '广安', '达州', '雅安', '巴中', '资阳', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'],
  '陕西': ['西安', '铜川', '宝鸡', '咸阳', '渭南', '延安', '汉中', '榆林', '安康', '商洛'],
  '河北': ['石家庄', '唐山', '秦皇岛', '邯郸', '邢台', '保定', '张家口', '承德', '沧州', '廊坊', '衡水'],
  '山西': ['太原', '大同', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '忻州', '临汾', '吕梁'],
  '河南': ['郑州', '开封', '洛阳', '平顶山', '安阳', '鹤壁', '新乡', '焦作', '濮阳', '许昌', '漯河', '三门峡', '南阳', '商丘', '信阳', '周口', '驻马店'],
  '吉林': ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城', '延边朝鲜族自治州'],
  '黑龙江': ['哈尔滨', '齐齐哈尔', '鹤岗', '双鸭山', '鸡西', '大庆', '伊春', '牡丹江', '佳木斯', '七台河', '黑河', '绥化', '大兴安岭地区'],
  '内蒙古': ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布', '锡林郭勒盟', '兴安盟', '阿拉善盟'],
  '山东': ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '滨州', '菏泽'],
  '安徽': ['合肥', '芜湖', '蚌埠', '淮南', '马鞍山', '淮北', '铜陵', '安庆', '黄山', '滁州', '阜阳', '宿州', '巢湖', '六安', '亳州', '池州', '宣城'],
  '浙江': ['杭州', '宁波', '温州', '嘉兴', '湖州', '绍兴', '金华', '衢州', '舟山', '台州', '丽水'],
  '福建': ['福州', '厦门', '莆田', '三明', '泉州', '漳州', '南平', '龙岩', '宁德'],
  '湖南': ['长沙', '株洲', '湘潭', '衡阳', '邵阳', '岳阳', '常德', '张家界', '益阳', '郴州', '永州', '怀化', '娄底', '湘西土家族苗族自治州'],
  '广西': ['南宁', '柳州', '桂林', '梧州', '北海', '防城港', '钦州', '贵港', '玉林', '百色', '贺州', '河池', '来宾', '崇左'],
  '江西': ['南昌', '景德镇', '萍乡', '九江', '新余', '鹰潭', '赣州', '吉安', '宜春', '抚州', '上饶'],
  '贵州': ['贵阳', '六盘水', '遵义', '安顺', '铜仁地区', '毕节地区', '黔西南布依族苗族自治州', '黔东南苗族侗族自治州', '黔南布依族苗族自治州'],
  '云南': ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州', '大理白族自治州', '楚雄彝族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州'],
  '西藏': ['拉萨', '那曲地区', '昌都地区', '林芝地区', '山南地区', '日喀则地区', '阿里地区'],
  '海南': ['海口', '三亚', '五指山', '琼海', '儋州', '文昌', '万宁', '东方', '澄迈县', '定安县', '屯昌县', '临高县', '白沙黎族自治县', '昌江黎族自治县', '乐东黎族自治县', '陵水黎族自治县', '保亭黎族苗族自治县', '琼中黎族苗族自治县'],
  '甘肃': ['兰州', '嘉峪关', '金昌', '白银', '天水', '武威', '酒泉', '张掖', '庆阳', '平凉', '定西', '陇南', '临夏回族自治州', '甘南藏族自治州'],
  '宁夏': ['银川', '石嘴山', '吴忠', '固原', '中卫'],
  '青海': ['西宁', '海东地区', '海北藏族自治州', '海南藏族自治州', '黄南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'],
  '新疆': ['乌鲁木齐', '克拉玛依', '吐鲁番地区', '哈密地区', '和田地区', '阿克苏地区', '喀什地区', '克孜勒苏柯尔克孜自治州', '巴音郭楞蒙古自治州', '昌吉回族自治州', '博尔塔拉蒙古自治州', '石河子', '阿拉尔', '图木舒克', '五家渠', '伊犁哈萨克自治州'],
  '香港': ['香港'],
  '澳门': ['澳门'],
  '台湾': ['台北市', '高雄市', '台北县', '桃园县', '新竹县', '苗栗县', '台中县', '彰化县', '南投县', '云林县', '嘉义县', '台南县', '高雄县', '屏东县', '宜兰县', '花莲县', '台东县', '澎湖县', '基隆市', '新竹市', '台中市', '嘉义市', '台南市']
}

let timer = null
export function timeout (cb, delay) {
  if (timer) {
    clearTimeout(timer)
    timer = null
  }
  timer = setTimeout(function () {
    cb()
    timer = null
  }, delay)
}

/**
 * baidu map
 * @returns {Promise}
 * @constructor
 */
export function MP () {
  return new Promise(function (resolve, reject) {
    let script = document.createElement('script')
    script.onload = function () {
      setTimeout(function () {
        resolve(window.BMap)
      }, 500)
    }
    script.type = 'text/javascript'
    script.src = 'http://api.map.baidu.com/api?v=2.0&ak=kIwTlWg8P5k19Brc4KiszkXz&callback=init'
    script.onerror = reject
    document.head.appendChild(script)
  })
}
/**
 * preloadjs
 * @returns {Promise}
 * @constructor
 */
export function PreloadJs () {
  return new Promise(function (resolve, reject) {
    if (window.createjs) {
      resolve(window.createjs)
      return
    }
    let script = document.createElement('script')
    script.onload = function () {
      resolve(window.createjs)
    }
    script.type = 'text/javascript'
    script.src = 'https://code.createjs.com/preloadjs-0.6.2.min.js'
    script.onerror = reject
    document.head.appendChild(script)
  })
}
/**
 * 使用第三方的工具
 * @param src js路径 string
 * @param expose  暴露的接口 string
 * @returns {Promise}
 */
export function thirdPartyTools (name, src, expose) {
  return new Promise((resolve, reject) => {
    console.log(expose)
    if (window[expose]) {
      resolve(window[expose])
      return
    }
    console.log('re')
    let script = document.createElement('script')
    script.onload = () => {
      resolve(window[expose])
    }
    script.type = 'text/javascript'
    script.src = src
    script.onerror = reject
    document.head.appendChild(script)
  })
}

/**
 * location.search
 */
export const Q = (function () {
  let qs = (location.search.length > 0 ? location.search.substring(1) : '')

  let args = {}

  let items = qs.split('&')
  let item = null
  let key = null
  let value = null

  for (let i = 0; i < items.length; i++) {
    item = items[i].split('=')
    key = decodeURIComponent(item[0])
    value = decodeURIComponent(item[1])
    args[key] = value
  }
  return args
})()

/**
 * 设备判断
 * @type {string}
 */
const ua = navigator.userAgent.toLowerCase()
export function device () {
  const d = {};
  (/mobile/.test(ua)) && (d.mobile = true);
  (/ipad/.test(ua)) && (d.ipad = true);
  (/iphone os/.test(ua)) && (d.iphone = true);
  (/android/.test(ua)) && (d.android = true);
  (/windows phone/.test(ua)) && (d.winPhone = true)
  return d
}
export function wb () {
  return /mobile/.test(ua) && /micromessenger/.test(ua)
}

export const staticPath = {
  base: '',
  setBase (base) {
    this.base = base
  },
  getPath (dir) {
    let dev = process.env.NODE_ENV === 'development'
    return dev
      ? '/static/' + dir
      : this.base + '/static/' + dir
  }
}
// function curry (fn) {
//   let args = Array.prototype.slice.call(arguments, 1)
//   console.log(args)
//   return function () {
//     let innerArgs = Array.prototype.slice.call(arguments)
//     console.log(innerArgs)
//     let finalArgs = args.concat(innerArgs)
//     console.log(finalArgs)
//     return fn.apply(null, finalArgs)
//   }
// }
// function add (a, b) {
//   return a + b
// }
//
// console.log(curry(add, 1, 5)(4))


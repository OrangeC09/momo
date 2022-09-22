/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=19253996&pid=f62f1eb90c10f34621418cb12be7fdf4&tid=c015ae0c5dcf907057262df34abad24d",
    "https://www.maimemo.com/share/page?uid=19253996&pid=f62f1eb90c10f34621418cb12be7fdf4&tid=c015ae0c5dcf907057262df34abad24d",
    "https://www.maimemo.com/share/page?uid=19253996&pid=f62f1eb90c10f34621418cb12be7fdf4&tid=c015ae0c5dcf907057262df34abad24d",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=19253996&pid=f62f1eb90c10f34621418cb12be7fdf4&tid=c015ae0c5dcf907057262df34abad24d",
    "https://www.maimemo.com/share/page?uid=19253996&pid=f62f1eb90c10f34621418cb12be7fdf4&tid=c015ae0c5dcf907057262df34abad24d",
    "https://www.maimemo.com/share/page?uid=19253996&pid=f62f1eb90c10f34621418cb12be7fdf4&tid=c015ae0c5dcf907057262df34abad24d",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }

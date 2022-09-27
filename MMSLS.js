/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=19253996&pid=7a86f6b1db9c12a1bfcbba69de6006c3&tid=eeffb5332326d14c47cf17ca58e181c8",
    "https://www.maimemo.com/share/page?uid=19253996&pid=7a86f6b1db9c12a1bfcbba69de6006c3&tid=eeffb5332326d14c47cf17ca58e181c8",
    "https://www.maimemo.com/share/page?uid=19253996&pid=7a86f6b1db9c12a1bfcbba69de6006c3&tid=eeffb5332326d14c47cf17ca58e181c8",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=19253996&pid=a49c7de9e40ea1f3e074a29bb645997a&tid=40a0b71860363f31382623ed5a342b1d",
    "https://www.maimemo.com/share/page?uid=19253996&pid=a49c7de9e40ea1f3e074a29bb645997a&tid=40a0b71860363f31382623ed5a342b1d",
    "https://www.maimemo.com/share/page?uid=19253996&pid=a49c7de9e40ea1f3e074a29bb645997a&tid=40a0b71860363f31382623ed5a342b1d",
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

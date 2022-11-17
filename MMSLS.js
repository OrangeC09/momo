/**
利用随机概率实现多账户运行

填写格式如下：

====================================================================以下为范例！=============================================================================================
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=19253996&pid=0b22886c2c21c121b340f7b01474c6fe&tid=298e4d2a4231583ce2bb84ba5ced0583",
    "https://www.maimemo.com/share/page?uid=19253996&pid=0b22886c2c21c121b340f7b01474c6fe&tid=298e4d2a4231583ce2bb84ba5ced0583",
    "https://www.maimemo.com/share/page?uid=19253996&pid=0b22886c2c21c121b340f7b01474c6fe&tid=298e4d2a4231583ce2bb84ba5ced0583",
  ]
====================================================================以上为范例！=============================================================================================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=19253996&pid=7b5d2df46674e0e84550d4b2c3a9bb76&tid=45f7cdd32cc9f0fe650c2b4e7dc6c519",
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

var bjtuwsl = {
  /**
   * 
   * @param {array} ary 
   * @return {array}
   */
  compact: function (ary) {
    return ary.filter(it => it);
  },

  /**
   * 
   * @param {array} ary 
   * @param {number} size 
   * @return {array}
   */
  chunk: function (ary, size = 1) {
    var res = [];
    for(var i = 0; i < ary.length; i += size){
      res.push(ary.slice(i, i + size));
    }
    return res;
  },
  /**
   * 
   * @param {array} ary 
   * @param  {...args} args 
   * @return {array}
   */
  difference: function(ary, ...args){
    var arr = args.reduce((res, cur) => {
      return res.concat(cur);
    })
    return ary.filter(item => !arr.includes(item));
  },
  /**
   * 
   * @param {array} ary 
   * @param {number} num 
   * @return {array}
   */
  drop: function (ary, num = 1){
    return ary.slice(num);
  },
  /**
   * 
   * @param {array} arr 
   * @param {number} num 
   * @return {array}
   */
  dropRight:function(ary, num = 1){
    if(num >= ary.length){
      return [];
    }
    return ary.slice(0, ary.length - num);
  },
  /**
   * 
   * @param {function} f
   * @return {function}
   */
  negate: function (f) {
    return function (...arg){
      return !f(...arg);
    }
  },
}


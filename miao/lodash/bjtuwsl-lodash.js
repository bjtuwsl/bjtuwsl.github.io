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
  dropRight: function(ary, num = 1){
    if(num >= ary.length){
      return [];
    }
    return ary.slice(0, ary.length - num);
  },

  /**
   * 
   * @param {array} ary 
   * @param {value} val 
   * @param {number} start 
   * @param {number} end 
   */
  fill: function (ary, val, start = 0, end = ary.length){
    if(end > ary.length){
      end = ary.length;
    }
    var res = ary.slice();
    for(var i = start; i < end; i++){
      res[i] = val;
    }
    return res;
  },

  /**
   * 
   * @param {array} ary 
   * @return {array}
   */
  flatten: function(ary){
    return [].concat(...ary);
  },

  /**
   * 
   * @param {array} ary 
   * @return {array}
   */
  flattenDeep: function (ary){
    var res = [];
    for(var item of ary){
      if(Array.isArray(item)){
        var flattenItem = flattenDeep(item);
        res.push(...flattenItem);
      }else{
        res.push(item);
      }
    }
    return res;
  },

  /**
   * 
   * @param {array} ary 
   * @param {number} depth 
   * @return {array}
   */
  // flattenDepth: function(ary, depth = 1){
  //   if(depth <= 0){
  //     return ary.slice();
  //   }
  //   var res = [];
  //   for(var item of ary){
  //     if(Array.isArray(item)){
  //       var flattenItem = flattenDepth(item, --depth);
  //       res.push(...flattenItem);
  //     }else{
  //       res.push(item);
  //     }
  //   }
  //   return res;
  // },
  flattenDepth: function (ary, depth = 1){
    var res = ary.slice()
    for(var i = 0; i < depth; i++){
      res = flatten(res);
    }
    return res;
  },

  /**
   * 
   * @param {array} ary 
   * @return {*}
   */
  head: function(ary){
    return ary[0];
  },
  
  /**
   * 
   * @param {array} ary 
   * @param {*} value 
   * @param {number} fromIndex 
   * @return {number}
   */
  indexOf: function (ary, value, fromIndex = 0){
    if(fromIndex < 0){
      fromIndex = ary.length + fromIndex;
    }
    for(var i = fromIndex; i < ary.length; i++){
      if(ary[i] == value){
        return i;
      }
    }
    return -1;
  },

  /**
   * 
   * @param {array} ary 
   * @return {array}
   */
  initial: function (ary){
    return ary.slice(0, ary.length - 1)
  },

  /**
   * 
   * @param {array} arr 
   */
  isArray:function (arr){
    return Array.prototype.toString.call(arr) == "[object Array]"
  },

  /**
   * 
   * @param {function} f 
   * @param {number} n 
   * @return {function}
   */
  ary: function (f, n = f.length){
    return function (...arg){
      return f(...arg.slice(0,n));
    }
  },

  /**
   * 
   * @param {function} f
   * @return {function}
   */
  unary: function (f){
    return ary(f,1);
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
  /**
   * 
   * @param {function} f 
   * @return {function}
   */
  flip: function (f){
    return function (...arg){
      return f(...arg.reverse())
    }
  },

}


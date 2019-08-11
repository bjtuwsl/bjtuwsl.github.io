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
   * @param  {...any} arys 
   * @return {array}
   */
  intersection: function (...arys){
    var res = arguments[0].slice();
    for(var i = 1; i < arguments.length; i++){
      res = res.filter(item => arguments[i].includes(item));
    }
    return res;
  },
  // intersection: function (...arys){
  //   var temp = arguments[0].slice();
  //   for(var i = 1; i < arguments.length; i++){
  //     for(var j = 0; j < temp.length; j++){
  //       var idx = arguments[i].indexOf(temp[j]);
  //       if(idx === -1){
  //         temp.splice(j, 1);
  //         j--;
  //       }
  //     }
  //   }
  //   return temp;
  // },
  /**
   * 
   * @param {array} ary 
   * @param {string} separator 
   * @return {string}
   */
  // join:function(ary, separator = ","){
  //   var str = '' + ary[0];
  //   for(var i = i; i < ary.length; i++){
  //     str = str + separator + ary[i];
  //   }
  //   return str;
  // },
  join:function(ary, separator = ","){
    return ary.reduce((current, item) => current + item + separator, '').slice(0, -1);
  },

  last:function(ary){
    return ary[ary.length - 1];
  },

  /**
   * 
   * @param {array} ary 
   * @return {number}
   */
  lastIndexOf:function(ary, val, fromIndex = ary.length - 1){
    for(var i = fromIndex; i > 0; i--){
      if(ary[i] == val){
        return i;
      }
    }
    return -1;
  },
  /**
   * 
   * @param {array} ary 
   * @param  {...args} args
   * @return {array} 
   */
  // pull:function(ary, ...args){
  //   var res = []
  //   for(var i = 0; i < ary.length; i++){
  //     if(!args.includes(ary[i])){
  //       res.push(ary[i]);
  //     }
  //   }
  //   return res;
  // },
  pull:function(ary, ...args){
    return ary.filter(item => !args.includes(item));
  },

  // reverse:function(ary){
  //   for(var i = 0; i < ary.length / 2; i++){
  //     var temp = ary[i];
  //     ary[i] = ary[ary.length - i - 1];
  //     ary[ary.length - i - 1] = temp;
  //   }
  //   return ary;
  // },
  reverse:function(ary){
    var res = [];
    ary.forEach(element => {
      res.unshift(element);
    });
    return res;
  },

  sortedIndex:function(ary,val){
    for(var i = 0; i < ary.length; i++){
      if(val <= ary[i]){
        return i;
      }
    }
  },
  /**
   * 
   * @param {array} ary 
   * @param {number} val
   * @return {number} 
   */
  sortedIndex:function(ary, val){
    var start = 0;
    var end = ary.length - 1;
    var mid = Math.floor((start + end) / 2);
    while(start <= end){
      if(val > ary[mid]){
        start = mid + 1;
      }
      if(val <= ary[mid]){
        end = mid - 1;
      }
      mid = Math.floor((start + end) / 2);
    }
    return mid + 1;
  },
  /**
   * 
   * @param {array} arr 
   */
  isArray:function (arr){
    return Object.prototype.toString.call(arr) == "[object Array]"
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
    return this.ary(f,1);
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
  /**
   * 
   * @param {function} f
   * @return {function} 
   */
  // memoize:function (f){
  //   var cache = {};
  //   return function(arg){
  //     if(arg in cache){
  //       return cache[arg];
  //     }else{
  //       return cache[arg] = f(arg);
  //     }
  //   }
  // },
  memoize: function (f){
    var cache = new Map();
    return function memorized (arg){
      if(cache.has(arg)){
        return cache.get(arg);
      }else{
        cache.set(arg,f(arg));
        return cache.get(arg);
      }
    }
  },
  /**
   * 
   * @param {function} f 
   * @param {*} length 
   * @return {function}
   */
  curry: function (f, length = f.length){
    return function (...args){
      if(args.length >= length){
        return f(...args);
      }else{
        return bjtuwsl.curry(f.bind(null, ...args), length - args.length);
      }
    }
  }
}


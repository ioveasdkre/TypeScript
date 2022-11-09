import _ from 'lodash';

declare var GLOBAL: string; // 宣告全域 為了能夠使用 index.html的 GLOBAL

console.log(_.shuffle([1, 2, 3]));

console.log(GLOBAL);
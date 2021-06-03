import _ from 'lodash';
import './style/index.css'; // loader： module css-loader  module:style-loader
import './style/a.scss';
import axios from 'axios';
import { w, e, f } from '@/b'; // @代表绝对路径
import $ from 'jquery';

console.log(w);
console.log(e);
console.log(f);

function createDomElemente() {
  const dom = document.createElement('div');
  dom.innerHTML = _.join(['lzj', 'hao!', 'hahah'], '~');
  // dom.className = 'box';
  dom.classList.add('box');
  return dom;
}
const divDom = createDomElemente();
document.body.appendChild(divDom);
console.log(222233333444455);

// 发送ajax请求数据
axios
  .get('/api/course')
  .then(res => console.log(res));

class Temp {
  show() {
    console.log('this.Age :', this.Age);
  }

  get Age() {
    return this._age;
  }

  set Age(val) {
    this._age = val + 1;
  }
}

const t = new Temp();
t.Age = 19;

t.show();

const [a, b, c] = [1, 2, 3];
console.log(a);
console.log(b);
console.log(c);

$(function() {
  console.log('jquery');
  $('.box').click(function() {
    alert(1);
  });
});

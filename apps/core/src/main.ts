import {test} from '@repro/library';

const elem = document.querySelector('#root');
if (elem) {
  elem.innerHTML = `my value: ${test}`;
}
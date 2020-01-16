import Quill from 'quill';
//import $ from 'jquery';
import './assets/scss/style.scss';

var toolbar = document.getElementById('toolbar');
var container = document.getElementById('editor');

var toolbarOptions = [
  ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
  ['blockquote', 'code-block'],

  [{ 'header': 1 }, { 'header': 2 }],               // custom button values
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
  [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
  [{ 'direction': 'rtl' }],                         // text direction

  [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

  [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
  [{ 'font': [] }],
  [{ 'align': [] }],

  ['clean']                                         // remove formatting button
];

toolbarOptions = [['bold', 'italic'], ['link', 'image']];

var options = {
  debug: 'info',
  modules: {
    //toolbar: toolbarOptions
    toolbar: toolbar
  },
  placeholder: 'Compose an epic...',
  readOnly: false,
  theme: 'snow'
};

var editor = new Quill(container, options);




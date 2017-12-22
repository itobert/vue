var div = document.createElement('div');
div.innerHTML = '<div id="app">\
  <div class="main_min_right_menu">\
    <button @click="select_heat_exchanger"><i class="el-icon-menu"></i>Подобрать теплообменник</button>\
    <button @click="contact_specialist"><i class="el-icon-service"></i>Связаться со специалистом за 30 секунд</button>\
    <button @click="our_delivery_and_feedback"><i class="el-icon-tickets"></i>Наши поставки и отзывы</button>\
  </div>\
  <transition name="modal">\
    <div id="modal_template" v-show="showModal">\
    <div class="modal-mask">\
      <div class="modal-wrapper">\
      <div class="center">\
      <div class="form_left">\
        <button @click="select_heat_exchanger">Подобрать теплообменник</button>\
        <button @click="contact_specialist">Связаться со специалистом за 30 секунд</button>\
        <button @click="our_delivery_and_feedback">Наши поставки и отзывы</button>\
        </div>\
        <div class="modal-container">\
        <button class="modal-default-button" @click="close">X</button>\
          <div class="modal-body">\
            <div :is="componentName"></div>\
          </div>\
          </div>\
        </div>\
      </div>\
    </div>\
    </div>\
  </transition>\
</div>';
// div.innerHTML = '<div id="app">\
// <div class="form_left_buttons">\
//   <button @click="select_heat_exchanger">Подобрать теплообменник</button>\
//   <button @click="contact_specialist">Связаться со специалистом за 30 секунд</button>\
//   <button @click="our_delivery_and_feedback">Наши поставки и отзывы</button>\
//   </div>\
//   <div :is="componentName"></div>\
// </div>';
document.body.appendChild(div);

Vue.component('select_heat_exchanger_component', {
  template: '<div>\
  <div class="center_block">\
    <h3>{{$parent.search_request}}</h3>\
    <button @click="mark"> Получить цену по маркировке / паспорту / фото теплообменника </button>\
    <button @click="mark"> Пересчитать имеющуюся спецификацию / проект </button>\
    <button @click="mark"> Расчитать по опросному листу </button>\
    <button @click="mark"> Новый расчет по параметрам </button>\
    <button @click="mark"> Я не знаю как мне поступить, перезвоните для консультации </button>\
  <div class="center_block_footer">\
    <h4>Почему на  пластинчатый теплообменник нет цен на сайте?</h4>\
    <p>Нам часто задают такой вопрос. И поэтому мы подготовили ответ на него.</p>\
    <p>Пластинчатый теплообменник всегда расчитывается индивидуально под конкретные  параметры заказчика. На нашем сайте есть только цены  для конкретных расчетов.</p>\
    <p>Также вы можете посмотреть видео "Как формируется цена на  теплообменник"</p>\
  </div>\
  </div>\
  </div>',
  // template: '<div class="center_block">\
  //   <h3>{{$parent.search_request}}</h3>\
  //   <button @click="mark"> Получить цену по маркировке / паспорту / фото теплообменника </button>\
  //   <button @click="mark"> Пересчитать имеющуюся спецификацию / проект </button>\
  //   <button @click="mark"> Расчитать по опросному листу </button>\
  //   <button @click="mark"> Новый расчет по параметрам </button>\
  //   <button @click="mark"> Я не знаю как мне поступить, перезвоните для консультации </button>\
  // <div class="center_block_footer">\
  //   <h4>Почему на  пластинчатый теплообменник нет цен на сайте?</h4>\
  //   <p>Нам часто задают такой вопрос. И поэтому мы подготовили ответ на него.</p>\
  //   <p>Пластинчатый теплообменник всегда расчитывается индивидуально под конкретные  параметры заказчика. На нашем сайте есть только цены  для конкретных расчетов.</p>\
  //   <p>Также вы можете посмотреть видео "Как формируется цена на  теплообменник"</p>\
  // </div>\
  // </div>',
  methods: {
    mark: function() {
      this.componentName = 'contact_specialist_component'
    }
  }
});
Vue.component('main_min_right_menu', {
  template: '<div class="main_min_right_menu">\
  <button @click="select_heat_exchanger">Подобрать теплообменник</button>\
  <button @click="contact_specialist">Связаться со специалистом за 30 секунд</button>\
  <button @click="our_delivery_and_feedback">Наши поставки и отзывы</button>\
  </div>'
});
Vue.component('contact_specialist_component', {
  template: '<div class="center_block">Связаться со специалистом за 30 секунд</div>'
});
Vue.component('our_delivery_and_feedback_component', {
  template: '<div class="center_block">Наши поставки и отзывы</div>'
});


var search_request = '';
// search_request = 'Ридан НН07';
if (search_request == '') {
  search_request = 'Подобрать теплообменник';
} else {
  search_request = 'Хотите узнать цену на теплообменник водоводяной ' + search_request + '?';
}

new Vue({
  el: '#app',
  data: {
    componentName: '',
    search_request: search_request,
    showModal: false
  },
  methods: {
    select_heat_exchanger() {
      this.componentName = 'select_heat_exchanger_component',
      this.showModal = true
    },
    contact_specialist() {
      this.componentName = 'contact_specialist_component'
    },
    our_delivery_and_feedback() {
      this.componentName = 'our_delivery_and_feedback_component'
    },
    close(){
      this.showModal = false
    }
  }
});

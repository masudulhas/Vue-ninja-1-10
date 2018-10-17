new Vue({
  el:'#app',
  data:{
    name: 'Masud',
    job: 'Engnieer',
    age: 27,
    website: 'http://masudulhasan.me',
    websiteTag: '<a href="http://masudulhasan.me">My web site</a>',
    x: 0,
    y: 0,
    child:'',
    rong: true,
    big: true
  },
  methods: {
    greeting:function(time){
      return 'Good '+ time + ' ' + this.name
    },
    increase:function(a){
      this.age +=a
    },
    decrease:function(a){
      this.age -=a
    },
    updateXY: function(event) {
      this.x = event.offsetX;
      this.y = event.offsetY;
    },
    Keyup: function(){
      const field = document.querySelector("input[name=test]").value;
        console.log(field);
      alert("You entered " + field);
    }

  },
  computed:{
    changeColor:function(){
      return{
        rong:this.rong
      }
    }

  }
});

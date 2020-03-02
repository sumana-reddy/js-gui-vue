var Length = (x) => {return x }

var Length = new Vue({
    el: '#Length Calculater',
    data: {
      name : 'sumana'
      },
    computed: {
        name : function () {
          var i = name.length(),
            return `The Length of a given name is ${Length( i )}.`
        }
      }
    })
var Length = (x) => {return x.length() }

var Length = new Vue({
    el: '#Length Calculater',
    data: {
      name : 'sumana'
      },
    computed: {
        name : function () {
          var i = name.length(),
            return `The Length of a given name is ${name.length(i)}.`
            
        }
      }
    })
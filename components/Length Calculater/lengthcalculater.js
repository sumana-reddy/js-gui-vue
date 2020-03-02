const Length = (x) => {return x }

const Length = new Vue({
    el: '#Length Calculater',
    data: {
      name : 'sumana'
      },
    computed: {
        length : function () {
          const i = name.length(),
            return `The Length of a given name is ${Length( i )}.`
        }
      }
    })
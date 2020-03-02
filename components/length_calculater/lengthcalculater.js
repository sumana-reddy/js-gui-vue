var word_Length = (x) => {return x.length }

var word_Length = new Vue({
    el: '#word_Length',
    data: {
      word : 'sumana'
      },
    computed: {
        length : function () {
          var i = word.length(),
            return `The Length of a given name is ${length(i)}.`
            
        }
      }
    })
  
    // const add = (x, y) => { return x + y }
    
    // const adder = new Vue({
    //   el: '#adder',
    //   data: {
    //     guest: 'Emmett',
    //     firstNumber: 5,
    //     secondNumber: 3
    //   },
    //   computed: {
    //     result: function () {
    //       const i = parseInt(this.firstNumber)
    //       const j = parseInt(this.secondNumber)
    //       return `${this.guest}, your sum is ${add(i, j)}.`
    //     }
    //   }
    // })
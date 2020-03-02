var word_Length = (x) => {
  console.log(x.length);
  return x.length }

var word_Length = new Vue({
    el: '#word_Length',
    data: {
      word : 'sumana'
      },
    computed: {
        length : function () {
          const i = parseInt(this.word)
          return `The Length of a given name is ${word_Length(i)}.`
            
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
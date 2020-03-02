const multiply = (x,y,z) => {return x * y * z }

const multiplier = new Vue({
    el: '#multiplier',
    data: {
      firstnumber: 4,
      secondnumber: 3,
      thirdnumber: 5
    },
    computed: {
        multiplier : function () {
          const i = parseInt(this.firstnumber)
          const j = parseInt(this.secondnumber)
          const k = parseInt(this.thirdnumber)
          return `The multiplication is ${multiply( i, j , k )}.`
        }
      }
    })
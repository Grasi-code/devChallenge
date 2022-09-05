export default {
    name: 'InputField',
    data() {
        return {
            input: "",
            items: [],
            isFocus: false,
            url: "http://transport.opendata.ch/v1/locations?query=",
        }
    },
    methods: {
        toggleIfClicked: function () {
            document.getElementById('input').focus();
            if (this.isFocus == true) {
                document.getElementById("vonButton").className = "MyClass";
            }
        },
        isNotFocus: function () {
            if (this.isFocus == false && document.getElementById('input').value.length == 0) {
                document.getElementById("vonButton").className = "vonAnimation";
            } else if (this.isFocus == true && document.getElementById('input').value.length > 0) {
                document.getElementById('vonButton').className = "MyButton"
            }
        },


        selectItem(item) {
            var input = document.getElementById("input");
            input.value = item;
        },
        returnResult: function (results) {
            this.items = results;
        },
        apiCall: function () {
            fetch(`http://transport.opendata.ch/v1/locations?query=${this.input}`)
                .then((response) => response.json())
                .then((data) => this.returnResult(data.stations));
        },

        /* apiCall: function () {
            const axios = require('axios').default;
            axios.get(this.url + this.userInput)
                .then(response => (this.info = response))
            console.log(this.info);
            response = data.content[0].data.filter((test) => test.label === 'Zürich')
        } */
    }
}
















/* export default{
  data() {
    return() => ({
      userInput: "",

    })
  },
  methods: {
    test: function () {
        document.getElementById("vonButton").className = "MyClass";
    },
    apiCall: function () {
      const axios = require('axios').default;

      console.log(this.userInput)

      axios.get('https://fahrplan.search.ch/api/completion.json?term=' + this.userInput)

          .then(function (response) {

              console.log(response)

          })

      this.toggleIfClicked()
    }
  }
}
 */





    /* async getPosts(){
      let userIput = "";
      this.posts= await axios.get('https://fahrplan.search.ch/api/completion.json?term=' + userInput)
    } */

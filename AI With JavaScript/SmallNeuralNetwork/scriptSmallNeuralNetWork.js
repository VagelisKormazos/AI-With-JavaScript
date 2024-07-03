// This create the neural network.
const net = new brain.NeuralNetwork({
  //hiddenLayers: [4, 5]
}) 

// At this Point we declare the Input & Outputs.
// This is actualy the train Data.
net.train([
  {
    input:{r:0,g:0,b:0}, // No color.
    output:[1] //this represent the white color.
  },
  {
    input:{r:1,g:1,b:1}, //
    output:[0] //this represent the black color.
  },
])

// Pass the network to html.
const diagram = document.getElementById('diagram')
diagram.innerHTML= brain.utilities.toSVG(net)

// Give an Input and Run the Neural Network 
console.log(net.run({r:1,g:1,b:0}))

// See the result in console. (18% to be 0(Black))
console.log(net.run({r:1,g:0,b:0})) 
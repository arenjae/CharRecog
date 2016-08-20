/**
 * Created by rae on 8/19/16.
 */

var synaptic = require('synaptic');

class Network{

    constructor(biases,weights){
        this.num_layers = len(sizes);
        this.biases = biases;
        this.weights = weights;
        this.sizes = sizes;

        this.network = new synaptic.Architect.Perceptron(40, 25, 3);
    }

    feedforward(a){
        for (var b = 0, w=0; b<length(self.biases); b++, w++){
            a = sigmoid(math.dot(self.weights[w],a)+self.biases[b]);
        }
        return a;
    }


}


function sigmoid(z) {
    return 1.0/(1.0+exp(-z));
}

function sigmoid_prime(z){
    return sigmoid(z)*(1-sigmoid(z));
}
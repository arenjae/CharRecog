/**
 * Created by rae on 8/19/16.
 */

var nj = require('numjs');

class Network{

    constructor(biases,weights){
        this.biases = biases;
        this.weights = weights;
    }

    feedforward(a){

    }


}




function sigmoid() {
    return 1.0/(1.0+np.exp(-z));
}

function sigmoid_prime(z){
    return this.sigmoid(z)*(1-this.sigmoid(z));
}
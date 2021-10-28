import React, { Component } from 'react'
import Counter from '../components/Counter';
import Header from '../components/Header';

class Compteurs extends Component {
    constructor(props){
        super(props);
        this.state = {counters: [0, 0, 0], total : 0};
      }
    
      handlePlusAppInner = (count, i) => {
        console.log("Maj du compteur n°" + i, "Valeur : " + count);
          // Modifier le tableau des compteurs
          let counters = this.state.counters;
          counters[i] = count;
          // faire la somme des valeurs du tableau de compteurs
          let total = counters.reduce( (accumulateur, valeurCourante) => accumulateur + valeurCourante,0);
          //maj du state
          this.setState({counters, total});
      }; 
    
      render (){
        return (
          <>
          <Header total={this.state.total}/>
          {
            this.state.counters.map( (counter, i) => {
              return <Counter key={i} handlePlusApp={(value) => this.handlePlusAppInner(value, i)}/>
            })
          }
          </>
        );
      }
}
 
export default Compteurs;
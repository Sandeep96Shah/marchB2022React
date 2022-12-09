import React from "react";
import ChildComponent from "./childComponent";
import MovieCard from "./Movie";
import AComponent from "./Components/PropsDrilling/AComponent";
import AComponentContext from './Components/Context/AComponent';
import LearningBasics from "./Components/FunctionalComponent/Basics";
import { connect } from 'react-redux';

//counter project
class ParentComponent extends React.Component {
  // how to initialise state variable
  constructor() {
    super();
    this.state = {
      count: 0,
      greet: "Hello World",
      namasteh: "Namsateh",
      movies: [
        {
          image:
            "https://assets.telegraphindia.com/telegraph/2022/Aug/1661588323_spider-man1.jpg",
          title: "SpiderMan",
          rating: "8/10",
          description: `In publishing and graphic design, Lorem ipsum is a placeholder
          text commonly used to demonstrate the visual form of a document or
          a typeface without relying on meaningful content.`,
        },
        {
          image:
            "https://cdn.theatlantic.com/thumbor/nn7Ai4go9fBsDFd3V_wuLcd4FD8=/0x0:1920x1080/1600x900/media/img/mt/2015/05/man/original.jpg",
          title: "SuperMan",
          rating: "8.6/10",
          description: `In publishing and graphic design, Lorem ipsum is a placeholder
          text commonly used to demonstrate the visual form of a document or
          a typeface without relying on meaningful content.`,
        },
        {
          image:
            "https://media.cnn.com/api/v1/images/stellar/prod/211227135008-02-the-batman-trailer.jpg?q=h_1406,w_2500,x_0,y_0",
          title: "BatMan",
          rating: "9/10",
          description: `In publishing and graphic design, Lorem ipsum is a placeholder
          text commonly used to demonstrate the visual form of a document or
          a typeface without relying on meaningful content.`,
        },
      ],
    };
  }

  //incremnt mrthod
  // handleIncrement = () => {
  //   this.setState({
  //     count: this.state.count + 1,
  //   });
  // };

  handleIncrement = () => {
    this.props.dispatch({type: "INCREMENT"})
  };

  //decrement method
  // handleDecrement = () => {
  //   this.setState({
  //     count: this.state.count - 1,
  //   });
  // };
  handleDecrement = () => {
   this.props.dispatch({type:"DECREMENT"})
  };
  handleChildMethod = () => {
    console.log("I am clicked by child component");
  };

  render() {
    console.log('this.props', this.props)

    return (
      <div>
        {/* <ChildComponent
          greet={this.state.greet}
          count={this.state.count}
          handleClick={this.handleChildMethod}
          namasteh={this.state.namasteh}
        /> */}
        {/* {this.state.movies.map((movie, index) => (
          <MovieCard
            key={index}
            image={movie.image}
            title={movie.title}
            rating={movie.rating}
            description={movie.description}
          />
        ))} */}
        {/* <AComponentContext /> */}
        {/* <LearningBasics greet={this.state.greet} /> */}
        <button onClick={() => this.handleIncrement()}>INCREMENT</button>
        <h1>{this.props.count}</h1>
        <button onClick={() => this.handleDecrement()}>DECREMENT</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {count: state.count};
}

export default connect(mapStateToProps)(ParentComponent);


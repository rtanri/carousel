import React, {Component} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import '../index.css'


function App() {
  return (
    <div className="App">
      Hellow World
      <PageSlider/>
    </div>
  );
}


const carouselData = [
{
  title: 'Grab FatMoms Burger',
  description: 'Grand Opening at Plaza Singapura Mall ',
},
{
  title: 'Choose your spicy level',
  description: 'From Mild 🌶 to Hell-fire 🔥 spicy level',
},
{
  title: 'Unlimited Salad',
  description: 'No particular limit 🥗 , all you can eat at salad bar',
},
{
  title: 'Happy Hour Specials',
  description: 'Special 1-for-1 on Beers🍻 on Weekday 3pm - 5:30pm',
}
];

class LeftArrow extends Component{
  render(){
    return(
      <div className='backArrow' onClick={this.props.goToPrevSlide}>
        <i className='fa fa-angle-left fa-3x' aria-hidden='true'></i>
      </div>
    )
  }
}

class RightArrow extends Component{
  render(){
    return(
      <div className='backArrow' onClick={this.props.goToNextSlide}>
        <i className='fa fa-angle-right fa-3x' aria-hidden='true'></i>
      </div>
    )
  }
}


class Slide extends Component {
  constructor(props){
    super(props);
    this.state = {landing: carouselData};
  }

  render()
{
  return(
    <section>
      {
        this.state.landing.map((s, index) =>
          <div 
            className={index === this.props.activeIndex ? 'active' : 'slide'}
            key={index}
          >
          <h1 className={index === 0 ? "mainSlide heading" : "slider-item heading"} >{s.title}</h1>
          <p>{s.description}</p>
          </div>
        )
      }
    </section>
  )
}}

class PageSlider extends Component{
  constructor(props){
    super(props);

    this.state={
      activeIndex: 0,
      length: carouselData.length
    };
  }

  goToPrevSlide(){
    let index = this.state.activeIndex;
    let length = this.state.length;

    if(index<1){
      index = length -1;
    }
    else{
      index--;
    }

    this.setState({
      activeIndex: index
    });
  }

  goToNextSlide(){
    let index = this.state.activeIndex;
    let length = this.state.length;

    if(index === length - 1){
      index = 0
    }
    else{
      index++;
    }

    this.setState({
      activeIndex: index
    });
  }

  render(){
    return(
      <div className='slider'>
        <div className="slider-item">
          <LeftArrow goToPrevSlide={()=> this.goToPrevSlide()} />
          <Slide
            activeIndex={this.state.activeIndex}
            goToNextSlide={() => this.goToNextSlide()}
          />
          <RightArrow goToNextSlide={() => this.goToNextSlide()} />
        </div>
      </div>
    )
  }
}





export default App;

import React from 'react';
import Search from './Search.jsx';
import Featured from './Featured.jsx';
import CityList from './CityList/CityList.jsx';
import Modal from 'react-responsive-modal';

class Details extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      contact: {
        pos1: 0, 
        pos2: 0, 
        pos3: 0, 
        pos4: 0,
        isDrag: false,
        top: null,
        left: null,
      }
    }
  }

  triggerModal() {
    this.setState({ open: !this.state.open });
  };

    // function elementDrag(e) {
    //   e = e || window.event;
    //   e.preventDefault();
    //   // calculate the new cursor position:
    //   pos1 = pos3 - e.clientX;
    //   pos2 = pos4 - e.clientY;
    //   pos3 = e.clientX;
    //   pos4 = e.clientY;
    //   // set the element's new position:
    //   elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    //   elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    // }

  dragMouseDown(e) {
    e.preventDefault();
    const id = e.target.id;
    console.log(this.state[id].isDrag)
    this.state[id].pos3 = e.clientX;
    this.state[id].pos4 = e.clientY;
    this.state[id].isDrag = true;
    console.log(this.state[id].isDrag)
  }

  closeDragElement(e) {
    console.log('mouseup')
    const id = e.target.id;
    // stop moving when mouse button is released;
    this.state[id].isDrag = false;
  }

  elementDrag(e) {
    console.log('mouse is movin')
    e.preventDefault();
    const id = e.target.id;
    // calculate the new cursor position:
    this.state[id].pos1 = this.state[id].pos3 - e.clientX;
    this.state[id].pos2 = this.state[id].pos4 - e.clientY;
    this.state[id].pos3 = e.clientX;
    this.state[id].pos4 = e.clientY;
    // set the element's new position:
    //set top
    this.state[id].top = document.getElementById(id).offsetTop - this.state[id].pos2;
    //set left
  }
 
  render() {
    const { open } = this.state;
    return (
      <div id="details-body">
        <div id="details-top">
          <div className="details-heading">  Helping queerdos <br/> travel queerer. </div>
          <Search handleSubmit={this.props.handleSubmit}/>
          <img 
            className="details-img" 
            id="contact" 
            src="https://s3-us-west-1.amazonaws.com/queertrip/contact.png" 
            onMouseDown={this.dragMouseDown.bind(this)} 
            onMouseUp={this.closeDragElement.bind(this)}
            onMouseMove={this.state["contact"].isDrag ? this.elementDrag.bind(this) : null}
            style={{top: `${this.state["contact"].top}px`, left: `${this.state["contact"].left}px`}}
            />
          {/* <Modal open={open} onClose={this.triggerModal.bind(this)} center>
            <h2>Give us your contact deets and we'll send you some sweet info</h2>
          </Modal> */}
          <img className="details-img" id="collabo" src="https://s3-us-west-1.amazonaws.com/queertrip/collabo.png" />
          {/* <Modal open={open} onClose={this.triggerModal.bind(this)} center>
            <h2>Let's collaborate</h2>
          </Modal> */}
          <img className="details-img" id="why" src="https://s3-us-west-1.amazonaws.com/queertrip/why.png" />
            {/* <Modal open={open} onClose={this.triggerModal.bind(this)} center>
              <h2>Traveling internationally while queer can sometimes be a scary experience. Queertrips is for everybody to find safe spaces on the road. Whether you’re gay, lesbian, bisexual, genderqueer, straight, asexual, we don’t give AF. We just want to create experiences and have fun with openminded people around the world. </h2>
            </Modal> */}
          <div className="buffer"></div>
        </div>
        <CityList cities={this.props.cities} handleCityClick={this.props.handleCityClick}/>
        <div className="orgs">
          <div>
            Here's a short list of organizations doing work to support queer and trans people, with special consideration for: youth empowerment, homelessness, mental health, incarceration, and structural racism. We are not partners with any of them, we just believe in their work.
          </div>
          <img src="https://s3-us-west-1.amazonaws.com/queertrip/Rainbow.png"/>
        </div>
      </div>
    )
  }
};

export default Details;
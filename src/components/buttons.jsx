import React, { Component } from "react";

export default class Buttons extends Component {
  render() {
    return (
      <div className='buttons-container'>
        <div className='buttons-row1'>
          <div>AC</div>
          <div>(</div>
          <div>)</div>
          <div>/</div>
        </div>
        <div className='buttons-row2'>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>*</div>
        </div>
        <div className='buttons-row3'>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>+</div>
        </div>
        <div className='buttons-row4'>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>-</div>
        </div>
        <div className='buttons-row5'>
          <div>0</div>
          <div>.</div>
          <div>=</div>
        </div>
      </div>
    );
  }
}


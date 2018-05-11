import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {

  html=`
<div class="container">
  <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" class="image">
  <div class="overlay">
    <div class="text">Hello World</div>
  </div>
</div>
  `;
  css=`
  .container {
    position: relative;
    width: 20%;
  }
  
  .image {
    display: block;
    width: 100%;
    height: auto;
  }
  
  .overlay {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #008CBA;
    overflow: hidden;
    width: 0;
    height: 100%;
    transition: .5s ease;
  }
  
  .container:hover .overlay {
    width: 100%;
  }
  
  .text {
    color: white;
    font-size: 20px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    white-space: nowrap;
  }
  `;

  constructor() { }

  ngOnInit() {
  }

}

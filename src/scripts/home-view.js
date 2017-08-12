import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

const HomeView = React.createClass({

   render: function(){

         <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span></button>
         <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
               <li class="nav-item active">
                  <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">About Us</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">Tips</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">Gift Cards</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">Cleaning Services</a>
               </li>
               <li class="nav-item">
                  <a class="nav-link" href="#">Contact Us</a>
               </li>
               <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="http://example.com" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown link</a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="#">Reviews</a>
                  <a class="dropdown-item" href="#">Charities</a>
                  <a class="dropdown-item" href="#">FAQS</a>
                  <a class="dropdown-item" href="#">Specials</a>
                  <a class="dropdown-item" href="#">Employment</a>
            </div>
               </li>
            </ul>
         </div>
         </nav>
         <div className="footer-container text-center">
         <div className="todays-quote">
            <h6>Quote of the Day</h6>
            <strong>We are all here to help others, what the others are here for I don't know! W.H.Auden</strong>
         </div>
         <div>
          <a href="https://www.facebook.com/"><i className="fa fa-facebook-official fa-4x multi-icons" aria-hidden="true"></i></a>
          <a href="https://twitter.com/"><i className="fa fa-twitter-square fa-4x multi-icons" aria-hidden="true"></i></a>
          <a href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram fa-4x multi-icons" aria-hidden="true"></i></a>
        </div>
      </div>

      )
   }
})

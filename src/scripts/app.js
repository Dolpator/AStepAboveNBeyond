import Backbone from 'backbone'
import React from 'react'
import ReactDOM from 'react-dom'
import $ from 'jquery'

import HomeView from './home-view.js'
import Reviews from './reviews.js'
import AboutUs from './about-us.js'
import AppController from './clean-view-controller.js'


const AppRouter = Backbone.Router.extend({
   routes: {
              "About Us" : "showAboutUs",
                  "Tips" : "showTips",
             "Charities" : "showCharities",
             "giftcards" : "showGiftCards",
             "contactus" : "showContactUs",
      "cleaningServices" : "showCleaningServices",
                  "faqs" : "showFaqs",
               "reviews" : "showReviews",
              "specials" : "showSpecials",
                      "" : "showHomeView",


   },
   showAboutUs: function(){
      ReactDOM.render(<AppController routedFrom = "AboutUs" />, document.querySelector('#app-container'))
   },
   showTips: function(){
      ReactDOM.render(<AppController routedFrom = "Tips" />, document.querySelector('#app-container'))
   },
   showCharities: function(){
      ReactDOM.render(<AppController routedFrom = "Charities" />, document.querySelector('#app-container'))
   },
   showGiftCards: function(){
      ReactDOM.render(<AppController routedFrom = "GiftCards" />, document.querySelector('#app-container'))
   },
   showContactUs: function(){
      ReactDOM.render(<AppController routedFrom = "ContactUs" />, document.querySelector('#app-container'))
   },
   showCleaningServices: function(){
      ReactDOM.render(<AppController routedFrom = "CleaningServices" />, document.querySelector('#app-container'))
   },
   showFaqs: function(){
      ReactDOM.render(<AppController routedFrom = "FAQS" />, document.querySelector('#app-container'))
   },
   showReviews: function(){
      ReactDOM.render(<AppController routedFrom = "Reviews" />, document.querySelector('#app-container'))
   },
   showSpecials: function(){
      ReactDOM.render(<AppController routedFrom = "Specials" />, document.querySelector('#app-container'))
   },
   showHomeView: function(){
      ReactDOM.render(<AppController routedFrom = "HomeView" />, document.querySelector('#app-container'))
   },

   intialize: function(){
      Backbone.history.start();

   }
})
const app = new AppRouter()

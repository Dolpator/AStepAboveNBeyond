import Backbone from 'backbone'
import React from 'react'
import $ from 'jquery'

import AboutUs from './about-us.js'
import Charities from './charities.js'
import CleaningServices from './cleaning-services.js'
import ContactUs from './contact-us.js'
import FAQS from './faqs.js'
import HomeView from './home-view.js'
import Reviews from './reviews.js'
import Specials from './specials.js'
import Tips from './tips.js'


let AppController = React.createClass({
   getInitialState: function(){

   },

   render: function(){
      switch(){;
         case "HomeView":
            return <HomeView />
            break;

         case "AboutUs":
            return <AboutUs />
            break;

         case "Charities":
            return <Charities />
            break;

         case "CleaningServices":
            return <CleaningServices />
            break;

         case "ContactUs":
            return <ContactUs />
            break;

         case "FAQS":
            return <FAQS />
            break;

         case "Reviews":
            return <Reviews />
            break;

         case "Specials":
            return <Specials />
            break;

         case "Tips":
            return <Tips />
            break;

         defualt:
            return
            <div>
               <h1>Please Return to the Home Page</h1>
               <a href = "#"><i className = "fa fa-home fa-2x" aria-hidden = "true"></i></a>
            </div>
      }
   }
})

module.exports = AppController

const Header = ({

		headerNav

	}) =>

	`
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <header class="main-header homemenu ">
   <div class="">
      <div class="row">
         <div class="col-md-4 col-sm-6 brand-logo mobile-item">
            <a href="index.html" class="main-logo"><img src="./img/logo.png" alt="CCMB"></a>
         </div>
         <div class="col-md-8 col-sm-6 mobile-item">
            <div id="menu-overlay" class="main-menu-toggle"></div>
            <div class="mobile-slide" id="mobile-main-menu">
               <div class="close-menu main-menu-toggle"><span class="remove"></span></div>
               <nav class="main-menu-items">
                  <li class="link-home">
                     <a href="index.html">Home</a>
                  </li>
                  <li class="link-about">
                     <a href="#">About us</a>
                  </li>
                  <li class="link-location">
                     <a href="#">Programs</a>
                  </li>
                  <li class="link-floorplan">
                     <a href="#">Funding</a>
                  </li>
                  <li class="link-specification">
                     <a href="#">Ecosystem</a>
                  </li>
                  <li class="link-gallery">
                     <a href="#">Portfolio</a>
                  </li>
               </nav>
            </div>
            <button type="button" class="main-menu-toggle btn btn-brand"><span class="glyphicon glyphicon-menu-hamburger fa fa-bars"></span></button>
         </div>
      </div>
   </div>
</header>

 <!-- <a href="" class="anchor-sticky" data-toggle="modal" data-target="#EnquireModal">Download Brochure</a> -->

`;



const Footer = ({

		footerNav

	}) =>

	`




<section class="footer-section" style="background: #24252D">

    <div class="container">

      <div class="row">

        <div class="footer-item">

          <div class="footer-wrapper">

            <h4>ABOUT AIC-CCMB</h4>

            <a href="#">About Atal Innovation Center</a>

            <a href="#">About CCMB</a>

            <a href="#">Management Team</a>

            <a href="#">Research Facilities</a>
            

          </div>

        </div>

        <div class="footer-item">

          <div class="footer-wrapper">

            <h4>FOR STARTUPS</h4>

            <a href="#">Center for PHMS</a>

            <a href="#">SIIP program</a>

            <a href="#">CRTD Hub</a>

            <a href="meitystartuphub.html">MeitY Startup Hub</a>

          </div>

        </div>

        <div class="footer-item">

          <div class="footer-wrapper minheight">

            <h4>INNOVATION ECOSYSTEM</h4>

            <a href="mentors.html">Mentors</a>

            <a href="#">Industry Content</a>

            <a href="#">Angel Investors</a>

          </div>

        </div>

        <div class="footer-item">

          <div class="footer-wrapper minheight">

            <h4>JOIN THE MISSION</h4>

            <a href="#">Upcoming events</a>

            <a href="#">Partner with us</a>
            
            <p class="social-media">
            
            <a href="https://twitter.com/ccmb_csir" target="_blank"> <i class="fa fa-twitter-square"></i> </a>
            <a href="https://www.youtube.com/channel/UCura12DSJisJl3GolbJrLyA?view_as=subscriber" target="_blank"> <i class="fa fa-youtube-square"></i></a>
            <a href="https://www.facebook.com/ccmbcsir" target="_blank"> <i class="fa fa-facebook-square"></i></a>
            <a href="https://www.linkedin.com/company/centre-for-cellular-and-molecular-biology/" target="_blank"> <i class="fa fa-linkedin-square"></i></a>
            </p>
          </div>

        </div>

      </div>

    </div>

  </section>





 <footer class="call-footer-fixed" style="background: #000">



    <div class="container">



      <div class="row">



          <div class="col-sm-6">



          <p class="mb-1 mt-1">&copy; Center for Cellular and Molecular Biology</p>



          </div>

          <div class="col-sm-6 text-right">



          <p class="mb-1 mt-1"><a href="http://deepredink.com/" target="_blank">Website by Deepredink</a></p>



          </div>

          </div>



      </div>



    </div>



  </footer>

`;







// Header Script

$('#headerNav').html([{

	headerNav: ''

}].map(Header).join(''));



// Footer Script

$('#footerNav').html([{

	footerNav: ''

}].map(Footer).join(''));





function myfunction() {

  alert()

}





/* ------

 * TRACKING VARIABLES

 * ------ */

 

var webCookieName = "";



/* ------

 * CALLS

 * ------ */



var dateObj = new Date();

var year = dateObj.getFullYear();

var dateYear = $('#footerYear');

dateYear.html(year);





$(document).on('ready', function() {

  func_headerOpaque();

  highlightActivePage();

  



});



// $(window).load(function() {

//   func_headerOpaque();

// });



// $(window).resize(function() {

//     func_headerOpaque();

// });



// $(window).scroll(function() {

//   func_headerOpaque();

// });



/* ------

 * FUNCTIONS

 * ------ */



var highlightActivePage = function() {



  if(typeof activePage !== 'undefined') {

    $('.' + activePage).addClass('active open');

    $('.' + activePage).removeClass('collapse');

  }

  

  if(typeof activeSubPage !== 'undefined') {

    $('.' + activeSubPage).addClass('active');

  }

  

  if(typeof activeSubSubPage !== 'undefined') {

    $('.' + activeSubSubPage).addClass('active');

  }

  

};





function func_headerOpaque() {

  var scrollPos = $(window).scrollTop();

  if(scrollPos > 75) {

    $(".main-header").addClass('bg');

    $(".main-header.homemenu").removeClass('no-bg');

  } else {

    $(".main-header").removeClass('bg');

    $(".main-header.homemenu").addClass('no-bg');

  }

}



$(".main-menu-toggle").click(function (e) {
    
    

    e.preventDefault();

    var elem = $(this);

    if (elem.hasClass('open')) {

        $("#menu-overlay").removeClass('showoverlay');

        $("#mobile-main-menu").removeClass('show');

        $('.main-menu-toggle').removeClass('open');

    }

    else {

        $("#mobile-main-menu").addClass('show');

        $('.main-menu-toggle').addClass('open');

        $("#menu-overlay").addClass('showoverlay');

    }

});






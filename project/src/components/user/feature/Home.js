import React from 'react'
import Slider from '../shared/Slider'
import RecentPost from '../shared/RecentPost'

const Home = () => {
  return (
    <>
    <Slider />
    <section className="ftco-section">
    	<div className="container">
    		<div className="row justify-content-center pb-4">
          <div className="col-md-12 heading-section text-center ">
            <h2 className="mb-4">Best Place Destination</h2>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-3 ">
        		<div className="project-destination">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/place-1.jpg)"}}>
        				<div className="text">
        					<h3>Singapore</h3>
        					<span>8 Tours</span>
        				</div>
        			</a>
        		</div>
        	</div>
        	<div className="col-md-3 ">
        		<div className="project-destination">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/place-2.jpg)"}}>
        				<div className="text">
        					<h3>Canada</h3>
        					<span>2 Tours</span>
        				</div>
        			</a>
        		</div>
        	</div>
        	<div className="col-md-3 ">
        		<div className="project-destination">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/place-3.jpg)"}}>
        				<div className="text">
        					<h3>Thailand</h3>
        					<span>5 Tours</span>
        				</div>
        			</a>
        		</div>
        	</div>
        	<div className="col-md-3 ">
        		<div className="project-destination">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/place-4.jpg)"}}>
        				<div className="text">
        					<h3>Autralia</h3>
        					<span>5 Tours</span>
        				</div>
        			</a>
        		</div>
        	</div>
        </div>
    	</div>
    </section>

    <section className="ftco-section ftco-no-pt">
    	<div className="container">
    		<div className="row justify-content-center pb-4">
          <div className="col-md-12 heading-section text-center ">
            <h2 className="mb-4">Tour Destination</h2>
          </div>
        </div>
        <div className="row">
        	<div className="col-md-4 ">
        		<div className="project-wrap">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/destination-1.jpg)"}}></a>
        			<div className="text p-4">
        				<span className="price">$300/person</span>
        				<span className="days">8 Days Tour</span>
        				<h3><a href="#">Bali, Indonesia</a></h3>
        				<p className="location"><span className="ion-ios-map"></span> Bali, Indonesia</p>
        				<ul>
        					<li><span className="flaticon-shower"></span>2</li>
        					<li><span className="flaticon-king-size"></span>3</li>
        					<li><span className="flaticon-mountains"></span>Near Mountain</li>
        				</ul>
        			</div>
        		</div>
        	</div>
        	<div className="col-md-4 ">
        		<div className="project-wrap">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/destination-2.jpg)"}}></a>
        			<div className="text p-4">
        				<span className="price">$300/person</span>
        				<span className="days">10 Days Tour</span>
        				<h3><a href="#">Bali, Indonesia</a></h3>
        				<p className="location"><span className="ion-ios-map"></span> Bali, Indonesia</p>
        				<ul>
        					<li><span className="flaticon-shower"></span>2</li>
        					<li><span className="flaticon-king-size"></span>3</li>
        					<li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
        				</ul>
        			</div>
        		</div>
        	</div>
        	<div className="col-md-4 ">
        		<div className="project-wrap">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/destination-3.jpg)"}}></a>
        			<div className="text p-4">
        				<span className="price">$300/person</span>
        				<span className="days">7 Days Tour</span>
        				<h3><a href="#">Bali, Indonesia</a></h3>
        				<p className="location"><span className="ion-ios-map"></span> Bali, Indonesia</p>
        				<ul>
        					<li><span className="flaticon-shower"></span>2</li>
        					<li><span className="flaticon-king-size"></span>3</li>
        					<li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
        				</ul>
        			</div>
        		</div>
        	</div>

        	<div className="col-md-4 ">
        		<div className="project-wrap">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/destination-4.jpg)"}}></a>
        			<div className="text p-4">
        				<span className="price">$300/person</span>
        				<span className="days">8 Days Tour</span>
        				<h3><a href="#">Bali, Indonesia</a></h3>
        				<p className="location"><span className="ion-ios-map"></span> Bali, Indonesia</p>
        				<ul>
        					<li><span className="flaticon-shower"></span>2</li>
        					<li><span className="flaticon-king-size"></span>3</li>
        					<li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
        				</ul>
        			</div>
        		</div>
        	</div>
        	<div className="col-md-4 ">
        		<div className="project-wrap">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/destination-5.jpg)"}}></a>
        			<div className="text p-4">
        				<span className="price">$300/person</span>
        				<span className="days">10 Days Tour</span>
        				<h3><a href="#">Bali, Indonesia</a></h3>
        				<p className="location"><span className="ion-ios-map"></span> Bali, Indonesia</p>
        				<ul>
        					<li><span className="flaticon-shower"></span>2</li>
        					<li><span className="flaticon-king-size"></span>3</li>
        					<li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
        				</ul>
        			</div>
        		</div>
        	</div>
        	<div className="col-md-4 ">
        		<div className="project-wrap">
        			<a href="#" className="img" style={{backgroundImage: "url(/assets/images/destination-6.jpg)"}}></a>
        			<div className="text p-4">
        				<span className="price">$300/person</span>
        				<span className="days">7 Days Tour</span>
        				<h3><a href="#">Bali, Indonesia</a></h3>
        				<p className="location"><span className="ion-ios-map"></span> Bali, Indonesia</p>
        				<ul>
        					<li><span className="flaticon-shower"></span>2</li>
        					<li><span className="flaticon-king-size"></span>3</li>
        					<li><span className="flaticon-sun-umbrella"></span>Near Beach</li>
        				</ul>
        			</div>
        		</div>
        	</div>
        </div>
    	</div>
    </section>
    <RecentPost />
    </>
  )
}

export default Home
import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import resume from '../assets/images/SiteResume.pdf'
import thumb01 from '../assets/images/thumbs/01.jpg'
import thumb02 from '../assets/images/thumbs/02.jpg'
import thumb03 from '../assets/images/thumbs/03.jpg'
import thumb04 from '../assets/images/thumbs/04.jpg'
import thumb05 from '../assets/images/thumbs/05.jpg'
import thumb06 from '../assets/images/thumbs/06.jpg'

import full01 from '../assets/images/fulls/01.jpg'
import full02 from '../assets/images/fulls/02.jpg'
import full03 from '../assets/images/fulls/03.jpg'
import full04 from '../assets/images/fulls/04.jpg'
import full05 from '../assets/images/fulls/05.jpg'
import full06 from '../assets/images/fulls/06.jpg'

const DEFAULT_IMAGES = [
    { id: '1', src: 'https://pwa-talk.herokuapp.com/', thumbnail: thumb05, caption: 'Talk To Us', description: 'Under construction hosting platform for an up-and-coming political/social podcast run by friends and scholars.'},
     { id: '2', src: 'https://determined-tesla-5921bc.netlify.com/', thumbnail: thumb04, caption: 'Asbury Brass', description: 'The buisness website for a local brass ensemble located in Asbury, New Jersey'},
     { id: '3', src: 'https://suspicious-goldstine-a73bca.netlify.com/', thumbnail: thumb03, caption: 'Cats Cant Draw', description: 'Comission portfolio for Jess, a NYC based cartoonist/artist'},

    
    // { id: '2', src: 'https://abuse-cycle.herokuapp.com/', thumbnail: thumb04, caption: 'Abuse is a Cycle', description: 'Under construction hosting platform for a free resource aimed at arming the victims of violent abuse with the tools they need to escape the cycle.'},
    // { id: '3', src: 'https://democratic-dj-app.herokuapp.com/', thumbnail: thumb03, caption: 'Democratic DJ', description: 'A collaborative playlist builder using the Spotify API and Next.js'},
    { id: '4', src: 'https://georgerohn.neocities.org/#hero', thumbnail: thumb02, caption: 'RC Landscaping', description: 'A website built to showcase the work of a local landscaping company.'}
    
  
    //  { id: '2', src: full02, thumbnail: thumb02, caption: 'Photo 2', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
   // { id: '3', src: full03, thumbnail: thumb03, caption: 'Photo 3', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    //{ id: '4', src: full04, thumbnail: thumb04, caption: 'Photo 4', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    //{ id: '5', src: full05, thumbnail: thumb05, caption: 'Photo 5', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'},
    //{ id: '6', src: full06, thumbnail: thumb06, caption: 'Photo 6', description: 'Lorem ipsum dolor sit amet nisl sed nullam feugiat.'}
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "George's Portfolio"
        const siteDescription = "A humble developer's place of zen"
        
        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="one">
                        <header className="major">
                            <h2>I am a web developer who whiles away the time helping people make clean, beautiful websites for their hobbies, interests, and buisness.</h2>
                        </header>
                        <p>This is a gallery to showcase my work as a developer and to facilitate contact. All of my websites are designed to make a clean, clear presentation of the information, product, or entertainment. I want to create an internet designed for the end-user.</p>
                        <ul className="actions">
                            <li><a href="SiteResume.pdf" target="_blank" className="button">My Resume</a></li>
                        </ul>
                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                        {/* <ul className="actions">
                            <li><a href="" className="button">Full Portfolio</a></li>
                        </ul> */}
                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>If you have any questions or would like to start designing your own webapp or site, feel free to get in contact.</p>
                        <div className="row">
                            <div className="8u 12u$(small)">
                                <form method="post" name="contact" data-netlify="true" data-netlify-honeypot="bot-field">
                                <input type="hidden" name="form-name" value="contact" />
                                <input type="hidden" name="bot-field" />
                                    <div className="row uniform 50%">
                                        <div className="6u 12u$(xsmall)"><input type="text" name="name" id="name" placeholder="Name" /></div>
                                        <div className="6u 12u$(xsmall)"><input type="email" name="email" id="email" placeholder="Email" /></div>
                                        <div className="12u"><textarea name="message" id="message" placeholder="Message" rows="4"></textarea></div>
                                        
                                    </div>
                                    <ul className="actions">
                                    <li><input type="submit" value="Send Message" className="special" method="post" enctype="text/plain" /></li>
                                </ul>
                                </form>
                                
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        Brick, New Jersey<br />
                                        United States
                                    </li>
                                    {/* <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        732-330-2694
                                    </li> */}
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="mailto:ContactDesignGrove@gmail.com" >Contact Me</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex
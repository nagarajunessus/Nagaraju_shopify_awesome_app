import React from 'react'
import { Grid } from '@shopify/polaris';
function Footer() {
    return (
        <footer className="footers">
            <div className="container">
                <div className="footer-things">
                    <Grid>
                        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
                            <div className="footer-left">
                                <img src="image/logo (1) 3.png" />
                                <p className="para mt-2">Auden group of institutions is committed to provide quality education to
                                    our students to help them to develop as good and responsible citizens.</p>
                            </div>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 4, xl: 6 }}>
                            <div className="foot-content1">
                                <h5>Get in Touch</h5>
                                <div className="Git">
                                    <img src="image/location_on.png" />
                                    <p className="p1">#6, 7th block Hosakerehalli,BSK III Stage,Bangalore-560085</p>
                                </div>
                                <div className="Git">
                                    <img src="image/email.png" />
                                    <p className="p2">enquiry@audenschools.com</p>
                                </div>
                                <div className="Git">
                                    <img src="image/call.png" />
                                    <p className="p3">+91-80 2672 2888 / 080 2672 3955</p>
                                </div>
                            </div>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
                            <div className="foot-content2">
                                <h5>Admission Process</h5>
                                <p>Lorem ipsum dolor sit amet,
                                    consec tetur adipiscing elit,
                                    sed do eiusmod.</p>
                            </div>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 6 }}>
                            <div className="foot-content3">
                                <h5>Join us</h5>
                                <p>Your Email</p>
                                <input type="email" placeholder="Enter your email" />
                                <button className="btn btn-primary">Subscribe</button>
                            </div>
                        </Grid.Cell>

                    </Grid>
                </div>
                <div className="Copyright">
                    <Grid>
                        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 10, xl: 10 }}>
                            <div className="col-xl-10 col-lg-10">
                                <p className="foot-last">Copyright &copy; 2020 Auden School | All Rights Reserved</p>
                            </div>
                        </Grid.Cell>
                        <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 2, xl: 2 }}>
                            <div className="footer-img">
                                <img src="image/Facebook.png" alt="" />
                                <img src="image/Twitter.png" alt="" />
                                <img src="image/Instagram.png" alt="" />
                                <img src="image/LinkedIn.png" alt="" />
                                <img src="image/YouTube.png" alt="" />
                            </div>
                        </Grid.Cell>
                    </Grid>
                </div>
            </div>
        </footer>
    )
}

export default Footer

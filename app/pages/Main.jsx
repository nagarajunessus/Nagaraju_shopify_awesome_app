import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Grid } from '@shopify/polaris';
function Main() {
    return (
        <>
        <Header/>
        <main>
            <section className="Banner-section">
                <div className="image-box">
                    <h1>Clubs & Societies</h1>
                    <p>Our clubs and societies provide the perfect avenue for students to grow, connect, and make the most
                        of their school experience.</p>
                </div>
            </section>

            <section className="pt-5">
                <div className="Clubs">
                    <h1>Clubs: Where Passions Thrive and Dreams Come Alive.</h1>
                </div>
            </section>

            <section className="gallery">
                <div className="container">
                    <div className="Full-gallery">
                        <Grid>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
                                <div className="gallery-item images">
                                    <a href="/image/children-making-robot.jpg">
                                        <img src="/image/children-making-robot.jpg" className="img-fluid image1" alt="" />
                                        <div className="overlay1">
                                            <div className="text">
                                                Robotics
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
                                <div className="gallery-item images">
                                    <a href="/image/teen-modern-ballet-dancer.jpg">
                                        <img src="/image/teen-modern-ballet-dancer.jpg" className="img-fluid image2" alt="" />
                                        <div className="overlay2">
                                            <div className="text">
                                                Contyemporary Dance
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
                                <div className="gallery-item images">
                                    <a href="/image/happy-girl-peeking-from-red-curtain-stage.jpg">
                                        <img src="/image/happy-girl-peeking-from-red-curtain-stage.jpg"
                                            className="img-fluid image3" alt="" />
                                        <div className="overlay3">
                                            <div className="text">
                                                Theatre / Drama
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
                                <div className="gallery-item images">
                                    <a
                                        href="/image/kids-music-concept-cute-little-indian-kids-playing-musical-instruments-as-team-band-white-background.jpg">
                                        <img src="/image/kids-music-concept-cute-little-indian-kids-playing-musical-instruments-as-team-band-white-background.jpg"
                                            className="img-fluid image4" alt="" />
                                        <div className="overlay4">
                                            <div className="text">
                                                Music
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Grid.Cell>
                        </Grid>

                        <Grid>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
                                <div className="gallery-item images">
                                    <a
                                        href="/image/cheerful-little-boy-chef-s-hat-apron-is-preparing-vegetables-cooking.jpg">
                                        <img src="/image/cheerful-little-boy-chef-s-hat-apron-is-preparing-vegetables-cooking.jpg"
                                            className="img-fluid image5" alt="" />
                                        <div className="overlay5">
                                            <div className="text">
                                                Cooking / Baking
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
                                <div className="gallery-item images">
                                    <a href="/image/indian-school-child-doing-tree-plantation.jpg">
                                        <img src="/image/indian-school-child-doing-tree-plantation.jpg"
                                            className="img-fluid image6" alt="" />
                                        <div className="overlay6">
                                            <div className="text">
                                                Gardening and Environmental
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
                                <div className="gallery-item images">
                                    <a
                                        href="/image/looking-side-little-schoolboy-speaks-loudspeaker-points-side-isolated-purple-wall.jpg">
                                        <img src="/image/looking-side-little-schoolboy-speaks-loudspeaker-points-side-isolated-purple-wall.jpg"
                                            className="img-fluid image7" alt="" />
                                        <div className="overlay7">
                                            <div className="text">
                                                Public Speaking
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Grid.Cell>
                            <Grid.Cell columnSpan={{ xs: 6, sm: 3, md: 3, lg: 3, xl: 6 }}>
                                <div className="gallery-item images">
                                    <a href="/image/young-kid-playing-chess.jpg">
                                        <img src="/image/young-kid-playing-chess.jpg" className="img-fluid image8" alt="" />
                                        <div className="overlay8">
                                            <div className="text">
                                                Chess
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            </Grid.Cell>
                        </Grid>
                    </div>

                </div>
            </section>
        </main>
        <Footer/>
        </>
    )
}

export default Main

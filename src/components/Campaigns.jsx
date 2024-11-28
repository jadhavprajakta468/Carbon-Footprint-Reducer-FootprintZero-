import React from "react";
import './Campaigns.css';
import hand from './images/hand-touching-tree-moss-close-up.jpg';
import ocean from './images/Ocean.png';
import air from './images/CleanAir.png';
import beach from './images/CleanBeach.png';
import energy from './images/Enery.png';
import back2 from './images/back2.jpg';

const Campaign = () => {
    return (
        <div className="comp-body">

            <section className="home" id="home" style={{
                backgroundImage: `url(${back2})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh'
            }} />

            <h1 className="heading" style={{ textAlign: 'center', fontSize: '5.5rem', color: '#ffffff', paddingTop: '2rem', padding: '0.5rem', marginBottom: '1rem' }}>
                <i className="fas fa-quote-left"> "Campaigns" </i>
            </h1>

            <section className="post" id="post">
                <h1 className="heading" style={{ textAlign: 'center', fontSize: '5.5rem', color: '#ffffff', paddingTop: '2rem', padding: '0.5rem', marginBottom: '2rem' }}>
                <i className="fas fa-quote-left"> "Ongoing Environmental Campaigns"</i>
                </h1>

                <div className="box-container">
                    <div className="box">
                        <img src={hand} alt="Campaign Image" />
                        <div className="content">
                            <span><i className="fas fa-calendar">Jan 2, 2021</i> </span>
                            <h2 className="head2">Save The Forests</h2>
                            <p><strong>Description:</strong> A campaign to promote tree plantation and reduce deforestation.</p>
                            <p><strong>Start Date:</strong> 2024-01-01</p>
                            <p><strong>End Date:</strong> 2024-12-31</p>
                            <p><strong>Target Goal:</strong> 10,000 trees planted</p>
                            <p><strong>Progress:</strong> 60% complete</p>
                            <p><strong>Status:</strong> Active</p>
                            <a href="https://friendoftheearth.org/conservation-project/save-the-forests/" target="_blank" rel="noopener noreferrer">
                                <button className="btn">Read More</button>
                            </a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={ocean} alt="Campaign Image" />
                        <div className="content">
                            <span><i class="fas fa-calendar">Jan 3, 2021</i> </span>
                            <h2 className="head2">Plastic Free Oceans</h2>
                            <p><strong>Description:</strong> Efforts to clean up ocean pollution by reducing plastic waste.</p>
                            <p><strong>Start Date:</strong> 2024-03-01</p>
                            <p><strong>End Date:</strong> 2024-09-01</p>
                            <p><strong>Target Goal:</strong> Collect 5 tons of plastic waste</p>
                            <p><strong>Progress:</strong> 35% complete</p>
                            <p><strong>Status:</strong> Active</p>
                            <a href="https://plasticfreeoceans.org/" target="_blank" rel="noopener noreferrer">
                                <button className="btn">Read More</button>
                            </a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={air} alt="Campaign Image" />
                        <div className="content">
                            <span><i class="fas fa-calendar">Jan 8, 2021</i> </span>
                            <h2 className="head2">Clean Air Initiative</h2>
                            <p><strong>Description:</strong> Focused on reducing air pollution in urban areas.</p>
                            <p><strong>Start Date:</strong> 2024-05-01</p>
                            <p><strong>End Date:</strong> 2024-11-01</p>
                            <p><strong>Target Goal:</strong> Reduce pollution by 20%</p>
                            <p><strong>Progress:</strong> 50% complete</p>
                            <p><strong>Status:</strong> Active</p>
                            <a href="https://climateaction.unfccc.int/Initiatives?id=Clean_Air_Initiative" target="_blank" rel="noopener noreferrer">
                                <button className="btn">Read More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="post" id="post">
                <h1 className="heading" style={{ textAlign: 'center', fontSize: '5.5rem', color: '#ffffff', paddingTop: '2rem', padding: '0.5rem', marginTop: '2rem', marginBottom: '2rem' }}>
                 <i className="fas fa-quote-left"> "Closed Campaigns" </i>
                </h1>


                <div className="box-container">
                    <div className="box">
                        <img src={beach} alt="Campaign Image" />
                        <div className="content">
                            <span><i class="fas fa-calendar">Jan 2, 2021</i> </span>
                            <h2 className="head2">Clean the Beaches</h2>
                            <p><strong>Description:</strong> Aimed at cleaning up beaches across the country.</p>
                            <p><strong>Start Date:</strong> 2023-06-01</p>
                            <p><strong>End Date:</strong> 2023-12-01</p>
                            <p><strong>Target Goal:</strong> 2 tons of plastic collected in one year</p>
                            <p><strong>Progress:</strong> 100% complete</p>
                            <p><strong>Status:</strong> Closed</p>
                            <a href="https://currentaffairs.adda247.com/bhupendra-yadav-launches-clean-the-beach-campaign-2024-in-mumbai/" target="_blank" rel="noopener noreferrer">
                                <button className="btn">Read More</button>
                            </a>
                        </div>
                    </div>

                    <div className="box">
                        <img src={energy} alt="Campaign Image" />
                        <div className="content">
                            <span><i class="fas fa-calendar">Jan 3, 2021</i> </span>
                            <h2 className="head2">Energy Conservation</h2>
                            <p><strong>Description:</strong> Focused on reducing energy usage in cities.</p>
                            <p><strong>Start Date:</strong> 2023-08-01</p>
                            <p><strong>End Date:</strong> 2023-10-01</p>
                            <p><strong>Target Goal:</strong> Reduce energy consumption by 15%</p>
                            <p><strong>Progress:</strong> 100% complete</p>
                            <p><strong>Status:</strong> Closed</p>
                            <a href="https://www.mygov.in/campaigns/energy-conservation/" target="_blank" rel="noopener noreferrer">
                                <button className="btn">Read More</button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

          
        </div>
    );
};

export default Campaign;
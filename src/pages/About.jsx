import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import './About.scss'
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const About = () => {
    return (
        <div className="about-container">
            <Navbar />
            <div className="about-wrapper">
                <h3 className="abt-heading">About us</h3>
                <p className="abt-text">
                    ETark is an automated complaint resolution platform for smartphone complaints. We help in resolving both technical and non-technical smartphone problems via. our service offerings. ETark was conceptualized after identifying the plight of hapless smartphone customers and the inefficiency of the service centers.
                </p>
                <div className="abt-ques">
                    How ETark helps customers?
                </div>
                <h4 className="resolve-heading">
                    Resolving technical problems :
                </h4>
                <p className="resolve-text">
                    Having a technical problem with your smartphone can be disastrous because unlike any other gadget, a smartphone lets you stay connected with the world and manage all your electronic records. The current approaches that a user usually takes :
                </p>
                <Accordion className="accordian">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="acc-header"
                    >
                        <div className="acc-head">
                            Visit an authorized service center
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="acc-details">
                        <div className="acc-top">
                            While an authorized service center is always recommended, but as a user, you don’t know if:
                        </div>
                        <ol type="A" className="acc-ol">
                            <li className="acc-li">
                                Parts are available at the service center to service your device
                            </li>
                            <li className="acc-li">
                                Your device would be considered within warranty by the service center
                            </li>
                            <li className="acc-li">
                                The exact problem in your device and the price to be paid to fix that
                            </li>
                        </ol>
                        <div className="acc-bottom">
                            All this demands you to visit the service center and wait in a queue with other customers which can often take hours with the possibility of parts not available or the device not considered within warranty by the service center or the quoted price of servicing out of your budget!
                        </div>
                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordian">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="acc-header"
                    >
                        <div className="acc-head">
                            Visit an unauthorized service center
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="acc-details">
                        <div className="acc-top">
                            Although an unauthorized service center might seem light on your pocket, this route is never recommended because :
                        </div>
                        <ul type="A" className="acc-ol">
                            <li className="acc-li">
                                Due to the poor quality of servicing, they often result in frequent annual repairs for the same issue or some other problem thus making the actual cost of repair for that phone way higher than the cost of repair by an authorized service center
                            </li>
                            <li className="acc-li">
                                Your personal data could be retrieved from your device even if you have removed the same from your device. So due to low accountability of unauthorized service centers, data could be stolen from your device during servicing.
                            </li>

                        </ul>

                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordian">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="acc-header"
                    >
                        <div className="acc-head">
                            Book for a home visit repair service
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="acc-details">
                        <div className="acc-top">
                            Home visit repair services are quite popular nowadays due to the convenience of home repair that they promise but this should be avoided due to the following reasons:
                        </div>
                        <ul type="A" className="acc-ol">
                            <li className="acc-li">
                                Most of the home repair services don’t have any authorization from the device manufacture to provide servicing, thus the accountability and quality of servicing is low
                            </li>
                            <li className="acc-li">
                                Many a times your device demands a part replacement which may not be available for the home visit repair agent at that point and post their inspection of the device at your location, they might take your device to their service center thus causing an additional delay in the servicing of the device
                            </li>

                        </ul>

                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordian">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="acc-header"
                    >
                        <div className="acc-head">
                            Device Insurance companies
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="acc-details">
                        <div className="acc-top">
                            Although device Insurance companies promise to insure your device from future damage or malfunctioning:
                        </div>

                        <div className="acc-bottom">
                            They often result in long waiting time to get clearance from the smartphone manufacturer to get the ensuing servicing covered which offsets the cost savings that they promise through their insurance
                        </div>
                        <div className="acc-bottom">
                            All these approaches have their own share of flaws.
                        </div>
                        <div className="acc-bottom">
                            ETark firmly believes that the best way to solve any technical issue is through authorized service centers only provided the inefficiencies of the service centers are removed and the customer doesn’t have to go through any hassle. This is exactly where we step in and we ensure that both the customer and the service center are seamlessly connected!
                        </div>
                    </AccordionDetails>
                </Accordion>
                <h4 className="resolve-heading">
                    Resolving non-technical problems :
                </h4>
                <p className="resolve-text">
                    Having a technical problem with your smartphone can be disastrous because unlike any other gadget, a smartphone lets you stay connected with the world and manage all your electronic records. The current approaches that a user usually takes :
                </p>
                <p className="resolve-text">
                    The ideal way to solve this is to reach out to the seller (e-commerce firm/ offline retailer) or the device manufacturer (e.g. Samsung, Apple etc.). However a customer’s voice can go unheard in a discussion with the other party. So to lend a strength to the customer’s voice, we do an instant analysis of his/ her complaint and share certain reports with him/ her which can help identify the merit of the complaint/ grievance.
                </p>
                <Accordion className="accordian">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="acc-header"
                    >
                        <div className="acc-head">
                            Chances of winning
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="acc-details">
                        <div className="acc-bottom">
                            Chances of winning tells you how likely you are to win in a consumer court had the complaint been filed there
                        </div>

                        <div className="acc-bottom">
                            Or Alternatively,
                        </div>
                        <div className="acc-bottom">
                            How likely you are to win in a negotiation with the other party (device manufacturer or seller) by quoting your winning chances in a consumer court as a reference
                        </div>

                    </AccordionDetails>
                </Accordion>
                <Accordion className="accordian">
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                        className="acc-header"
                    >
                        <div className="acc-head">
                            Expected compensation
                        </div>
                    </AccordionSummary>
                    <AccordionDetails className="acc-details">
                        <div className="acc-bottom">
                            Expected compensation tells you what compensation (free servicing, product/ part replacement or monetary compensation) you are likely to get from the other party had your complaint been filed in a consumer court
                        </div>

                        <div className="acc-bottom">
                            Or Alternatively,
                        </div>
                        <div className="acc-bottom">
                            what compensation (free servicing, product/ part replacement) you are likely to get from the other party in a negotiation
                        </div>

                    </AccordionDetails>
                </Accordion>
            </div>
        </div>
    )
}

export default About

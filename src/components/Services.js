import React from 'react'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'

function Services() {
    return <Card id="services" style={{ width: '95%', margin: '20px auto' }}>
        <CardContent>
            <h1 style={{ marginTop: '12px' }}>Services</h1>
            <h2 className="services">Why a Site or App?</h2>
            <p>
                In today’s website market (Squarespace, Wix, Webflow, etc.) you may be thinking, “Why would I even need a developer?” Simple. A non-developer’s biggest hurdle is always that they don’t know how to code. These companies know that and how to lock you into an overpriced plan. The truth is, their templates: 1) lack customization and uniqueness, 2) suffer from poor performance, and 3) utilize tools and systems that are more frustrating and time-consuming than potentially coding it yourself.
            </p>
            <p>
                I think business owners deserve better. Your website is everyone’s first impression of your business, not something you want to settle on.
            </p>

            <h2 className="services">Basic Website</h2>
            <p>
                This is the most “no frills” option – great for someone who may even want to update the site themselves. The design will be all your own, though I use frameworks like Materialize CSS and Bootstrap to speed up development. [ <a href="https://codepen.io/christinavoudouris/pen/ZEpMOqO" target="_blank" rel="noopener noreferrer" alt="Small Business Starter">View a sample site I created</a> ]
            </p>

            <h2 className="services">React App / Website</h2>
            <p>
                This type of website is really an app built significantly with Javascript code, allowing for more speed and advanced customizations. You can also add a database in the future to create a MERN stack app. This site is a React app!
            </p>

            <h2 className="services">MERN Stack App / Website (Full Stack Development)</h2>
            <p>
                This option adds a MongoDB database and Node server to a React app. It is perfect if you want people to register/login to your site or you need to store and/or display data. [ <a href="https://mealtracknfind.christinavoudouris.com" target="_blank" rel="noopener noreferrer" alt="Meal Track N Find">View a site I created</a> ]
            </p>

            <h2 className="services">Full Stack React &amp; WordPress</h2>
            <p>
                If you already have a WordPress site you can still use it to write posts and pages! Connecting to the WordPress API will allow you to feed your content to a React app, reaping the benefits of a faster site. The 'projects' section is a good example.
            </p>

            <h2 className="services">Not sure what’s best for you?</h2>
            <p>
                I offer a free initial consultation so we can discuss your plan for a new site or redesign. The point is to pick the most efficient plan and not upsell you into more than you might need.
            </p>

            <h2 className="services">Beyond Development: Hosting &amp; Maintenance</h2>
            <p>
                I can either maintain your site for an ongoing fee, or conduct a training so you can manage it on your own. If you need hosting: basic sites &amp; apps are FREE to host on Netlify; the only small expense is buying a domain (usually $12-$15 per year). There are many choices available for full stack apps, which we can discuss.
            </p>
        </CardContent>
    </Card>
}

export default Services
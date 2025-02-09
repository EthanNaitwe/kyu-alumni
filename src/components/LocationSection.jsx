import React from 'react'

const LocationSection = () => {
    return (
        <section className="u-google-map">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d997.4363458680216!2d32.63172486443822!3d0.34644579624034344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMMKwMjAnNDcuMyJOIDMywrAzNyc1NS42IkU!5e0!3m2!1sen!2sug!4v1738361392712!5m2!1sen!2sug"
                width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"></iframe>
        </section>
    )
}

export default LocationSection;

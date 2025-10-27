import React from 'react'
import MarqueeItem from './MarqueeItem';

const ServicesInfo = () => {
    const items = [
        { icon: "images/client-logo/brand-icon1.png", title: "Website Development" },
        // { icon: "images/client-logo/brand-icon2.png", title: "UI/UX Design" },
        { icon: "images/client-logo/brand-icon3.png", title: "App Development" },
        { icon: "images/client-logo/brand-icon5.png", title: "Digital Solution" },
        { icon: "images/client-logo/brand-icon1.png", title: "Website Development" },
        // { icon: "images/client-logo/brand-icon2.png", title: "UI/UX Design" },
        { icon: "images/client-logo/brand-icon3.png", title: "App Development" },
        { icon: "images/client-logo/brand-icon5.png", title: "Digital Solution" },
    ];
    return (
        <>
            <div className="space-medium-ptb">
                <div className="container-fluid p-0">
                    <div className="row g-0">
                        <div className="col-md-12">
                            <div className="marquee-wrapper">
                                <div className="marquee-inner">
                                    {items.map((item, index) => (
                                        <MarqueeItem key={index} icon={item.icon} title={item.title} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ServicesInfo

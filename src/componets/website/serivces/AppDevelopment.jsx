import React from "react";
import { allServices, appDevBanner } from "../../../constant";
import Testimonials from "../../common/Testimonials";

const AppDevelopment = () => {
    const details = allServices[2];

    const splitIntoParagraphs = (text, numParagraphs = 3) => {
        const sentences = text.split(". ").map((sentence) => sentence + ".");
        const chunkSize = Math.ceil(sentences.length / numParagraphs);
        const paragraphs = [];

        for (let i = 0; i < sentences.length; i += chunkSize) {
            paragraphs.push(sentences.slice(i, i + chunkSize).join(" "));
        }

        return paragraphs;
    };

    return (
        <div className="flex flex-col gap-10">
            <img
                data-aos="fade-up"
                src={appDevBanner}
                loading="lazy"
                className="h-[25rem] object-cover rounded-3xl object-center"
                alt="app development"
            />
            <div className="flex flex-col gap-4 md:px-5">
                {/* Service Title */}
                <h2 data-aos="fade-up" className="text-3xl font-semibold">
                    {details.title}
                </h2>

                {/* Service Description */}
                <p data-aos="fade-up" className="description">
                    {splitIntoParagraphs(details.detailContent).map(
                        (paragraph, index) => (
                            <p key={index} className="py-2">
                                {paragraph}
                            </p>
                        )
                    )}
                </p>
                <Testimonials />
            </div>
        </div>
    );
};

export default AppDevelopment;

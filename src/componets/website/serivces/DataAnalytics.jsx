import React from "react";
import { allServices, datadevelopment } from "../../../constant";
import Testimonials from "../../common/Testimonials";

const DataAnalytics = () => {
    const details = allServices[5];

    const splitIntoParagraphs = (text, numParagraphs = 3) => {
        if (!text) return [];
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
                src={datadevelopment}
                loading="lazy"
                className="h-[25rem] object-cover rounded-3xl object-center"
                alt="data analytics"
            />
            <div className="flex flex-col gap-4 md:px-5">
                {/* Service Title */}
                <h2 data-aos="fade-up" className="text-3xl font-semibold">
                    {details?.title || "Data Analytics"}
                </h2>

                {/* Service Description */}
                <p data-aos="fade-up" className="description">
                    {details?.detailContent ? (
                        splitIntoParagraphs(details.detailContent).map(
                            (paragraph, index) => (
                                <p key={index} className="py-2">
                                    {paragraph}
                                </p>
                            )
                        )
                    ) : (
                        <p>Content not available.</p>
                    )}
                </p>
                <Testimonials />
            </div>
        </div>
    );
};

export default DataAnalytics;

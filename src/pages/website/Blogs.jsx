import React from "react";
import { Link } from "react-router-dom";
import { blogs, servicesbanner } from "../../constant";
import { BsArrowRight } from "react-icons/bs";
import SEO from "../../componets/common/SEO";

const Blogs = () => {
    return (
        <>
            <SEO
                title="Blogs"
                description="Stay updated with the latest trends, technologies, and innovations in the IT world with BIIRONIX TECH's insights."
                keywords="IT Blogs, Tech Trends, AI Insights, Web Development Trends, App Development Tips"
            />
            <div
                className="h-[50vh] relative flex items-center justify-center bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${servicesbanner})` }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="heading-1 font-bold mb-4" data-aos="fade-up">
                        Our Latest <span className="text-primary">Insights</span>
                    </h1>
                    <p
                        className="desc max-w-2xl mx-auto !text-gray-200"
                        data-aos="fade-up"
                        data-aos-delay="100"
                    >
                        Stay updated with the latest trends, technologies, and innovations in the IT world.
                    </p>
                </div>
            </div>

            <section className="py-[5rem] bg-white">
                <div className="wrapper">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogs.map((blog, index) => (
                            <div
                                key={blog.id}
                                className="group bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-300"
                                data-aos="fade-up"
                                data-aos-delay={index * 100}
                            >
                                <div className="relative h-60 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {blog.category}
                                    </div>
                                </div>
                                <div className="p-6 flex flex-col gap-4">
                                    <div className="flex items-center justify-between text-sm text-gray-500">
                                        <span>{blog.date}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-600 line-clamp-3 text-sm leading-relaxed">
                                        {blog.shortDesc}
                                    </p>
                                    <Link
                                        to={`/blogs/${blog.id}`}
                                        className="flex items-center gap-2 text-primary font-semibold mt-auto group/btn w-fit"
                                    >
                                        Read More
                                        <BsArrowRight className="group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Blogs;

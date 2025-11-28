import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { blogs, defaultBanner } from "../../constant";
import { BsArrowLeft, BsCalendar3, BsFolder } from "react-icons/bs";
import SEO from "../../componets/common/SEO";

const BlogDetails = () => {
    const { id } = useParams();
    const blog = blogs.find((b) => b.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!blog) {
        return (
            <div className="h-screen flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-bold text-gray-800">Blog Post Not Found</h2>
                <Link to="/blogs" className="primary-btn">
                    Back to Blogs
                </Link>
            </div>
        );
    }

    return (
        <>
            <SEO
                title={blog.title}
                description={blog.shortDesc}
                keywords={`${blog.category}, BIIRONIX TECH, Blog`}
                image={blog.image}
                url={`https://biironixtech.com/blogs/${blog.id}`}
            />
            <div
                className="h-[60vh] relative flex items-center justify-center bg-cover bg-center bg-no-repeat fixed-bg"
                style={{ backgroundImage: `url(${defaultBanner})` }}
            >
                <div className="absolute inset-0 bg-black/70"></div>
                <div className="relative z-10 wrapper text-center text-white">
                    <div className="flex items-center justify-center gap-4 mb-6 text-sm md:text-base text-gray-300">
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                            <BsFolder className="text-primary" />
                            <span>{blog.category}</span>
                        </div>
                        <div className="flex items-center gap-2 bg-white/10 px-4 py-1.5 rounded-full backdrop-blur-sm">
                            <BsCalendar3 className="text-primary" />
                            <span>{blog.date}</span>
                        </div>
                    </div>
                    <h1 className="heading-1 font-bold max-w-4xl mx-auto leading-tight" data-aos="fade-up">
                        {blog.title}
                    </h1>
                </div>
            </div>

            <section className="py-[5rem] bg-white">
                <div className="wrapper max-w-4xl mx-auto">
                    <Link
                        to="/blogs"
                        className="inline-flex items-center gap-2 text-gray-500 hover:text-primary mb-8 transition-colors font-medium"
                    >
                        <BsArrowLeft /> Back to Blogs
                    </Link>

                    <div className="mb-10 rounded-2xl overflow-hidden shadow-xl">
                        <img src={blog.image} alt={blog.title} className="w-full h-auto object-cover max-h-[500px]" />
                    </div>

                    <div className="prose prose-lg max-w-none text-gray-700">
                        {blog.content}
                    </div>

                    <hr className="my-12 border-gray-200" />

                    {/* Related/Other Blogs Navigation could go here */}
                </div>
            </section>
        </>
    );
};

export default BlogDetails;

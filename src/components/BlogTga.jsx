import React from "react";
import { CiPlay1 } from "react-icons/ci";

const BlogTga = () => {
  const blogs = [
    {
      title: "Places to Visit in Vietnam",
      description:
        "Vietnam is a country full of surprises and one of Southeast Asia's most underrated destinations.",
      buttonLabel: "Read our guide",
      imageUrl: "https://img.freepik.com/free-photo/online-blog_53876-123696.jpg", // Replace with the actual image URL
      buttonLink: "#",
    },
    {
      title: "Our Videos",
      description:
        "Watch our in-depth guides to many of our destinations, profiles of people on the ground, online webinars, and much more.",
      buttonLabel: "Watch videos",
      videoUrl: "https://youtu.be/FYqd567qgno?feature=shared", // Replace with the actual video URL
      buttonLink: "#",
    },
    {
      title: "From the Blog: The Hunza Valley",
      description:
        "The magnificent Hunza Valley has had people like me waxing lyrical for centuries.",
      buttonLabel: "Read post",
      imageUrl: "https://www.shutterstock.com/image-photo/blogging-blog-word-coder-coding-260nw-520314613.jpg", // Replace with the actual image URL
      buttonLink: "#",
    },
  ];

  const handlePlayVideo = (videoUrl) => {
    const match = videoUrl.match(/(?:v=|\/)([0-9A-Za-z_-]{11})/);
    return match ? match[1] : null;
  };

  return (
    <section className="py-10 px-4 lg:px-24">
      <div>
        <h1 className="text-xl sm:text-2xl font-bold text-black text-center uppercase">
          Inspiration at Your Fingertips
        </h1>
        <hr className="border-b-2 border-primary w-48 m-auto mb-8" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white shadow-lg overflow-hidden">
              <div className="relative">
                {blog.videoUrl ? (
                  // Video Background
                  <div
                    className="w-full lg:h-48 h-64 flex items-center justify-center cursor-pointer"
                    onClick={() => handlePlayVideo(blog.videoUrl)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${handlePlayVideo(blog.videoUrl)}/0.jpg`}
                      alt={blog.title}
                      className="w-full lg:h-48 h-64 object-cover rounded-t-md"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
                      <button className="bg-black opacity-70 text-white rounded-full p-4 shadow-lg">
                        <CiPlay1 />
                      </button>
                    </div>
                  </div>
                ) : (
                  // Static Image
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full lg:h-48 h-64 object-cover rounded-t-md"
                  />
                )}
              </div>
              <div className="p-4">
                <h3 className="text-sm font-bold uppercase h-14 mb-2">
                  {blog.title}
                </h3>
                <p className="text-[#424241] font-museo font-light text-xxs mb-4 h-16">
                  {blog.description}
                </p>
                <a
                  href={blog.buttonLink}
                  className="bg-primary text-sm font-semibold text-white px-4 py-2 rounded hover:bg-secordary"
                >
                  {blog.buttonLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogTga;

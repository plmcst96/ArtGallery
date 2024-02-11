import blog from "../assets/blog.png"
import blog1 from "../assets/blog1.png"
import blog2 from "../assets/blog2.png"
import blog3 from "../assets/blog3.png"

const BlogHome = () => {
  return (
    <>
      <h2 className="text-white ml-20" style={{ marginTop: "4em" }}>
        BLOGS__
      </h2>
      <div className="grid lg:grid-cols-4 grid-cols-2 gap-10 mx-20">
        <div className="lg:col-span-2 rounded-lg">
          <img
            src={blog}
            alt="blog"
            className="w-full rounded-lg"
            style={{ height: "300px" }}
          />
          <h4 className="text-white font-bold mt-5">
            A well-chosen language of colors in canvas is like a powerful
            symbolism in modern works of art
          </h4>
          <p className="text-white font-light mt-4">May 28, 2023</p>
        </div>
        <div className="...">
          <img
            src={blog1}
            alt="blog1"
            className="w-full  rounded-lg"
            style={{ height: "300px" }}
          />
          <h4 className="text-white font-bold mt-5">
            From a single image, spaces, products, and words emerge
          </h4>
          <p className="text-white font-light mt-4">April 12, 2023</p>
        </div>
        <div>
          <img
            src={blog2}
            alt="blog2"
            className="w-full rounded-lg"
            style={{ height: "300px" }}
          />
          <h4 className="text-white font-bold mt-5">
            From a single image, spaces, products, and words emerge
          </h4>
          <p className="text-white font-light mt-4">May 12, 2024</p>
        </div>
        <div>
          <img
            src={blog3}
            alt="blog3"
            className="w-full rounded-lg"
            style={{ height: "300px" }}
          />
          <h4 className="text-white font-bold mt-5">
            Change women Art. Social and culture changes.
          </h4>
          <p className="text-white font-light mt-4">February 24, 2024</p>
        </div>
      </div>
    </>
  )
}
export default BlogHome

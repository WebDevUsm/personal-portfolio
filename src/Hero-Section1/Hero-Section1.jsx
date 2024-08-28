import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./Hero-Section1.css";

const Herosection1 = () => {
  const settings = {
    // dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <div>
      <div className="container1">
        <div className="content">
          <h1>About Me</h1>
          <p>
            As a Web Developer, I am responsible Designing and deploying web
            pages, building and maintaining websites, applications, and other
            online platforms. I Focus on user interface, user experience, and
            client-side logic. Concentrates on server-side logic, database
            integration, and API connectivity. Combines both front-end and
            back-end development skills.
          </p>
        </div>
        <div className="skillset">
          <div className="skills">
            <h1>Skills</h1>
            <p>Technologies I've been Working with recently</p>
          </div>

          <div className="skillsetimage">
            <img src="./images/11.png" alt="" />
            <img src="./images/11.png" alt="" />
            <img src="./images/11.png" alt="" />
            <img src="./images/11.png" alt="" />
          </div>
          <div className="skillsetimage">
            <img src="./images/11.png" alt="" />
            <img src="./images/11.png" alt="" />
            <img src="./images/11.png" alt="" />
            <img src="./images/11.png" alt="" />
          </div>


        </div>
{/* 
        <div className="carousal">
          <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4 flex">
            <div className="carousel-item flex">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1572635148818-ef6fd45eb394.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1494253109108-2e30c049369b.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1559181567-c3190ca9959b.webp"
                className="rounded-box"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
                className="rounded-box"
              />
            </div>
          </div>

</div> */}

<div className="card-content">
  <div className="c-info">
  <h1>My Projects</h1>
  <p>Some Things I've Built So Far</p>
  </div>
<Slider {...settings}>



{data.map((d)=>(
  <div className="c-wrap">
    <div className=" Card1 ">
  <div className="image">
<img src={d.img} alt="image"/>

  </div>
  <div className="Title">
<h2>-- {d.name} --</h2>
<p>{d.review}</p>
  </div>
<div className="button">

<button>View Code</button>
</div>
</div>
  </div>

))}
</Slider>
</div>
</div>

</div>



      
  )
}


const data=[
{
name: `Usman Shahid`,
img: `./images/deadpool.jpg`,
review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, fugiat! Placeat consequatur, voluptatum nostrum laboriosam repellat neque modi aliquam amet culpa praesentium architecto, explicabo,`,

},
{
name: `Usman Shahid`,
img: `./images/deadpool.jpg`,
review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, fugiat! Placeat consequatur, voluptatum nostrum laboriosam repellat neque modi aliquam amet culpa praesentium architecto, explicabo,`,

},
{
name: `Usman Shahid`,
img: `./images/deadpool.jpg`,
review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, fugiat! Placeat consequatur, voluptatum nostrum laboriosam repellat neque modi aliquam amet culpa praesentium architecto, explicabo,`,

},
{
name: `Usman Shahid`,
img: `./images/deadpool.jpg`,
review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, fugiat! Placeat consequatur, voluptatum nostrum laboriosam repellat neque modi aliquam amet culpa praesentium architecto, explicabo,`,

},
{
name: `Usman Shahid`,
img: `./images/deadpool.jpg`,
review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, fugiat! Placeat consequatur, voluptatum nostrum laboriosam repellat neque modi aliquam amet culpa praesentium architecto, explicabo,`,

},
{
name: `Usman Shahid`,
img: `./images/deadpool.jpg`,
review: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod, fugiat! Placeat consequatur, voluptatum nostrum laboriosam repellat neque modi aliquam amet culpa praesentium architecto, explicabo,`,

},


]


export default Herosection1;

import React from "react";
import ItemLayout from "./ItemLayout";
import Link from "next/link";

const AboutDetails = () => {
  return (
    <section className="py-20 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6  md:gap-8 w-full">
        <ItemLayout
          className={
            " col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
            <b>Machine Learning Enthusiast</b>
          </h2>
          <p className="font-light  text-xs sm:text-sm md:text-base   ">
          I am deeply passionate about Machine Learning and Deep Learning, constantly seeking to expand my understanding 
          of how data-driven models can transform industries. My interest began with the potential of algorithms to uncover 
          hidden insights and make predictions that can drive impactful decisions. I am fascinated by how ML and DL can 
          solve complex real-world problems, from improving healthcare to optimizing business operations. I love the challenge 
          of continuously learning and experimenting with new techniques, algorithms, and models to stay ahead in this ever-evolving 
          field. As I grow in my career, I am committed to harnessing the power of data to create intelligent solutions that make a 
          difference.  
          </p>
        </ItemLayout>

        <ItemLayout
          className={" col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            2 <sub className="font-semibold text-base">Research Papers</sub>
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            10+{" "}
            <sub className="font-semibold text-base">Projects</sub>
          </p>
        </ItemLayout>

        <ItemLayout className={" col-span-full lg:col-span-12 row-span-2 flex-col items-start"}>
          <center>
            <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
              Experience
            </h2>
          </center>
          <ItemLayout className={"col-span-full"}>
            <img
              className="w-full h-auto"
              src={`https://skillicons.dev/icons?i=tensorflow,python,java,pytorch,opencv,html,css,docker,azure,kafka,mysql,git,github,kubernetes,django,spring,sklearn,hibernate`}
              alt="Skills"
              loading="lazy"
            />
          </ItemLayout>
        </ItemLayout>

        <ItemLayout className={" col-span-full lg:col-span-12 row-span-2 flex-col items-start"}>
          <center>
            <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
              Experience
            </h2>
          </center>

          <ItemLayout className={" col-span-full lg:col-span- row-span-2 flex-col items-start"}>
            <div>
              <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
                <b>Big Data Engineer</b> at Accenture since September 30, 2024
              </h2>
              <p className="font-light  text-xs sm:text-sm md:text-base   ">
              At Accenture, I leverage tools like Hadoop, PySpark, SQL, Talend, 
              and Kafka to process and analyze large datasets. I design and optimize 
              data pipelines, ensuring efficient data integration and contributing to 
              data-driven business solutions. My work aligns with my passion for data science, 
              constantly exploring new methods to enhance data processing and performance. 
              </p>
            </div>
          </ItemLayout>

          
          <ItemLayout className={" col-span-full lg:col-span- row-span-2 flex-col items-start"}>
            <div>
              <h2 className="  text-xl md:text-2xl text-left w-full capitalize">
                <b>Machine Learning Intern</b> at Acmegrade from June 14, 2022 to September 16, 2022
              </h2>
              <p className="font-light  text-xs sm:text-sm md:text-base   ">
                Developed and implemented machine learning methodologies that improved predictive analytics 
                accuracy by 9% and reduced computational costs by 10%. Streamlined operations by creating 
                predictive maintenance software, contributing to improved project efficiency and cost savings.
              </p>
            </div>
          </ItemLayout>
        </ItemLayout>
        
        

      </div>
    </section>
  );
};

export default AboutDetails;

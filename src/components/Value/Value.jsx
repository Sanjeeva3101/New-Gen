import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemState,
  AccordionItemPanel,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "../../utils/accordion";

const Value = () => {
  return (
    <section className="v-wrapper" id="valueSec">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left side */}
        <div className="v-left">
          <div className="image-container">
            <img src="./value.jpg" alt="" />
          </div>
        </div>
        {/* Right side */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Value</span>
          <span className="primaryText">About Us</span>
          <span className="secondaryText">Neu Gen is a creative agency specializing in bringing brands to life through a powerful blend of various services. Founded in 2023, we have been dedicated to helping businesses of all sizes achieve their online presence goals.</span>
        <Accordion
          className="accordian"
          allowMultipleExpanded={false}
          preExpanded={[0]}
        >
          {data.map((item, i) => {
            const [className, setClassName] = useState(null);
            return (
              <AccordionItem className={`accordianItem ${className}`} key={i} uuid={i}>
                <AccordionItemHeading>
                  <AccordionItemButton className="flexCenter accordianButton">
                    <AccordionItemState>
                      {({ expanded }) =>
                        expanded
                          ? setClassName("expanded")
                          : setClassName("collapsed")
                      }
                    </AccordionItemState>
                    <div className="flexCenter icon">{item.icon}</div>
                    <span className="primaryText">{item.heading}</span>
                    <span className="flexCenter icon">
                      <MdOutlineArrowDropDown size={20} />
                    </span>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <p className="secondaryText">{item.detail}</p>
                </AccordionItemPanel>
              </AccordionItem>
            );
          })}
        </Accordion>
      </div>
      </div>
    </section>
  );
};

export default Value;

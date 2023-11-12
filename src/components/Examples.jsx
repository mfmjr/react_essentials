import React from "react";
import { useState } from "react";
import TabButton from "./TabButton";
import { EXAMPLES } from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

const Examples = () => {
  const [selectedTop, setSelectedTop] = useState();

  const handleClick = (e) => {
    setSelectedTop(e.target.textContent);
  };

  return (
    <div>
      <Section id="examples">
        <Tabs
          buttons={
            <>
              <TabButton
                onClick={handleClick}
                isSelected={selectedTop === "Components"}
              >
                Components
              </TabButton>
              <TabButton
                onClick={handleClick}
                isSelected={selectedTop === "JSX"}
              >
                JSX
              </TabButton>
              <TabButton
                onClick={handleClick}
                isSelected={selectedTop === "Props"}
              >
                Props
              </TabButton>
              <TabButton
                onClick={handleClick}
                isSelected={selectedTop === "State"}
              >
                State
              </TabButton>
            </>
          }
        ></Tabs>

        {!selectedTop ? (
          <p>Please select a topic.</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTop].title}</h3>
            <p>{EXAMPLES[selectedTop].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTop].code}</code>
            </pre>
          </div>
        )}
      </Section>
    </div>
  );
};

export default Examples;

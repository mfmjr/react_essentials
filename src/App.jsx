import { Component, useState } from "react";
import { CORE_CONCEPTS } from "./data.js";
import Header from "./components/Header/Header.jsx";
import CoreConcept from "./components/CoreConcept.jsx";
import TabButton from "./components/TabButton.jsx";
import { EXAMPLES } from "./data.js";

function App() {
  const [selectedTop, setSelectedTop] = useState();

  const handleClick = (e) => {
    setSelectedTop(e.target.textContent);
  };

  return (
    <>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            {/* <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]} />
            <CoreConcept {...CORE_CONCEPTS[2]} />
            <CoreConcept {...CORE_CONCEPTS[3]} /> */}

            {CORE_CONCEPTS.map((conceptItem) => (
              <CoreConcept key={conceptItem.title} {...conceptItem} />
            ))}
          </ul>
        </section>

        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton
              onClick={handleClick}
              isSelected={selectedTop === "Components"}
            >
              Components
            </TabButton>
            <TabButton onClick={handleClick} isSelected={selectedTop === "JSX"}>
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
          </menu>

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
        </section>
      </main>
    </>
  );
}

export default App;

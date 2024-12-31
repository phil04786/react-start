import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";

export default function Examples() {
  // console.log("App running");
  const [selectedTopic, setSelectedTopic] = useState();
  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    //console.log(selectedTopic); //Store previous state value IMPORTANT
  }

  // Logic-3:-
  let tabContent = "Please select a topic";
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }
  return (
    <Section id="examples" title="Examples">
      <menu>
        {/* 1-Way  also called Component Composition */}
        {/*             
          Arrow function is the value pass as a value to onSelect. Now the
          right side of the arrow function is executed when the Arrow Function
          is executed. In the below line the Arrow function is define and not
          the code inside the arrow function will be executed and then the
          arrow function is passed as a value to onSelect on the TabButton as
          a Props and when TabButton function is executed because the button
          was clicked its then the handleSelect() inside the arrow function
          will get executed and we can control handleSelect() manually and
          decide how it will be executed. for example passing arugment to
          handleSelect('components')

          Note:- 
          1.) Define a function which is executed on an event.
          2.) How it will be control.
          3.) which argument is to passed.  
           */}
        {/* Identifier:- "components","jsx","props","state" should match with key in Examples array.*/}
        <TabButton
          isSelected={selectedTopic === "components"}
          //   onSelect={() => handleSelect("components")
          onClick={() => handleSelect("components")}
        >
          Components
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "jsx"}
          //   onSelect={() => handleSelect("jsx")}
          onClick={() => handleSelect("jsx")}
        >
          JSX
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "props"}
          //   onSelect={() => handleSelect("props")}
          onClick={() => handleSelect("props")}
        >
          Props
        </TabButton>
        <TabButton
          isSelected={selectedTopic === "state"}
          //   onSelect={() => handleSelect("state")}
          onClick={() => handleSelect("state")}
        >
          State
        </TabButton>
        {/* 2-Way */}
        {/*             
          <TabButton label="Components"></TabButton>
          <TabButton label="JSX"></TabButton>
          <TabButton label="Props"></TabButton>
          <TabButton label="State"></TabButton> */}
      </menu>
      {/* Dynamic Content on TabButton click */}
      {/* You must handle the event in the component that also manages the data that should be changed */}
      {/* {selectedTopic} */}
      {/* Logic-1 */}
      {/*           
        {!selectedTopic ? (
          <p>Please select a topic</p>
        ) : (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )} */}

      {/* Logic-2 */}
      {/* && operator ouput the second value if the condition infront value is true. ->TRICK  */}
      {/*So If we don't have a selected topic means True so  we output second value*/}
      {/*           
        {!selectedTopic && <p>Please select a topic</p>}
        {selectedTopic && (
          <div id="tab-content">
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
              <code>{EXAMPLES[selectedTopic].code}</code>
            </pre>
          </div>
        )} */}

      {/* Logic-3 */}
      {tabContent}
    </Section>
  );
}

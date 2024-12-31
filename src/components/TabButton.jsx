// export default function TabButton(props) {
//   return (
//     <li>
//       <button>{props.children}</button>
//     </li>
//   );
// }

//1-Way:- Object Destructing

export default function TabButton({
  children,
  isSelected,
  /*onSelect*/ ...props
}) {
  // console.log("TabButton running");
  // document.querySelector('button').addEventListener('click',()=>{})
  // Built-in elements like li, button etc. are also just component. Just component are already provided and understood by React. Events are provided as Props like "onClick", etc. to elements or just component. Value provided to Props (onClick) is a function jo ki acts as a Value to onClick event. Don't add () to handleClick we want to use it as value so use handleClick name only.

  // function handlehandleClick() {
  //  console.log("HW")
  // }

  // return (
  //     <li>
  //     <button onClick={handleClick}>{children}</button>
  //   </li>
  // );

  // handleClick() means I want to  execute the function. Every time component is triggered handleClick() is executed.
  //   <li>
  //   <button onClick={handleClick()}>{children}</button>
  // </li>

  //handleClick means React want to  execute the function when button is click. When click event is performed React under the hood will execute the code or perform the event.
  //   <li>
  //   <button onClick={handleClick}>{children}</button>
  // </li>

  // //defining handleClick inside component helps us to pass Props and State to handleFunction() function
  // function handleClick() {
  //   console.log("Hello World");
  // }

  //yaha per function banane se hum menu ke click pe dynamic content change access nahi kar sakte isliye function ko app.jsx me create kiya or custom Component TabButton pe pass kar diya as onSelect use kar ke.
  return (
    <li>
      <button
        className={isSelected ? "active" : undefined}
        onClick={{ /*onSelect*/ ...props }}
      >
        {children}
      </button>
    </li>
  );
}

//2-Way Using label attribute

// export default function TabButton({ label }) {
//   return (
//     <li>
//       <button>{label}</button>
//     </li>
//   );
// }

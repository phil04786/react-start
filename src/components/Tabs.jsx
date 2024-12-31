export default function Tabs({
  children,
  buttons,
  ButtonsContainer = "menu", //Default Prop Values,
  /* buttonsContainer*/
}) {
  // const ButtonsContainer = buttonsContainer;
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}

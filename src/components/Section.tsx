export const Section = (props: JSX.IntrinsicElements["section"]) => (
  <section {...props} className={`md:p-20 p-8 ${props.className || ""}`}>
    {props.children}
  </section>
);

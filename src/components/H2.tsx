export const H2 = (props: JSX.IntrinsicElements["h2"]) => (
  <h2
    {...props}
    className={`text-[2.5rem] font-bold leading-none ${props.className || ""}`}
  >
    {props.children}
  </h2>
);

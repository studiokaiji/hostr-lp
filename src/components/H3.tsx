export const H3 = (props: JSX.IntrinsicElements["h3"]) => (
  <h3
    {...props}
    className={`text-2xl font-semibold leading-none ${props.className || ""}`}
  >
    {props.children}
  </h3>
);

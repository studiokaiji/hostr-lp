export const H1 = (props: JSX.IntrinsicElements["h1"]) => (
  <h1
    {...props}
    className={`text-8xl font-semibold leading-none ${props.className || ""}`}
  >
    {props.children}
  </h1>
);

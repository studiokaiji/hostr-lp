export const Link = (props: JSX.IntrinsicElements["a"]) => (
  <a {...props} className="underline decoration-2">
    {props.children}
  </a>
);

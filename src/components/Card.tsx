export const Card = (props: JSX.IntrinsicElements["div"]) => (
  <div {...props} className={`bg-surface text-text ${props.className || ""}`}>
    {props.children}
  </div>
);

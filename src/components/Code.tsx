export const Code = (
  props: JSX.IntrinsicElements["code"] & { shell?: boolean; sudor?: boolean }
) => (
  <code
    {...props}
    className={`block overflow-scroll whitespace-nowrap border-black bg-secondary border-4 text-white px-3 py-2 leading-normal ${props.children}`}
  >
    {props.shell && (
      <span className="select-none">{props.sudor ? "#" : "$"} </span>
    )}
    {props.children}
  </code>
);

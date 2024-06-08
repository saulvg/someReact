const Title = ({ level = "h6", children = "", className }) => {
  const validLevels = ["h1", "h2", "h3", "h4", "h5", "h6"];

  const TagName = validLevels.includes(level) ? level : "h6";

  return <TagName className={className}>{children}</TagName>;
};

export { Title };

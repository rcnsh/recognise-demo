import React from "react";

interface TitleBarProps {
  leftContent?: React.ReactNode;
  centerContent?: React.ReactNode;
  rightContent?: React.ReactNode;
}

const TitleBar: React.FC<TitleBarProps> = ({
  leftContent,
  centerContent,
  rightContent,
}) => {
  return (
    <div className="flex h-24 w-full items-center bg-transparent px-4">
      <div className="flex flex-1 items-center justify-start">
        {leftContent}
      </div>
      <div className="flex flex-1 items-center justify-center">
        {centerContent}
      </div>
      <div className="flex flex-1 items-center justify-end">{rightContent}</div>
    </div>
  );
};

export default TitleBar;

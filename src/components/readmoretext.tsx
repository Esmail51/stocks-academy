import React, { useState } from "react";

interface ReadMoreTextProps {
  content: string;
  fixedHeight: number;
}

const ReadMoreText: React.FC<ReadMoreTextProps> = ({ content, fixedHeight }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div
        style={{
          maxHeight: isExpanded ? "none" : `${fixedHeight}px`,
          overflow: "hidden",
          position: "relative",
          transition: "max-height 0.3s ease",
        }}
      >
        <p>{content}</p>
      </div>
      <p
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-2 text-blue-600 underline cursor-pointer inline"
      >
        {isExpanded ? "Read Less" : "Read More"}
      </p>
    </div>
  );
};

export default ReadMoreText;

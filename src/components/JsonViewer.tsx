import React, { useState } from 'react';
import './JsonViewer.css';

interface JsonViewerProps {
  data: any;
  defaultExpanded?: boolean;
  indent?: number;
}

interface JsonNodeProps {
  value: any;
  name?: string;
  expanded?: boolean;
  indent?: number;
}

const JsonNode: React.FC<JsonNodeProps> = ({
  value,
  name,
  expanded: initialExpanded = false,
  indent = 0,
}) => {
  const [expanded, setExpanded] = useState(initialExpanded);
  const isObject = value !== null && typeof value === 'object';
  const isArray = Array.isArray(value);
  const isExpandable = isObject && (Object.keys(value).length > 0 || isArray);

  if (!isExpandable) {
    const renderedValue = typeof value === 'string' ? `"${value}"` : String(value);
    return (
      <div style={{ marginLeft: `${indent}px` }}>
        {name && <span className="json-key">{name}:</span>}
        <span className={`json-value json-${typeof value}`}>{renderedValue}</span>
      </div>
    );
  }

  const entries = isArray ? value.map((v, i) => [i, v]) : Object.entries(value);
  const bracket = isArray ? ['[', ']'] : ['{', '}'];

  return (
    <div style={{ marginLeft: `${indent}px` }}>
      <div
        onClick={() => setExpanded(!expanded)}
        style={{ cursor: 'pointer', userSelect: 'none' }}
      >
        <span className="json-bracket">{expanded ? '▼' : '▶'}</span>
        {name && <span className="json-key">{name}:</span>}
        <span className="json-bracket">{bracket[0]}</span>
        {!expanded && <span className="json-ellipsis">...</span>}
      </div>
      {expanded && (
        <>
          {entries.map(([key, val]) => (
            <JsonNode
              key={key}
              value={val}
              name={String(key)}
              expanded={false}
              indent={indent + 20}
            />
          ))}
          <div style={{ marginLeft: `${indent}px` }}>
            <span className="json-bracket">{bracket[1]}</span>
          </div>
        </>
      )}
    </div>
  );
};

export const JsonViewer: React.FC<JsonViewerProps> = ({
  data,
  defaultExpanded = false,
  indent = 0,
}) => {
  return (
    <div className="json-viewer">
      <JsonNode value={data} expanded={defaultExpanded} indent={indent} />
    </div>
  );
};

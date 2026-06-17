import React from 'react';

/**
 * Converts markdown-style text (**bold**) to React elements
 */
export function formatText(text: string): React.ReactNode {
  const parts = text.split(/(\*\*.*?\*\*)/g);

  return parts.map((part, index) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      const content = part.slice(2, -2);
      return <strong key={index} className="font-semibold">{content}</strong>;
    }
    return part;
  });
}

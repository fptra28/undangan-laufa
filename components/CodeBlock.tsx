'use client';

import { ReactNode } from 'react';

interface CodeBlockProps {
  children: ReactNode;
  title?: string;
  language?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export default function CodeBlock({
  children,
  title = 'code.ts',
  language = 'typescript',
  className = '',
}: CodeBlockProps) {
  return (
    <div className={`rounded-lg overflow-hidden border border-border ${className}`}>
      {/* Editor header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-surface-alt/80 border-b border-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
          </div>
          <span className="ml-3 text-xs font-mono text-dim">{title}</span>
        </div>
        <span className="text-[10px] font-mono text-dim uppercase">{language}</span>
      </div>
      {/* Code content */}
      <div className="p-4 md:p-5 bg-card/80 font-mono text-xs md:text-sm leading-relaxed overflow-x-auto">
        {children}
      </div>
    </div>
  );
}

interface TerminalBlockProps {
  children: ReactNode;
  title?: string;
  className?: string;
}

export function TerminalBlock({
  children,
  title = 'terminal',
  className = '',
}: TerminalBlockProps) {
  return (
    <div className={`rounded-lg overflow-hidden border border-border ${className}`}>
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-2.5 bg-surface-alt/80 border-b border-border">
        <div className="flex gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
        </div>
        <span className="ml-2 text-xs font-mono text-dim">{title}</span>
      </div>
      {/* Terminal body */}
      <div className="p-4 md:p-5 bg-card/90 font-mono text-xs md:text-sm leading-relaxed">
        {children}
      </div>
    </div>
  );
}

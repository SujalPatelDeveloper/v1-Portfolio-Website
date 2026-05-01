import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';

const Terminal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState([
    { text: 'Welcome to my portfolio!', type: 'success' },
    { text: "Type <span class='highlight'>'help'</span> to see available commands.", type: 'normal' }
  ]);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);
  const bodyRef = useRef(null);

  const commands = {
    help: () => `
      Available commands:<br>
      <span class="highlight">help</span>     - Show this help message<br>
      <span class="highlight">about</span>    - Display info about Sujal<br>
      <span class="highlight">projects</span> - List of selected works<br>
      <span class="highlight">skills</span>   - List my technical skills<br>
      <span class="highlight">clear</span>    - Clear the terminal screen<br>
      <span class="highlight">exit</span>     - Close the terminal
    `,
    about: () => `
      Hi! I'm Sujal Patel, a web developer.<br>
      I build fast, accessible, and scalable web applications.<br>
      I enjoy bridging the gap between design and technical execution.
    `,
    projects: () => `
      Project details coming soon... Check back later for updates!
    `,
    skills: () => `
      Frontend: JavaScript, TypeScript, React, Next.js, HTML5, CSS3<br>
      Backend: Node.js, Express, PostgreSQL<br>
      Other: Git, UI/UX, Performance Optimization
    `,
    whoami: () => `guest`,
    date: () => new Date().toString(),
  };

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e) => {
    if (e.key === 'Enter') {
      const cmd = input.trim().toLowerCase();
      setInput('');

      if (!cmd) return;

      const newHistory = [...history, { text: cmd, type: 'command' }];

      if (cmd === 'clear') {
        setHistory([]);
      } else if (cmd === 'exit') {
        setIsOpen(false);
      } else if (commands[cmd]) {
        setHistory([...newHistory, { text: commands[cmd](), type: 'output' }]);
      } else {
        setHistory([...newHistory, { text: `Command not found: ${cmd}. Type 'help' for available commands.`, type: 'error' }]);
      }
    }
  };

  return (
    <>
      <button 
        id="open-terminal" 
        className="terminal-fab" 
        aria-label="Open Terminal"
        onClick={() => setIsOpen(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
      </button>

      <div 
        className={`terminal-overlay ${isOpen ? 'active' : ''}`} 
        id="terminal-overlay"
        onClick={(e) => e.target.id === 'terminal-overlay' && setIsOpen(false)}
      >
        <div className="terminal-window">
          <div className="terminal-header">
            <div className="terminal-buttons">
              <span className="close-btn" id="close-terminal" onClick={() => setIsOpen(false)}></span>
              <span className="min-btn"></span>
              <span className="max-btn"></span>
            </div>
            <span className="terminal-title">guest@sujal-portfolio:~</span>
          </div>
          <div className="terminal-body" id="terminal-body" ref={bodyRef}>
            {history.map((line, i) => (
              <div key={i} className="terminal-line">
                {line.type === 'command' ? (
                  <>
                    <span className="prompt">guest@portfolio:~$</span> {line.text}
                  </>
                ) : (
                  <span className={line.type} dangerouslySetInnerHTML={{ __html: line.text }} />
                )}
              </div>
            ))}
          </div>
          <div className="terminal-input-wrapper">
            <span className="prompt">guest@portfolio:~$</span>
            <input 
              type="text" 
              id="terminal-input" 
              autocomplete="off" 
              spellcheck="false" 
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleCommand}
              ref={inputRef}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Terminal;

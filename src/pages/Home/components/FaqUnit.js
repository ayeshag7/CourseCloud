import { useState } from "react";

export const FaqUnit = ({faq}) => {

    const {question, answer} = faq;

    const [show, setShow] = useState(false);

  return (
    <div className="border-b dark:border-slate-700 mb-6">
        
        {/* Toggle Button and Question */}
        <div className="flex justify-start items-center gap-8 text-lg md:text-xl dark:text-white mb-4">
            
            {/* Toggle Button */}
            <button onClick={() => setShow(!show)} className="ml-2 text-logo">
            {show ? (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-dash-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"/>
            </svg>) : (<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-plus-circle" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>)}
            </button>

            {/* Question */}
            <span>{question}</span>
            
        </div>

        {/* Answer */}
        {show ? (<p className="text-gray-500 dark:text-slate-400 text-lg mb-4 ml-16">{answer}</p>) : (null)}

    </div>
  )
}

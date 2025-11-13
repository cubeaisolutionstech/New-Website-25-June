import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, MicOff, Send, X, Loader2 } from 'lucide-react';

// Type definitions for Speech Recognition API
interface SpeechRecognition extends EventTarget {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start(): void;
  stop(): void;
  abort(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onend: () => void;
}

interface SpeechRecognitionEvent {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionResultList {
  length: number;
  item(index: number): SpeechRecognitionResult;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionResult {
  length: number;
  item(index: number): SpeechRecognitionAlternative;
  [index: number]: SpeechRecognitionAlternative;
  isFinal: boolean;
}

interface SpeechRecognitionAlternative {
  transcript: string;
  confidence: number;
}

interface SpeechRecognitionErrorEvent {
  error: string;
  message?: string;
}

interface VoiceAgentProps {
  onClose?: () => void;
  className?: string;
}

const VoiceAgent: React.FC<VoiceAgentProps> = ({ onClose, className = '' }) => {
  const [isListening, setIsListening] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [transcript, setTranscript] = useState('');
  const [response, setResponse] = useState('');
  const [messages, setMessages] = useState<Array<{ type: 'user' | 'ai'; text: string }>>([]);
  const [error, setError] = useState<string | null>(null);
  
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  useEffect(() => {
    // Initialize Speech Recognition API
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition || (window as any).SpeechRecognition;
      recognitionRef.current = new SpeechRecognition();
      recognitionRef.current.continuous = true;
      recognitionRef.current.interimResults = true;
      recognitionRef.current.lang = 'en-US';

      recognitionRef.current.onresult = (event: SpeechRecognitionEvent) => {
        let interimTranscript = '';
        let finalTranscript = '';

        for (let i = event.resultIndex; i < event.results.length; i++) {
          const transcript = event.results[i][0].transcript;
          if (event.results[i].isFinal) {
            finalTranscript += transcript + ' ';
          } else {
            interimTranscript += transcript;
          }
        }

        setTranscript(finalTranscript || interimTranscript);
      };

      recognitionRef.current.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error('Speech recognition error:', event.error);
        setError(`Speech recognition error: ${event.error}`);
        setIsListening(false);
        if (recognitionRef.current) {
          recognitionRef.current.stop();
        }
      };

      recognitionRef.current.onend = () => {
        if (isListening) {
          // Restart if still listening
          try {
            recognitionRef.current?.start();
          } catch (e) {
            console.error('Error restarting recognition:', e);
          }
        }
      };
    } else {
      setError('Speech recognition is not supported in your browser. Please use Chrome, Edge, or Safari.');
    }

    return () => {
      if (recognitionRef.current) {
        recognitionRef.current.stop();
      }
      if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
        mediaRecorderRef.current.stop();
      }
    };
  }, [isListening]);

  const startListening = async () => {
    try {
      setError(null);
      setTranscript('');
      setResponse('');

      // Request microphone permission
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      
      if (recognitionRef.current) {
        recognitionRef.current.start();
        setIsListening(true);
      } else {
        setError('Speech recognition not available');
      }
    } catch (err) {
      console.error('Error accessing microphone:', err);
      setError('Microphone access denied. Please allow microphone access to use the voice agent.');
    }
  };

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
    }
    setIsListening(false);
    
    // Process the transcript if there's any
    if (transcript.trim()) {
      processQuery(transcript);
    }
  };

  const processQuery = async (query: string) => {
    if (!query.trim()) return;

    setIsProcessing(true);
    setError(null);
    
    // Add user message
    const userMessage = { type: 'user' as const, text: query };
    setMessages(prev => [...prev, userMessage]);

    try {
      // Simulate AI response - In production, this would call your AI API
      // For now, we'll use a mock response
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      const aiResponse = generateAIResponse(query);
      setResponse(aiResponse);
      
      // Add AI message
      const aiMessage = { type: 'ai' as const, text: aiResponse };
      setMessages(prev => [...prev, aiMessage]);

      // Speak the response
      speakResponse(aiResponse);
    } catch (err) {
      console.error('Error processing query:', err);
      setError('Failed to process your query. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  const generateAIResponse = (query: string): string => {
    const lowerQuery = query.toLowerCase();
    
    // Simple response generation based on keywords
    if (lowerQuery.includes('hello') || lowerQuery.includes('hi')) {
      return "Hello! I'm your AI voice assistant. How can I help you today?";
    } else if (lowerQuery.includes('versionai') || lowerQuery.includes('version ai')) {
      return "VersionAI is an advanced AI service that includes a built-in voice agent feature. It allows you to interact naturally through voice commands and get intelligent responses powered by AI.";
    } else if (lowerQuery.includes('feature') || lowerQuery.includes('capability')) {
      return "VersionAI's voice agent can understand natural language, process your queries, and provide intelligent responses. You can ask questions, get information, and interact hands-free.";
    } else if (lowerQuery.includes('help') || lowerQuery.includes('what can you do')) {
      return "I can help you with information about VersionAI, answer questions, provide details about features, and assist with various queries. Just speak naturally and I'll respond!";
    } else {
      return `I understand you're asking about "${query}". VersionAI's voice agent is designed to help you with various tasks. Could you provide more details about what you'd like to know?`;
    }
  };

  const speakResponse = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleSend = () => {
    if (transcript.trim() && !isProcessing) {
      processQuery(transcript);
      setTranscript('');
    }
  };

  const clearMessages = () => {
    setMessages([]);
    setTranscript('');
    setResponse('');
    setError(null);
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      className={`bg-white rounded-2xl shadow-2xl border border-gray-200 p-6 ${className}`}
    >
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
            <Mic className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-900">Voice Agent</h3>
            <p className="text-sm text-gray-500">Speak naturally to interact</p>
          </div>
        </div>
        {onClose && (
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close voice agent"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        )}
      </div>

      {/* Messages Area */}
      <div className="h-64 overflow-y-auto mb-4 space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
        <AnimatePresence>
          {messages.length === 0 ? (
            <div className="text-center text-gray-500 py-8">
              <Mic className="w-12 h-12 mx-auto mb-3 text-gray-400" />
              <p>Start speaking or click the microphone to begin</p>
            </div>
          ) : (
            messages.map((message, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-4 py-2 ${
                    message.type === 'user'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                      : 'bg-white text-gray-900 border border-gray-200'
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </motion.div>
            ))
          )}
        </AnimatePresence>
        {isProcessing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center space-x-2 text-gray-500"
          >
            <Loader2 className="w-4 h-4 animate-spin" />
            <span className="text-sm">Processing...</span>
          </motion.div>
        )}
      </div>

      {/* Error Message */}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm"
        >
          {error}
        </motion.div>
      )}

      {/* Transcript Display */}
      {transcript && (
        <div className="mb-4 p-3 bg-blue-50 border border-blue-200 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">You said:</span> {transcript}
          </p>
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center space-x-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={isListening ? stopListening : startListening}
          disabled={isProcessing}
          className={`flex-1 flex items-center justify-center space-x-2 py-3 px-6 rounded-lg font-semibold transition-all ${
            isListening
              ? 'bg-red-500 hover:bg-red-600 text-white'
              : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white'
          } ${isProcessing ? 'opacity-50 cursor-not-allowed' : ''}`}
        >
          {isListening ? (
            <>
              <MicOff className="w-5 h-5" />
              <span>Stop Listening</span>
            </>
          ) : (
            <>
              <Mic className="w-5 h-5" />
              <span>Start Speaking</span>
            </>
          )}
        </motion.button>

        {transcript && !isListening && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSend}
            disabled={isProcessing || !transcript.trim()}
            className="p-3 bg-green-500 hover:bg-green-600 text-white rounded-lg disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send className="w-5 h-5" />
          </motion.button>
        )}

        {messages.length > 0 && (
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={clearMessages}
            className="p-3 bg-gray-200 hover:bg-gray-300 text-gray-700 rounded-lg"
            aria-label="Clear messages"
          >
            <X className="w-5 h-5" />
          </motion.button>
        )}
      </div>

      {/* Status Indicator */}
      {isListening && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mt-4 flex items-center justify-center space-x-2"
        >
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ repeat: Infinity, duration: 1 }}
            className="w-3 h-3 bg-red-500 rounded-full"
          />
          <span className="text-sm text-gray-600">Listening...</span>
        </motion.div>
      )}
    </motion.div>
  );
};

export default VoiceAgent;


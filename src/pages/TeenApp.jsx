import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiMessageCircle, FiShield, FiHeart, FiPhone, FiSettings, FiSend, FiAlertTriangle, FiCheck } = FiIcons;

const TeenApp = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('chat');
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'yana',
      text: "Ciao! Sono Y.A.N.A. e sono qui per te. Come stai oggi? 😊",
      timestamp: new Date(Date.now() - 5000)
    }
  ]);
  const [newMessage, setNewMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const analyzeMessage = (text) => {
    const threats = [
      { keywords: ['stupido', 'idiota', 'cretino', 'sfigato'], type: 'cyberbullying', severity: 'medium' },
      { keywords: ['ammazzati', 'ucciditi', 'fatti del male'], type: 'suicide', severity: 'high' },
      { keywords: ['nudo', 'foto private', 'non dire a nessuno'], type: 'grooming', severity: 'high' },
      { keywords: ['solo', 'triste', 'depresso', 'non ce la faccio'], type: 'emotional', severity: 'medium' }
    ];

    for (let threat of threats) {
      if (threat.keywords.some(keyword => text.toLowerCase().includes(keyword))) {
        return threat;
      }
    }
    return null;
  };

  const getYanaResponse = (userMessage, threat) => {
    if (threat) {
      switch (threat.type) {
        case 'cyberbullying':
          return "Ho notato che qualcuno ti ha scritto cose poco gentili. Nessuno merita di essere trattato così. Vuoi parlarne? Posso aiutarti a capire come reagire. 💙";
        case 'suicide':
          return "Quello che hai condiviso mi preoccupa molto. I tuoi sentimenti sono importanti e non sei solo/a. Parlare con qualcuno può aiutare. Vuoi che ti metta in contatto con persone che possono supportarti?";
        case 'grooming':
          return "⚠️ Quello che mi hai mostrato sembra una situazione potenzialmente pericolosa. Non condividere mai foto private e ricorda che non è normale che un adulto ti chieda di tenere segreti. Vuoi che parliamo di cosa fare?";
        case 'emotional':
          return "Capisco che ti senti giù. È normale avere momenti difficili, ma non devi affrontarli da solo/a. Ci sono persone che possono aiutarti. Vuoi che ti suggerisca qualche risorsa? 🤗";
        default:
          return "Grazie per aver condiviso con me. Sono qui se hai bisogno di parlare di qualcosa. 😊";
      }
    }

    const responses = [
      "Capisco. Vuoi raccontarmi di più?",
      "Sono qui per ascoltarti. Come posso aiutarti?",
      "Grazie per aver condiviso questo con me. Come ti senti?",
      "È importante che tu possa esprimere i tuoi sentimenti. Parlami di più.",
      "Sono sempre qui per te. C'è qualcosa di specifico che ti preoccupa?"
    ];

    return responses[Math.floor(Math.random() * responses.length)];
  };

  const handleSendMessage = () => {
    if (!newMessage.trim()) return;

    const userMessage = {
      id: messages.length + 1,
      sender: 'user',
      text: newMessage,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setNewMessage('');
    setIsTyping(true);

    // Analyze message for threats
    const threat = analyzeMessage(newMessage);

    // Simulate Y.A.N.A. response delay
    setTimeout(() => {
      const yanaResponse = {
        id: messages.length + 2,
        sender: 'yana',
        text: getYanaResponse(newMessage, threat),
        timestamp: new Date(),
        threat: threat
      };

      setMessages(prev => [...prev, yanaResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const emergencyContacts = [
    {
      name: "Telefono Azzurro",
      number: "19696",
      description: "Supporto per bambini e adolescenti",
      available: "24/7"
    },
    {
      name: "Emergenza",
      number: "112",
      description: "Numero unico di emergenza",
      available: "24/7"
    },
    {
      name: "Centro Antiviolenza",
      number: "1522",
      description: "Supporto contro violenza e stalking",
      available: "24/7"
    }
  ];

  const safetyTips = [
    {
      title: "Proteggi le tue informazioni personali",
      description: "Non condividere mai dati personali come indirizzo, scuola o numero di telefono con sconosciuti online."
    },
    {
      title: "Riconosci i segnali di grooming",
      description: "Attenzione a chi ti chiede di mantenere segreti, ti fa regali inaspettati o vuole incontrarsi di persona."
    },
    {
      title: "Blocca e segnala",
      description: "Non esitare a bloccare utenti che ti fanno sentire a disagio e segnala comportamenti inappropriati."
    },
    {
      title: "Parla con un adulto di fiducia",
      description: "Se qualcosa ti preoccupa online, condividilo con un genitore, insegnante o altro adulto di cui ti fidi."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-md mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiHeart} className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="font-bold text-gray-900">Y.A.N.A.</h1>
                <p className="text-sm text-gray-500">Il tuo compagno digitale</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/')}
              className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <SafeIcon icon={FiSettings} className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white border-b">
        <div className="max-w-md mx-auto px-4">
          <div className="flex">
            <button
              onClick={() => setActiveTab('chat')}
              className={`flex-1 py-3 text-center font-medium transition-colors ${
                activeTab === 'chat'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <SafeIcon icon={FiMessageCircle} className="w-5 h-5 mx-auto mb-1" />
              Chat
            </button>
            <button
              onClick={() => setActiveTab('safety')}
              className={`flex-1 py-3 text-center font-medium transition-colors ${
                activeTab === 'safety'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <SafeIcon icon={FiShield} className="w-5 h-5 mx-auto mb-1" />
              Sicurezza
            </button>
            <button
              onClick={() => setActiveTab('help')}
              className={`flex-1 py-3 text-center font-medium transition-colors ${
                activeTab === 'help'
                  ? 'text-blue-600 border-b-2 border-blue-600'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              <SafeIcon icon={FiPhone} className="w-5 h-5 mx-auto mb-1" />
              Aiuto
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-md mx-auto">
        {activeTab === 'chat' && (
          <div className="flex flex-col h-[calc(100vh-140px)]">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white'
                      : message.threat
                      ? 'bg-yellow-50 border border-yellow-200 text-gray-900'
                      : 'bg-white border border-gray-200 text-gray-900'
                  }`}>
                    {message.threat && (
                      <div className="flex items-center gap-2 mb-2 text-yellow-600">
                        <SafeIcon icon={FiAlertTriangle} className="w-4 h-4" />
                        <span className="text-xs font-medium">Rilevata possibile minaccia</span>
                      </div>
                    )}
                    <p className="text-sm">{message.text}</p>
                    <p className={`text-xs mt-1 ${
                      message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.timestamp.toLocaleTimeString('it-IT', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </p>
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  className="flex justify-start"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="bg-white border border-gray-200 px-4 py-2 rounded-2xl">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </div>
                </motion.div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Message Input */}
            <div className="p-4 bg-white border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Scrivi un messaggio..."
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  onClick={handleSendMessage}
                  disabled={!newMessage.trim()}
                  className={`p-2 rounded-full transition-all ${
                    newMessage.trim()
                      ? 'bg-blue-500 text-white hover:bg-blue-600'
                      : 'bg-gray-200 text-gray-400'
                  }`}
                >
                  <SafeIcon icon={FiSend} className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'safety' && (
          <div className="p-4 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Consigli di Sicurezza</h2>
              <div className="space-y-4">
                {safetyTips.map((tip, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start gap-3">
                      <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-2">{tip.title}</h3>
                        <p className="text-gray-600 text-sm">{tip.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                <SafeIcon icon={FiShield} className="w-5 h-5 text-blue-600" />
                La tua protezione
              </h3>
              <p className="text-sm text-gray-700">
                Y.A.N.A. monitora continuamente le tue conversazioni per identificare potenziali minacce. 
                Riceverai supporto immediato se rilevo situazioni pericolose.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'help' && (
          <div className="p-4 space-y-6">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Numeri di Emergenza</h2>
              <div className="space-y-4">
                {emergencyContacts.map((contact, index) => (
                  <motion.div
                    key={index}
                    className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{contact.name}</h3>
                        <p className="text-sm text-gray-600 mb-2">{contact.description}</p>
                        <div className="flex items-center gap-4">
                          <span className="text-2xl font-bold text-blue-600">{contact.number}</span>
                          <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                            {contact.available}
                          </span>
                        </div>
                      </div>
                      <button className="bg-green-500 text-white p-3 rounded-full hover:bg-green-600 transition-colors">
                        <SafeIcon icon={FiPhone} className="w-5 h-5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-50 to-pink-50 p-4 rounded-lg border border-red-200">
              <h3 className="font-semibold text-red-900 mb-2 flex items-center gap-2">
                <SafeIcon icon={FiAlertTriangle} className="w-5 h-5 text-red-600" />
                In caso di emergenza
              </h3>
              <p className="text-sm text-red-800 mb-3">
                Se ti trovi in una situazione di pericolo immediato, chiama subito il 112 o rivolgiti a un adulto di fiducia.
              </p>
              <button className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors">
                Chiama 112
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeenApp;
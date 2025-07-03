import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiHeart, FiEye, FiLock, FiArrowRight, FiArrowLeft, FiCheck, FiAlertCircle } = FiIcons;

const OnboardingTeen = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [userInfo, setUserInfo] = useState({
    name: '',
    age: '',
    parentEmail: '',
    agreedToTerms: false,
    privacyLevel: 'balanced'
  });

  const steps = [
    {
      title: "Benvenuto in Y.A.N.A. 👋",
      subtitle: "Il tuo compagno digitale personale",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiHeart} className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ciao! Sono Y.A.N.A.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Sono qui per essere il tuo compagno digitale. Non sono uno strumento di controllo dei tuoi genitori, 
              ma un amico che ti aiuta a navigare online in sicurezza.
            </p>
          </div>
          
          <div className="grid gap-4">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiShield} className="w-6 h-6 text-blue-600" />
                <span className="font-semibold text-blue-900">Ti proteggo dalle minacce online</span>
              </div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiHeart} className="w-6 h-6 text-green-600" />
                <span className="font-semibold text-green-900">Ti supporto senza giudicare</span>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiLock} className="w-6 h-6 text-purple-600" />
                <span className="font-semibold text-purple-900">Rispetto la tua privacy</span>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Parliamo di Te 🌟",
      subtitle: "Aiutami a conoscerti meglio",
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Come ti chiami?
            </label>
            <input
              type="text"
              value={userInfo.name}
              onChange={(e) => setUserInfo({...userInfo, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Il tuo nome..."
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Quanti anni hai?
            </label>
            <select
              value={userInfo.age}
              onChange={(e) => setUserInfo({...userInfo, age: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Seleziona la tua età</option>
              <option value="13">13 anni</option>
              <option value="14">14 anni</option>
              <option value="15">15 anni</option>
              <option value="16">16 anni</option>
              <option value="17">17 anni</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email di un genitore/tutore
            </label>
            <input
              type="email"
              value={userInfo.parentEmail}
              onChange={(e) => setUserInfo({...userInfo, parentEmail: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="genitore@email.com"
            />
            <p className="text-sm text-gray-500 mt-2">
              Necessario per la sicurezza. Riceveranno notifiche solo in caso di pericolo reale.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "La Tua Privacy è Importante 🔐",
      subtitle: "Ecco come proteggo i tuoi dati",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <SafeIcon icon={FiEye} className="w-6 h-6 text-blue-600" />
              Cosa Vedo e Cosa Non Vedo
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5" />
                  Cosa Analizzo:
                </h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Parole che potrebbero indicare cyberbullismo</li>
                  <li>• Messaggi che sembrano minacciosi o manipolatori</li>
                  <li>• Segnali di disagio emotivo</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                  <SafeIcon icon={FiAlertCircle} className="w-5 h-5" />
                  Cosa NON Faccio:
                </h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Non leggo le tue conversazioni private normali</li>
                  <li>• Non condivido i tuoi messaggi con i genitori</li>
                  <li>• Non giudico le tue scelte o amicizie</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Scegli il tuo livello di privacy:
            </h3>
            <div className="space-y-3">
              <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="privacy"
                  value="high"
                  checked={userInfo.privacyLevel === 'high'}
                  onChange={(e) => setUserInfo({...userInfo, privacyLevel: e.target.value})}
                  className="mt-1"
                />
                <div>
                  <div className="font-medium text-gray-900">Privacy Massima</div>
                  <div className="text-sm text-gray-600">Analizzo solo in caso di parole chiave di emergenza</div>
                </div>
              </label>
              
              <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 bg-blue-50 border-blue-300">
                <input
                  type="radio"
                  name="privacy"
                  value="balanced"
                  checked={userInfo.privacyLevel === 'balanced'}
                  onChange={(e) => setUserInfo({...userInfo, privacyLevel: e.target.value})}
                  className="mt-1"
                />
                <div>
                  <div className="font-medium text-gray-900">Bilanciata (Consigliata)</div>
                  <div className="text-sm text-gray-600">Protezione ottimale mantenendo la privacy</div>
                </div>
              </label>
              
              <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="privacy"
                  value="protective"
                  checked={userInfo.privacyLevel === 'protective'}
                  onChange={(e) => setUserInfo({...userInfo, privacyLevel: e.target.value})}
                  className="mt-1"
                />
                <div>
                  <div className="font-medium text-gray-900">Protezione Avanzata</div>
                  <div className="text-sm text-gray-600">Monitoraggio più attento per maggiore sicurezza</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Quasi Pronto! 🚀",
      subtitle: "Conferma i tuoi dati e iniziamo",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Riepilogo del tuo profilo:</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Nome:</span>
                <span className="font-semibold text-gray-900">{userInfo.name || 'Non specificato'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Età:</span>
                <span className="font-semibold text-gray-900">{userInfo.age || 'Non specificata'} anni</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Email Genitore:</span>
                <span className="font-semibold text-gray-900">{userInfo.parentEmail || 'Non specificata'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Livello Privacy:</span>
                <span className="font-semibold text-gray-900">
                  {userInfo.privacyLevel === 'high' && 'Massima'}
                  {userInfo.privacyLevel === 'balanced' && 'Bilanciata'}
                  {userInfo.privacyLevel === 'protective' && 'Avanzata'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Importante da ricordare:</h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Posso aiutarti 24/7 se ti senti in difficoltà</li>
              <li>• I tuoi genitori riceveranno notifiche solo per pericoli reali</li>
              <li>• Puoi modificare le impostazioni quando vuoi</li>
              <li>• Sono qui per supportarti, non per controllarti</li>
            </ul>
          </div>
          
          <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer">
            <input
              type="checkbox"
              checked={userInfo.agreedToTerms}
              onChange={(e) => setUserInfo({...userInfo, agreedToTerms: e.target.checked})}
              className="mt-1"
            />
            <div className="text-sm text-gray-700">
              Ho letto e accetto i <a href="#" className="text-blue-600 hover:underline">Termini di Servizio</a> e la 
              <a href="#" className="text-blue-600 hover:underline"> Privacy Policy</a>. 
              Comprendo come Y.A.N.A. protegge la mia privacy e quando i miei genitori vengono avvisati.
            </div>
          </label>
        </div>
      )
    }
  ];

  const isStepValid = () => {
    switch (currentStep) {
      case 0:
        return true;
      case 1:
        return userInfo.name && userInfo.age && userInfo.parentEmail;
      case 2:
        return userInfo.privacyLevel;
      case 3:
        return userInfo.agreedToTerms;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      navigate('/teen');
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 py-8">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Progresso</span>
            <span className="text-sm text-gray-600">{currentStep + 1} di {steps.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Step Content */}
        <motion.div
          key={currentStep}
          className="bg-white rounded-2xl shadow-xl p-8"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {steps[currentStep].title}
            </h1>
            <p className="text-xl text-gray-600">
              {steps[currentStep].subtitle}
            </p>
          </div>

          <div className="mb-8">
            {steps[currentStep].content}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center">
            <button
              onClick={handleBack}
              disabled={currentStep === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                currentStep === 0
                  ? 'text-gray-400 cursor-not-allowed'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <SafeIcon icon={FiArrowLeft} className="w-5 h-5" />
              Indietro
            </button>

            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`flex items-center gap-2 px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105 ${
                isStepValid()
                  ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              {currentStep === steps.length - 1 ? 'Inizia con Y.A.N.A.' : 'Continua'}
              <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        {/* Back to Home */}
        <div className="text-center mt-8">
          <button
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-gray-900 transition-colors"
          >
            ← Torna alla home
          </button>
        </div>
      </div>
    </div>
  );
};

export default OnboardingTeen;
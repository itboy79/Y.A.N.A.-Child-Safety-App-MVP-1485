import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiEye, FiLock, FiArrowRight, FiArrowLeft, FiCheck, FiAlertTriangle, FiUser } = FiIcons;

const OnboardingParent = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [parentInfo, setParentInfo] = useState({
    name: '',
    email: '',
    relationship: '',
    childName: '',
    childAge: '',
    notifications: 'high-only',
    agreedToTerms: false
  });

  const steps = [
    {
      title: "Benvenuto nel Dashboard Y.A.N.A. 👨‍👩‍👧‍👦",
      subtitle: "Protezione digitale etica per la tua famiglia",
      content: (
        <div className="space-y-6">
          <div className="text-center">
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6">
              <SafeIcon icon={FiShield} className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Dashboard Genitore Y.A.N.A.
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              Y.A.N.A. non è un software spia, ma uno strumento di protezione etico che rispetta 
              la privacy di tuo figlio e ti avvisa solo quando è veramente necessario.
            </p>
          </div>
          
          <div className="grid gap-4">
            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiShield} className="w-6 h-6 text-green-600" />
                <div>
                  <span className="font-semibold text-green-900 block">Protezione Proattiva</span>
                  <span className="text-green-700 text-sm">IA avanzata che monitora le minacce in tempo reale</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiLock} className="w-6 h-6 text-blue-600" />
                <div>
                  <span className="font-semibold text-blue-900 block">Privacy Rispettata</span>
                  <span className="text-blue-700 text-sm">Non accedi alle conversazioni private normali</span>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
              <div className="flex items-center gap-3">
                <SafeIcon icon={FiAlertTriangle} className="w-6 h-6 text-purple-600" />
                <div>
                  <span className="font-semibold text-purple-900 block">Allerte Mirate</span>
                  <span className="text-purple-700 text-sm">Notifiche solo per pericoli reali e imminenti</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Informazioni Genitore 👤",
      subtitle: "Aiutaci a personalizzare la protezione",
      content: (
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Il tuo nome completo
            </label>
            <input
              type="text"
              value={parentInfo.name}
              onChange={(e) => setParentInfo({...parentInfo, name: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="Mario Rossi"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
              type="email"
              value={parentInfo.email}
              onChange={(e) => setParentInfo({...parentInfo, email: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="mario.rossi@email.com"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Relazione con il minore
            </label>
            <select
              value={parentInfo.relationship}
              onChange={(e) => setParentInfo({...parentInfo, relationship: e.target.value})}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">Seleziona la relazione</option>
              <option value="madre">Madre</option>
              <option value="padre">Padre</option>
              <option value="tutore">Tutore legale</option>
              <option value="nonno">Nonno/Nonna</option>
              <option value="altro">Altro familiare</option>
            </select>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Nome del minore
              </label>
              <input
                type="text"
                value={parentInfo.childName}
                onChange={(e) => setParentInfo({...parentInfo, childName: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Alex"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Età del minore
              </label>
              <select
                value={parentInfo.childAge}
                onChange={(e) => setParentInfo({...parentInfo, childAge: e.target.value})}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Età</option>
                <option value="13">13 anni</option>
                <option value="14">14 anni</option>
                <option value="15">15 anni</option>
                <option value="16">16 anni</option>
                <option value="17">17 anni</option>
              </select>
            </div>
          </div>
        </div>
      )
    },
    {
      title: "Cosa Vedi e Cosa Non Vedi 👁️",
      subtitle: "Trasparenza totale sui dati",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
              <SafeIcon icon={FiEye} className="w-6 h-6 text-blue-600" />
              Cosa Puoi Vedere nel Dashboard
            </h3>
            
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold text-green-800 mb-2 flex items-center gap-2">
                  <SafeIcon icon={FiCheck} className="w-5 h-5" />
                  Dashboard Benessere Digitale:
                </h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Indicatore generale del benessere online</li>
                  <li>• Statistiche anonime di utilizzo</li>
                  <li>• Tendenze di sicurezza generali</li>
                  <li>• Report settimanali di attività</li>
                </ul>
              </div>
              
              <div className="bg-white p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold text-red-800 mb-2 flex items-center gap-2">
                  <SafeIcon icon={FiAlertTriangle} className="w-5 h-5" />
                  Allerte di Sicurezza (Solo Alta Gravità):
                </h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Minacce di autolesionismo o suicidio</li>
                  <li>• Tentativi di grooming confermati</li>
                  <li>• Estorsioni o ricatti sessuali</li>
                  <li>• Contatti con predatori noti</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
            <h4 className="font-semibold text-yellow-800 mb-2 flex items-center gap-2">
              <SafeIcon icon={FiLock} className="w-5 h-5" />
              Cosa NON Vedrai Mai:
            </h4>
            <ul className="text-sm text-yellow-700 space-y-1">
              <li>• Conversazioni private normali</li>
              <li>• Messaggi con amici e familiari</li>
              <li>• Contenuti personali non pericolosi</li>
              <li>• Dettagli intimi o privati</li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Configurazione Notifiche 🔔",
      subtitle: "Scegli quando essere avvisato",
      content: (
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Quando vuoi ricevere notifiche?
            </h3>
            <div className="space-y-3">
              <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 bg-red-50 border-red-300">
                <input
                  type="radio"
                  name="notifications"
                  value="high-only"
                  checked={parentInfo.notifications === 'high-only'}
                  onChange={(e) => setParentInfo({...parentInfo, notifications: e.target.value})}
                  className="mt-1"
                />
                <div>
                  <div className="font-medium text-gray-900">Solo Emergenze (Consigliato)</div>
                  <div className="text-sm text-gray-600">Notifiche solo per minacce di alta gravità che richiedono intervento immediato</div>
                  <div className="text-xs text-red-600 mt-1">Esempi: ideazione suicidaria, grooming confermato, estorsione</div>
                </div>
              </label>
              
              <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="notifications"
                  value="medium-high"
                  checked={parentInfo.notifications === 'medium-high'}
                  onChange={(e) => setParentInfo({...parentInfo, notifications: e.target.value})}
                  className="mt-1"
                />
                <div>
                  <div className="font-medium text-gray-900">Emergenze + Rischi Medi</div>
                  <div className="text-sm text-gray-600">Include anche cyberbullismo persistente e segnali di disagio emotivo</div>
                  <div className="text-xs text-yellow-600 mt-1">Può generare più notifiche</div>
                </div>
              </label>
              
              <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="notifications"
                  value="all"
                  checked={parentInfo.notifications === 'all'}
                  onChange={(e) => setParentInfo({...parentInfo, notifications: e.target.value})}
                  className="mt-1"
                />
                <div>
                  <div className="font-medium text-gray-900">Tutte le Rilevazioni</div>
                  <div className="text-sm text-gray-600">Include tutti i livelli di rischio rilevati dall'IA</div>
                  <div className="text-xs text-orange-600 mt-1">Sconsigliato: può generare troppi falsi positivi</div>
                </div>
              </label>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">💡 La nostra raccomandazione:</h4>
            <p className="text-sm text-blue-700">
              Scegli "Solo Emergenze" per mantenere un equilibrio ottimale tra protezione e privacy. 
              Riceverai notifiche solo quando tuo figlio ha davvero bisogno del tuo intervento immediato.
            </p>
          </div>
        </div>
      )
    },
    {
      title: "Quasi Pronto! 🎉",
      subtitle: "Conferma e attiva la protezione",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl">
            <h3 className="text-xl font-bold text-gray-900 mb-4">Riepilogo del tuo account:</h3>
            
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Nome:</span>
                <span className="font-semibold text-gray-900">{parentInfo.name || 'Non specificato'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Email:</span>
                <span className="font-semibold text-gray-900">{parentInfo.email || 'Non specificata'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Relazione:</span>
                <span className="font-semibold text-gray-900 capitalize">{parentInfo.relationship || 'Non specificata'}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Minore:</span>
                <span className="font-semibold text-gray-900">{parentInfo.childName || 'Non specificato'} ({parentInfo.childAge || 'N/A'} anni)</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-600">Notifiche:</span>
                <span className="font-semibold text-gray-900">
                  {parentInfo.notifications === 'high-only' && 'Solo Emergenze'}
                  {parentInfo.notifications === 'medium-high' && 'Emergenze + Rischi Medi'}
                  {parentInfo.notifications === 'all' && 'Tutte le Rilevazioni'}
                </span>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h4 className="font-semibold text-blue-800 mb-2">🔗 Prossimi passi:</h4>
            <ol className="text-sm text-blue-700 space-y-1 list-decimal list-inside">
              <li>Riceverai un codice di invito via email</li>
              <li>Condividi il codice con {parentInfo.childName || 'tuo figlio'}</li>
              <li>Una volta collegato l'account, la protezione sarà attiva</li>
              <li>Accedi al dashboard per monitorare il benessere digitale</li>
            </ol>
          </div>
          
          <label className="flex items-start gap-3 p-4 border border-gray-200 rounded-lg cursor-pointer">
            <input
              type="checkbox"
              checked={parentInfo.agreedToTerms}
              onChange={(e) => setParentInfo({...parentInfo, agreedToTerms: e.target.checked})}
              className="mt-1"
            />
            <div className="text-sm text-gray-700">
              Ho letto e accetto i <a href="#" className="text-blue-600 hover:underline">Termini di Servizio</a> e la 
              <a href="#" className="text-blue-600 hover:underline"> Privacy Policy</a>. 
              Comprendo che Y.A.N.A. è uno strumento di protezione etico che rispetta la privacy di mio figlio 
              e mi avvisa solo in caso di pericolo reale.
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
        return parentInfo.name && parentInfo.email && parentInfo.relationship && parentInfo.childName && parentInfo.childAge;
      case 2:
        return true;
      case 3:
        return parentInfo.notifications;
      case 4:
        return parentInfo.agreedToTerms;
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Complete onboarding
      navigate('/parent');
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
            <span className="text-sm text-gray-600">Configurazione Dashboard</span>
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
              {currentStep === steps.length - 1 ? 'Attiva Dashboard' : 'Continua'}
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

export default OnboardingParent;
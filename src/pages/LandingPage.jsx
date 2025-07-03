import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiHeart, FiUsers, FiArrowRight, FiStar, FiCheck } = FiIcons;

const LandingPage = () => {
  const navigate = useNavigate();

  const features = [
    {
      icon: FiShield,
      title: "Protezione Intelligente",
      description: "IA avanzata che monitora e protegge dalle minacce online in tempo reale"
    },
    {
      icon: FiHeart,
      title: "Supporto Empatico",
      description: "Un compagno digitale che comprende e supporta senza giudicare"
    },
    {
      icon: FiUsers,
      title: "Privacy Rispettata",
      description: "Massima protezione della privacy con trasparenza totale sui dati"
    }
  ];

  const testimonials = [
    {
      name: "Maria, Madre di Alex",
      text: "Finalmente posso stare tranquilla sapendo che mio figlio ha un supporto digitale affidabile.",
      rating: 5
    },
    {
      name: "Dr. Rossi, Psicologo",
      text: "Y.A.N.A. rappresenta un approccio innovativo alla sicurezza digitale dei minori.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <motion.section 
        className="relative overflow-hidden bg-gradient-to-r from-primary-600 to-secondary-600 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Y.A.N.A.
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-4 text-blue-100"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              You Are Not Alone
            </motion.p>
            <motion.p 
              className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-blue-50"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Il compagno digitale empatico che protegge i minori online con intelligenza artificiale avanzata e supporto in tempo reale.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <button
                onClick={() => navigate('/teen/onboarding')}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Inizia come Adolescente
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/parent/onboarding')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Accesso Genitore
                <SafeIcon icon={FiArrowRight} className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Protezione Innovativa
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Y.A.N.A. combina tecnologia all'avanguardia con un approccio empatico per garantire la sicurezza digitale dei minori.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-primary-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                  <SafeIcon icon={feature.icon} className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Come Funziona
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processo semplice e trasparente che mette la sicurezza al primo posto.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">1</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Onboarding Trasparente</h3>
                  <p className="text-gray-600">Processo di configurazione chiaro che spiega ogni funzionalità e impostazione di privacy.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">2</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoraggio Intelligente</h3>
                  <p className="text-gray-600">L'IA analizza le comunicazioni per identificare potenziali minacce senza violare la privacy.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">3</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Supporto Proattivo</h3>
                  <p className="text-gray-600">Intervento empatico immediato e risorse di aiuto quando necessario.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm">4</div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Allerte Etiche</h3>
                  <p className="text-gray-600">Notifiche ai genitori solo in caso di pericolo reale e imminente.</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-2xl p-8 shadow-xl"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="space-y-6">
                <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <SafeIcon icon={FiCheck} className="w-5 h-5 text-green-600" />
                    <span className="font-semibold text-green-800">Sicurezza Garantita</span>
                  </div>
                  <p className="text-green-700 text-sm">Rilevamento oltre 85% delle minacce con meno del 5% di falsi positivi</p>
                </div>
                
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <SafeIcon icon={FiShield} className="w-5 h-5 text-blue-600" />
                    <span className="font-semibold text-blue-800">Privacy Protetta</span>
                  </div>
                  <p className="text-blue-700 text-sm">Crittografia end-to-end e trasparenza totale sui dati</p>
                </div>
                
                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <SafeIcon icon={FiHeart} className="w-5 h-5 text-purple-600" />
                    <span className="font-semibold text-purple-800">Supporto 24/7</span>
                  </div>
                  <p className="text-purple-700 text-sm">IA empatica sempre disponibile per supporto e consigli</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Testimonianze
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl shadow-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <SafeIcon key={i} icon={FiStar} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 text-lg mb-4 italic">"{testimonial.text}"</p>
                <p className="font-semibold text-gray-900">- {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Inizia Oggi la Protezione Digitale
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Unisciti a migliaia di famiglie che hanno scelto Y.A.N.A. per la sicurezza online dei loro figli.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate('/teen/onboarding')}
                className="bg-white text-primary-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-blue-50 transition-all transform hover:scale-105"
              >
                Prova Gratuita per Adolescenti
              </button>
              <button
                onClick={() => navigate('/parent/onboarding')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary-600 transition-all transform hover:scale-105"
              >
                Dashboard Genitore
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Y.A.N.A.</h3>
            <p className="mb-6">You Are Not Alone - Protezione digitale empatica per i minori</p>
            <div className="flex justify-center gap-8 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Termini di Servizio</a>
              <a href="#" className="hover:text-white transition-colors">Contatti</a>
              <a href="#" className="hover:text-white transition-colors">Supporto</a>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-gray-400">
              © 2024 Y.A.N.A. Tutti i diritti riservati.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
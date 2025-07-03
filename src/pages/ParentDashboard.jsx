import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiShield, FiHeart, FiAlertTriangle, FiTrendingUp, FiUser, FiSettings, FiBell, FiActivity, FiCalendar, FiClock, FiCheck, FiX } = FiIcons;

const ParentDashboard = () => {
  const navigate = useNavigate();
  const [selectedTab, setSelectedTab] = useState('overview');

  // Mock data for demonstration
  const childInfo = {
    name: "Alex",
    age: 15,
    status: "online",
    lastActive: new Date()
  };

  const wellnessScore = {
    current: 85,
    trend: "stable",
    lastWeek: 82
  };

  const alerts = [
    {
      id: 1,
      type: "medium",
      title: "Rilevato linguaggio di cyberbullismo",
      description: "Messaggi con contenuto offensivo ricevuti da un contatto",
      timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
      status: "resolved",
      action: "Alex ha bloccato il contatto e la situazione è stata risolta"
    },
    {
      id: 2,
      type: "low",
      title: "Espressione di tristezza",
      description: "Rilevati segnali di umore basso nelle conversazioni",
      timestamp: new Date(Date.now() - 1 * 24 * 60 * 60 * 1000),
      status: "monitoring",
      action: "Y.A.N.A. sta fornendo supporto emotivo"
    }
  ];

  const weeklyStats = {
    messagesAnalyzed: 1247,
    threatsBlocked: 3,
    supportSessions: 5,
    safetyScore: 92
  };

  const getWellnessColor = (score) => {
    if (score >= 80) return "text-green-600";
    if (score >= 60) return "text-yellow-600";
    return "text-red-600";
  };

  const getWellnessBackground = (score) => {
    if (score >= 80) return "from-green-50 to-green-100";
    if (score >= 60) return "from-yellow-50 to-yellow-100";
    return "from-red-50 to-red-100";
  };

  const getAlertIcon = (type) => {
    switch (type) {
      case 'high':
        return { icon: FiAlertTriangle, color: 'text-red-500' };
      case 'medium':
        return { icon: FiAlertTriangle, color: 'text-yellow-500' };
      default:
        return { icon: FiAlertTriangle, color: 'text-blue-500' };
    }
  };

  const getAlertBackground = (type) => {
    switch (type) {
      case 'high':
        return 'from-red-50 to-red-100 border-red-200';
      case 'medium':
        return 'from-yellow-50 to-yellow-100 border-yellow-200';
      default:
        return 'from-blue-50 to-blue-100 border-blue-200';
    }
  };

  const formatTimeAgo = (date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now - date) / (1000 * 60));
    
    if (diffInMinutes < 60) {
      return `${diffInMinutes} minuti fa`;
    } else if (diffInMinutes < 1440) {
      return `${Math.floor(diffInMinutes / 60)} ore fa`;
    } else {
      return `${Math.floor(diffInMinutes / 1440)} giorni fa`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 w-10 h-10 rounded-full flex items-center justify-center">
                <SafeIcon icon={FiShield} className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">Y.A.N.A. Dashboard</h1>
                <p className="text-sm text-gray-500">Protezione digitale per {childInfo.name}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-gray-400 hover:text-gray-600 transition-colors relative">
                <SafeIcon icon={FiBell} className="w-6 h-6" />
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                  2
                </span>
              </button>
              <button
                onClick={() => navigate('/')}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <SafeIcon icon={FiSettings} className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-8">
            <button
              onClick={() => setSelectedTab('overview')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                selectedTab === 'overview'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Panoramica
            </button>
            <button
              onClick={() => setSelectedTab('alerts')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                selectedTab === 'alerts'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Allerte
            </button>
            <button
              onClick={() => setSelectedTab('reports')}
              className={`py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                selectedTab === 'reports'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Report
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {selectedTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            {/* Child Status Card */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-purple-100 to-blue-100 w-16 h-16 rounded-full flex items-center justify-center">
                    <SafeIcon icon={FiUser} className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{childInfo.name}</h2>
                    <p className="text-gray-600">{childInfo.age} anni</p>
                    <div className="flex items-center gap-2 mt-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-sm text-gray-500">Online • Ultimo accesso {formatTimeAgo(childInfo.lastActive)}</span>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm text-gray-500 mb-1">Stato protezione</div>
                  <div className="flex items-center gap-2">
                    <SafeIcon icon={FiShield} className="w-5 h-5 text-green-500" />
                    <span className="font-semibold text-green-600">Attiva</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Wellness Score */}
            <div className={`bg-gradient-to-r ${getWellnessBackground(wellnessScore.current)} rounded-xl p-6 border`}>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Benessere Digitale</h3>
                  <div className="flex items-baseline gap-2">
                    <span className={`text-4xl font-bold ${getWellnessColor(wellnessScore.current)}`}>
                      {wellnessScore.current}
                    </span>
                    <span className="text-gray-600">/100</span>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <SafeIcon icon={FiTrendingUp} className="w-4 h-4 text-green-500" />
                    <span className="text-sm text-gray-600">
                      +{wellnessScore.current - wellnessScore.lastWeek} rispetto alla settimana scorsa
                    </span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="bg-white/70 rounded-lg p-4">
                    <div className="text-sm text-gray-600 mb-1">Tendenza</div>
                    <div className="flex items-center gap-2">
                      <SafeIcon icon={FiActivity} className="w-5 h-5 text-blue-500" />
                      <span className="font-semibold text-gray-900 capitalize">{wellnessScore.trend}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Messaggi Analizzati</p>
                    <p className="text-2xl font-bold text-gray-900">{weeklyStats.messagesAnalyzed.toLocaleString()}</p>
                  </div>
                  <SafeIcon icon={FiActivity} className="w-8 h-8 text-blue-500" />
                </div>
                <p className="text-sm text-gray-500 mt-2">Questa settimana</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Minacce Bloccate</p>
                    <p className="text-2xl font-bold text-gray-900">{weeklyStats.threatsBlocked}</p>
                  </div>
                  <SafeIcon icon={FiShield} className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-sm text-gray-500 mt-2">Automaticamente</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Sessioni di Supporto</p>
                    <p className="text-2xl font-bold text-gray-900">{weeklyStats.supportSessions}</p>
                  </div>
                  <SafeIcon icon={FiHeart} className="w-8 h-8 text-purple-500" />
                </div>
                <p className="text-sm text-gray-500 mt-2">Con Y.A.N.A.</p>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-600">Punteggio Sicurezza</p>
                    <p className="text-2xl font-bold text-gray-900">{weeklyStats.safetyScore}%</p>
                  </div>
                  <SafeIcon icon={FiTrendingUp} className="w-8 h-8 text-green-500" />
                </div>
                <p className="text-sm text-gray-500 mt-2">Molto alto</p>
              </div>
            </div>

            {/* Recent Alerts Preview */}
            <div className="bg-white rounded-xl shadow-sm p-6">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-lg font-semibold text-gray-900">Allerte Recenti</h3>
                <button
                  onClick={() => setSelectedTab('alerts')}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                >
                  Vedi tutte
                </button>
              </div>
              <div className="space-y-4">
                {alerts.slice(0, 2).map((alert) => {
                  const alertIcon = getAlertIcon(alert.type);
                  return (
                    <div
                      key={alert.id}
                      className={`bg-gradient-to-r ${getAlertBackground(alert.type)} p-4 rounded-lg border`}
                    >
                      <div className="flex items-start gap-3">
                        <SafeIcon icon={alertIcon.icon} className={`w-5 h-5 ${alertIcon.color} mt-0.5`} />
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-900">{alert.title}</h4>
                          <p className="text-sm text-gray-600 mt-1">{alert.description}</p>
                          <div className="flex items-center justify-between mt-3">
                            <span className="text-xs text-gray-500">{formatTimeAgo(alert.timestamp)}</span>
                            <div className="flex items-center gap-2">
                              {alert.status === 'resolved' ? (
                                <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500" />
                              ) : (
                                <SafeIcon icon={FiClock} className="w-4 h-4 text-yellow-500" />
                              )}
                              <span className="text-xs font-medium text-gray-700 capitalize">
                                {alert.status === 'resolved' ? 'Risolto' : 'In monitoraggio'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}

        {selectedTab === 'alerts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Cronologia Allerte</h2>
              <div className="flex items-center gap-4">
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                  <option>Tutte le allerte</option>
                  <option>Solo alta priorità</option>
                  <option>Solo risolte</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              {alerts.map((alert) => {
                const alertIcon = getAlertIcon(alert.type);
                return (
                  <div
                    key={alert.id}
                    className="bg-white rounded-xl shadow-sm p-6 border"
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-2 rounded-full ${
                        alert.type === 'high' ? 'bg-red-100' :
                        alert.type === 'medium' ? 'bg-yellow-100' : 'bg-blue-100'
                      }`}>
                        <SafeIcon icon={alertIcon.icon} className={`w-6 h-6 ${alertIcon.color}`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900">{alert.title}</h3>
                            <p className="text-gray-600 mt-1">{alert.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-2 mb-2">
                              {alert.status === 'resolved' ? (
                                <>
                                  <SafeIcon icon={FiCheck} className="w-4 h-4 text-green-500" />
                                  <span className="text-sm font-medium text-green-600">Risolto</span>
                                </>
                              ) : (
                                <>
                                  <SafeIcon icon={FiClock} className="w-4 h-4 text-yellow-500" />
                                  <span className="text-sm font-medium text-yellow-600">In monitoraggio</span>
                                </>
                              )}
                            </div>
                            <span className="text-sm text-gray-500">{formatTimeAgo(alert.timestamp)}</span>
                          </div>
                        </div>
                        
                        <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                          <h4 className="font-medium text-gray-900 mb-2">Azione intrapresa:</h4>
                          <p className="text-sm text-gray-700">{alert.action}</p>
                        </div>

                        {alert.status === 'monitoring' && (
                          <div className="mt-4 flex gap-3">
                            <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                              Contatta {childInfo.name}
                            </button>
                            <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-50 transition-colors">
                              Segna come risolto
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        )}

        {selectedTab === 'reports' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold text-gray-900">Report Settimanali</h2>
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors">
                Scarica Report
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Tendenze Benessere</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Lunedì</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                      </div>
                      <span className="text-sm font-medium">85%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Martedì</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                      </div>
                      <span className="text-sm font-medium">78%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Mercoledì</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '65%' }}></div>
                      </div>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Giovedì</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '82%' }}></div>
                      </div>
                      <span className="text-sm font-medium">82%</span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Venerdì</span>
                    <div className="flex items-center gap-2">
                      <div className="w-20 bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
                      </div>
                      <span className="text-sm font-medium">90%</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Categorie di Rischio</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <SafeIcon icon={FiAlertTriangle} className="w-5 h-5 text-red-500" />
                      <span className="font-medium text-gray-900">Cyberbullismo</span>
                    </div>
                    <span className="text-sm font-bold text-red-600">2 eventi</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <SafeIcon icon={FiHeart} className="w-5 h-5 text-yellow-500" />
                      <span className="font-medium text-gray-900">Disagio emotivo</span>
                    </div>
                    <span className="text-sm font-bold text-yellow-600">1 evento</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <SafeIcon icon={FiShield} className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">Grooming</span>
                    </div>
                    <span className="text-sm font-bold text-green-600">0 eventi</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-3">
                      <SafeIcon icon={FiUser} className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-900">Sextortion</span>
                    </div>
                    <span className="text-sm font-bold text-green-600">0 eventi</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Raccomandazioni</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-blue-900 mb-2">💡 Suggerimento</h4>
                  <p className="text-blue-800 text-sm">
                    Il benessere di {childInfo.name} è migliorato questa settimana. 
                    Considera di complimentarti per la gestione positiva delle situazioni online.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-900 mb-2">⚠️ Attenzione</h4>
                  <p className="text-yellow-800 text-sm">
                    Mercoledì è stato rilevato un calo nel punteggio di benessere. 
                    Potrebbe essere utile una conversazione per capire se c'è stato qualche problema.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ParentDashboard;
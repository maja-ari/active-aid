
import React, { useState } from 'react';
import { Moon, Sun, Settings as SettingsIcon, User, Bell, Globe, Lock } from 'lucide-react';
import { useTheme } from 'next-themes';

const Settings = () => {
  const { theme, setTheme } = useTheme();
  const [activeTab, setActiveTab] = useState('general');

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-activeaid-primary">Settings</h2>
        <SettingsIcon className="w-6 h-6 text-activeaid-primary" />
      </div>
      
      <div className="flex mb-6 border-b dark:border-gray-700">
        <button
          onClick={() => setActiveTab('general')}
          className={`py-2 px-4 ${
            activeTab === 'general'
              ? 'border-b-2 border-activeaid-primary text-activeaid-primary'
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          General
        </button>
        <button
          onClick={() => setActiveTab('profile')}
          className={`py-2 px-4 ${
            activeTab === 'profile'
              ? 'border-b-2 border-activeaid-primary text-activeaid-primary'
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          Profile
        </button>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`py-2 px-4 ${
            activeTab === 'notifications'
              ? 'border-b-2 border-activeaid-primary text-activeaid-primary'
              : 'text-gray-500 dark:text-gray-400'
          }`}
        >
          Notifications
        </button>
      </div>
      
      <div className="space-y-6">
        {activeTab === 'general' && (
          <>
            {/* Theme Toggle */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {theme === 'dark' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                <span className="text-gray-700 dark:text-gray-200">Theme</span>
              </div>
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-full bg-activeaid-lightaqua hover:bg-activeaid-secondary text-activeaid-text"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
            </div>
            
            {/* Language */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span className="text-gray-700 dark:text-gray-200">Language</span>
              </div>
              <select className="p-2 rounded bg-activeaid-lightaqua text-activeaid-text">
                <option value="en">English</option>
                <option value="fr">French</option>
                <option value="es">Spanish</option>
                <option value="de">German</option>
              </select>
            </div>
          </>
        )}
        
        {activeTab === 'profile' && (
          <>
            {/* Profile Settings */}
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-activeaid-primary flex items-center justify-center text-white text-xl">
                  <User size={32} />
                </div>
                <div>
                  <h3 className="font-medium text-gray-800 dark:text-gray-200">Your Profile</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Update your personal information</p>
                </div>
              </div>
              
              <div className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Name</label>
                  <input 
                    type="text" 
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-activeaid-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email</label>
                  <input 
                    type="email" 
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-activeaid-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Bio</label>
                  <textarea 
                    className="w-full p-2 border rounded focus:ring-2 focus:ring-activeaid-primary dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    placeholder="Tell us about yourself"
                    rows={3}
                  />
                </div>
                <button className="bg-activeaid-primary text-white px-4 py-2 rounded hover:bg-activeaid-midaqua">
                  Save Changes
                </button>
              </div>
            </div>
          </>
        )}
        
        {activeTab === 'notifications' && (
          <>
            {/* Notifications Settings */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 mb-4">
                <Bell className="w-5 h-5" />
                <h3 className="font-medium text-gray-800 dark:text-gray-200">Notification Preferences</h3>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Email Notifications</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-activeaid-lightaqua rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-activeaid-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">Push Notifications</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-activeaid-lightaqua rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-activeaid-primary"></div>
                  </label>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 dark:text-gray-300">In-App Notifications</span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" defaultChecked />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-activeaid-lightaqua rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-activeaid-primary"></div>
                  </label>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Settings;

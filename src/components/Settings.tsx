
import React from 'react';
import { Moon, Sun, Settings as SettingsIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

const Settings = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-activeaid-primary">Settings</h2>
        <SettingsIcon className="w-6 h-6 text-activeaid-primary" />
      </div>
      
      <div className="space-y-6">
        {/* Theme Toggle */}
        <div className="flex items-center justify-between">
          <span className="text-gray-700 dark:text-gray-200">Theme</span>
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full bg-activeaid-lightaqua hover:bg-activeaid-secondary"
          >
            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
